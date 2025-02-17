import { useState, useEffect, useMemo } from 'react';
import * as React from "react";
import { formatUnits, parseUnits } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Button from '@mui/material/Button';
import { useAccount, useWalletClient, usePublicClient } from 'wagmi';
import { erc20Abi } from 'viem';
import { useMaxAmount } from './hooks/useMaxAmount';
import { useTokenBalance } from './hooks/useTokenBalance';
import { useChain } from './hooks/useChain';
import { VAULTS } from './lib/queries/useVaults';
import { useHolyheldSDK } from './hooks/useHolyheld';
import { useBorrow } from './hooks/useBorrow';
import { useAlchemistPosition } from './hooks/useAlchemistPosition';
import logo from './assets/ALCX_Std_logo.png';
import './App.css';
import { Network } from '@holyheld/sdk';
import { useAlchemixDeposit, DepositAsset, DEPOSIT_ASSETS } from './hooks/useAlchemixLoan';
import { useMintAl } from './hooks/UseMintAlETH';
import { SYNTH_ASSETS, SYNTH_ASSETS_ADDRESSES } from "@/lib/config/synths";
import type { SynthAsset } from "@/lib/config/synths";
import { CONTRACTS } from './lib/wagmi/chains';
import { useAlchemists } from "@/lib/queries/useAlchemists";
import { TransactionConfirmation } from './components/TransactionConfirmation';
import { MessageProvider, useMessages } from './context/MessageContext';
import MessageDisplay from './components/MessageDisplay';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastConfig } from './utils/toast';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useServerSettings } from './hooks/useServerSettings';

interface ErrorData { message: string; }

const App: React.FC = () => {
  const { addMessage } = useMessages();

  const [depositAmount, setDepositAmount] = useState<string>('');
  const [selectedStrategy, setSelectedStrategy] = useState<string>('');
  const [loanAsset, setLoanAsset] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | Error | null>(null);
  const [holytag, setHolytag] = useState<string>('');
  const [availableStrategies, setAvailableStrategies] = useState<any[]>([]);
  const [mode, setMode] = useState<'topup' | 'borrowOnly'>('borrowOnly');
  const [borrowAmount, setBorrowAmount] = useState<string>('');
  const { borrow, isLoading: isBorrowing } = useBorrow();
  const [depositAsset, setDepositAsset] = useState<DepositAsset | `0x${string}` | ''>('');
  const position = useAlchemistPosition(depositAsset);
  console.log('Position object:', position);
  // Ne pas formater le montant déposé pour garder la précision
  const depositedAmount = position.collateral.amount;

  console.log('Deposited amount:', depositedAmount);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [txDetails, setTxDetails] = useState({
    type: '',
    amount: '',
    token: '',
    collateralAmount: '',
    depositAsset: '',
    apr: 0,
    estimatedEarnings: {
      daily: '0.00',
      weekly: '0.00',
      monthly: '0.00',
      yearly: '0.00',
    },
    expectedDebt: '',
    loanAsset: ''
  });

  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const chain = useChain();
  const publicClient = usePublicClient();

  const [, setCollateralAmount] = useState<string>('0.00');
  const [, setEstimatedEarnings] = useState<string>('0.00');
  const [expectedDebt, setExpectedDebt] = useState<string>('0.00');
  const [apr, setApr] = useState<number>(0);

  const { validateHolytag, convertToEUR, performTopUp, sdk } = useHolyheldSDK();
  const { deposit } = useAlchemixDeposit();
  const { mint } = useMintAl();
  const { data: alchemists, isLoading: alchemistsLoading, error: alchemistsError } = useAlchemists();
  const { Tbalance, isLoading: balanceLoading, error: balanceError } = useTokenBalance(
    address,
    chain?.id,
    depositAsset
  );

  const { calculateMaxAmount, isLoading: maxLoading } = useMaxAmount();
  type SupportedChainId = keyof typeof CONTRACTS;

  const {
    settings,
    isTopupEnabled,
    minTopUpAmountInEUR,
    maxTopUpAmountInEUR,
    topUpFeePercent,
    loading: serverSettingsLoading,
    error: serverSettingsError
  } = useServerSettings();

  useEffect(() => {
    if (serverSettingsError) {
      console.error('Error fetching server settings:', serverSettingsError);
    }
    console.log('Server settings:', settings);
  }, [serverSettingsError, settings]);

  const calculateEstimatedEarnings = (deposit: number, apr: number, periodInDays: number = 365): number => {
    // Convert annual APR to daily rate
    const dailyRate = apr / 36500; // Dividing by 365 * 100 to get daily percentage

    // Calculate earnings using compound interest formula
    // A = P(1 + r)^t where:
    // A = Final amount
    // P = Principal (deposit)
    // r = Daily interest rate
    // t = Number of days
    const finalAmount = deposit * Math.pow(1 + dailyRate, periodInDays);
    const earnings = finalAmount - deposit;

    return earnings;
  };

  const handleBorrowOnly = async () => {
    try {
      setIsModalOpen(false);

      // Si c'est un nombre décimal en cours de saisie, on le convertit en wei
      let finalAmount = borrowAmount;
      if (typeof borrowAmount === 'string' && borrowAmount.includes('.')) {
        finalAmount = parseUnits(parseFloat(borrowAmount).toFixed(18), 18).toString();
      }

      // Validation du montant
      if (!finalAmount || parseFloat(formatUnits(finalAmount, 18)) <= 0) {
        throw new Error('Please enter a valid borrow amount greater than 0.');
      }

      console.log('=== BORROW ONLY DETAILS ===');
      console.log('1. Final Amount:', finalAmount);
      console.log('2. In ETH:', formatUnits(finalAmount, 18));
      console.log('3. Deposit Asset:', depositAsset);
      console.log('4. Strategy:', selectedStrategy);
      console.log('========================');

      if (!depositAsset) {
        throw new Error('Please select an asset.');
      }

      // Determine the deposit amount based on the mode
      const depositAmountToUse = mode === 'borrowOnly' ? '0' : depositAmount;

      // Call borrow function with the appropriate deposit amount
      const txResponse = await borrow(
        depositAsset,
        depositAmountToUse,
        selectedStrategy,
        mode === 'borrowOnly',
        holytag,
        borrowAmount
      );

      if (!txResponse || txResponse.status !== 'success') {
        throw new Error(txResponse?.status === 'reverted'
          ? 'Transaction was reverted by the network'
          : 'Transaction failed');
      }

      return txResponse;
    } catch (err) {
      console.error('Error during borrow:', err);
      throw err;
    }
  };

  const formatNumberWithoutExponent = (num: number | string): string => {
    // Si c'est déjà une chaîne, vérifier si elle contient un point décimal
    if (typeof num === 'string') {
      return num.includes('.') ? num : num;
    }

    // Pour les nombres
    const str = num.toString();
    if (str.includes('e')) {
      const [base, exponent] = str.split('e');
      const exp = parseInt(exponent);
      if (exp < 0) {
        const baseWithoutDot = base.replace('.', '');
        return '0.' + '0'.repeat(-exp - 1) + baseWithoutDot;
      } else {
        const baseWithoutDot = base.replace('.', '');
        return baseWithoutDot + '0'.repeat(exp - (baseWithoutDot.length - 1));
      }
    }
    return str;
  };

  const handleBorrowPercentage = (percentage: number) => {
    // Validate depositAmount for all modes
    if (!depositAmount && mode !== 'borrowOnly') {
      console.error('Deposit amount is required for this mode.');
      return;
    }
    // For borrow-only mode, validate deposited amount
    if (mode === 'borrowOnly' && (!depositedAmount || parseFloat(depositedAmount) <= 0)) {
      console.error('Invalid deposited amount for borrow-only mode.');
      return;
    }

    let amount;
    if (mode === 'borrowOnly') {
      const depositedAmountInEth = parseFloat(formatUnits(depositedAmount, 18));
      const maxBorrowableAmount = depositedAmountInEth * 0.5;
      amount = maxBorrowableAmount * (percentage / 100);
      console.log('Borrow only calculation:', {
        depositedAmount: formatNumberWithoutExponent(parseFloat(depositedAmount)),
        depositedAmountInEth: formatNumberWithoutExponent(depositedAmountInEth),
        maxBorrowableAmount: formatNumberWithoutExponent(maxBorrowableAmount),
        percentage,
        finalAmount: formatNumberWithoutExponent(amount)
      });
    } else {
      const maxBorrowableAmount = parseFloat(depositAmount) * 0.5;
      amount = maxBorrowableAmount * (percentage / 100);
    }

    // Limite à 5000 ETH dans tous les cas
    amount = Math.min(amount, 5000);
    console.log('Calculated borrow amount:', {
      mode,
      depositedAmount: mode === 'borrowOnly' ? formatNumberWithoutExponent(parseFloat(depositedAmount)) : depositAmount,
      percentage,
      calculatedAmount: formatNumberWithoutExponent(amount)
    });
    setBorrowAmount(amount.toString());
  };

  useEffect(() => {
    if (!selectedStrategy) {
      setCollateralAmount('0.00');
      setEstimatedEarnings('0.00');
      setExpectedDebt('0.00');
      setApr(0);
      return;
    }

    const selectedStrategyData = availableStrategies.find(
      strategy => strategy.address === selectedStrategy
    );

    if (selectedStrategyData) {
      const aprValue = parseFloat(selectedStrategyData.apr) || 0;
      setApr(aprValue);

      const deposit = parseFloat(depositAmount) || 0;
      setCollateralAmount(deposit.toFixed(4));

      // Calculate estimated earnings for different time periods
      /*       const dailyEarnings = calculateEstimatedEarnings(deposit, aprValue, 1);
            const weeklyEarnings = calculateEstimatedEarnings(deposit, aprValue, 7);
            const monthlyEarnings = calculateEstimatedEarnings(deposit, aprValue, 30); */
      const yearlyEarnings = calculateEstimatedEarnings(deposit, aprValue, 365);

      // Set earnings to yearly by default
      setEstimatedEarnings(yearlyEarnings.toFixed(2));

      const debt = deposit / 2;
      setExpectedDebt(debt.toFixed(4));
    }
  }, [depositAmount, selectedStrategy, availableStrategies]);

  const availableDepositAssets = useMemo(() => {
    if (!chain.id) return [];
    const vaults = VAULTS[chain.id];
    if (!vaults) return [];
    // Get unique underlying symbols from vaults
    const vaultAssets = [...new Set(Object.values(vaults).map((vault) => vault.underlyingSymbol))];
    // Add ETH if there are WETH vaults with wethGateway
    const hasWethVaults = Object.values(vaults).some(
      vault => vault.underlyingSymbol === 'WETH' && vault.wethGateway
    );

    return hasWethVaults ? [...vaultAssets, 'ETH'] : vaultAssets;
  }, [chain.id]);

  const handleDepositAssetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('Selected deposit asset:', e.target.value);
    const value = e.target.value;
    if (value === '' || DEPOSIT_ASSETS.includes(value as DepositAsset)) {
      setDepositAsset(value as DepositAsset | '');
      addMessage(`Selected deposit asset: ${value}`, 'info');
    }

    // Check if the current strategy is valid for the new asset
    const isCurrentStrategyValid = availableStrategies.some(strategy => {
      console.log('Checking strategy:', strategy);
      return strategy.address === selectedStrategy && strategy.asset === value;
    });
    console.log('Is current strategy valid:', isCurrentStrategyValid);
    console.log('Current selectedStrategy:', selectedStrategy);
    console.log('Available strategies:', availableStrategies);

    if (!isCurrentStrategyValid && selectedStrategy) {
      console.log('Resetting strategy selection');
      setSelectedStrategy('');
    }
  };

  const synthMapping: Record<string, string> = {
    USDC: "alUSD",
    DAI: "alUSD",
    WETH: "alETH",
    ETH: "alETH",
    USDT: "alUSD",
  };

  // Fonction pour récupérer les stratégies disponibles
  const getStrategiesForAsset = async (
    asset: string,
    vaults: Record<string, any>,
    chainId: number
  ) => {
    const supportedChainId = chainId as SupportedChainId;

    const getYield = async (vault: any, _underlying?: any) => {
      if (vault.api?.apr) {
        try {
          // Pour WETH/ETH
          if (asset === 'ETH' || asset === 'WETH') {
            const tokenKey = 'WETH';
            const tokenAddress = CONTRACTS[supportedChainId]?.TOKENS[tokenKey]?.token; if (!tokenAddress) throw new Error(`No token address found for ${tokenKey}`);
            const apr = await vault.api.apr({
              chainId,
              underlyingToken: tokenAddress
            });
            return apr;
          }

          // Pour les autres tokens (USDC, DAI, etc.)
          const tokenKey = asset.toUpperCase() as keyof typeof CONTRACTS[SupportedChainId]["TOKENS"];
          const tokenAddress = CONTRACTS[supportedChainId]?.TOKENS[tokenKey]?.token;
          if (!tokenAddress) toast.error(`No token address found for ${tokenKey}`, {
            ...toastConfig,
            icon: <span aria-label="error">❌</span>,
          });

          const apr = await vault.api.apr({
            chainId,
            underlyingToken: tokenAddress
          });
          return apr;
        } catch (err) {
          toast.error(`Error fetching APR for asset ${asset}:`, {
            ...toastConfig,
            icon: <span aria-label="error">❌</span>,
          });
          return 'N/A';
        }
      }
      return 'N/A';
    };
    const filteredVaults = asset === 'ETH'
      ? Object.entries(vaults).filter(([_, vault]) => vault.underlyingSymbol === 'WETH' && vault.wethGateway)
      : Object.entries(vaults).filter(([_, vault]) => vault.underlyingSymbol === asset);


    const strategies = await Promise.all(
      filteredVaults.map(async ([address, vault]) => {
        const apr = await getYield(vault, vault.underlying); // Récupération APR
        return {
          address,
          label: vault.label,
          image: vault.image,
          yieldSymbol: vault.yieldSymbol,
          apr: apr !== 'N/A' ? `${apr}` : 'N/A' // Formatez l’APR

        };
      })
    );
    return strategies;
  };

  // Charger les stratégies à chaque changement d'actif déposé ou de chaîne
  useEffect(() => {
    const fetchStrategies = async () => {
      if (!chain.id || !depositAsset) {
        setAvailableStrategies([]);
        return;
      }

      const vaults = VAULTS[chain.id];
      if (!vaults) return;

      setIsLoading(true);
      const strategies = await getStrategiesForAsset(depositAsset, vaults, chain.id);
      setAvailableStrategies(strategies);
      setIsLoading(false);
    };

    fetchStrategies();
  }, [chain.id, depositAsset]);

  const formattedStrategies = useMemo(() => {
    return availableStrategies.map((strategy) => ({
      value: strategy.address,
      label: `${strategy.label} (${strategy.apr}%)`,
    }));
  }, [availableStrategies]);

  const [, setIsValidHolytag] = useState(false);
  useEffect(() => {
    const handler = setTimeout(() => {
      if (holytag) {
        validateHolytag(holytag).then((isValid) => {
          setIsValidHolytag(isValid);
        });
      } else {
        setIsValidHolytag(false);
      }
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [holytag]);


  const handleValidateHolytag = async () => {
    try {
      const isValid = await validateHolytag(holytag);
      if (isValid) {
        toast.success('Holytag is valid!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          ...toastConfig,
        });
      } else {
        toast.error('Invalid Holytag', {
          ...toastConfig,
          icon: <span aria-label="error">❌</span>,
        });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error during holytag validation:', err.message);
        toast.error(err.message, {
          ...toastConfig,
          icon: <span aria-label="error">❌</span>,
        });
      } else {
        console.error('An unknown error occurred during holytag validation');
        toast.error('An unknown error occurred during holytag validation', {
          ...toastConfig,
          icon: <span aria-label="error">❌</span>,
        });
      }
    }
  };

  const handleInputChange = (value: string) => {
    const regex = /^[0-9]*[.]?[0-9]*$/;
    if (regex.test(value)) {
      setDepositAmount(value);
    }
    if (value && parseFloat(value) > 0) {
      addMessage(`Set deposit amount to ${value}`, 'info');
    }
  };

  const handleBorrowAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setBorrowAmount('0');
      return;
    }

    try {
      // Convertir en format décimal standard si nécessaire
      const formattedValue = formatNumberWithoutExponent(parseFloat(value));
      setBorrowAmount(formattedValue);
    } catch (error) {
      console.error('Error formatting borrow amount:', error);
      setBorrowAmount('0');
    }
  };

  // useEffect pour mettre à jour automatiquement le loanAsset
  useEffect(() => {
    if (depositAsset) {
      const mappedAsset = synthMapping[depositAsset.toUpperCase()];
      setLoanAsset(mappedAsset || '');
    }
  }, [depositAsset]);

  const getSynthToken = (asset: string): { type: SynthAsset; address: string } => {
    const assetUpper = asset.toUpperCase();
    const chainId = chain?.id;

    if (!chainId || !(chainId in CONTRACTS)) {
      throw new Error(`Unsupported chain ID: ${chainId}`);
    }

    // Handle direct synth assets
    if (assetUpper === 'ALETH') {
      const address = SYNTH_ASSETS_ADDRESSES[chainId][SYNTH_ASSETS.ALETH];
      return {
        type: SYNTH_ASSETS.ALETH,
        address
      };
    }

    if (assetUpper === 'ALUSD') {
      const address = SYNTH_ASSETS_ADDRESSES[chainId][SYNTH_ASSETS.ALUSD];
      return {
        type: SYNTH_ASSETS.ALUSD,
        address
      };
    }

    // Handle deposit assets
    if (assetUpper === 'WETH' || assetUpper === 'ETH') {
      const address = SYNTH_ASSETS_ADDRESSES[chainId][SYNTH_ASSETS.ALETH];
      return {
        type: SYNTH_ASSETS.ALETH,
        address
      };
    }

    if (assetUpper === 'USDC' || assetUpper === 'DAI' || assetUpper === 'USDT') {
      const address = SYNTH_ASSETS_ADDRESSES[chainId][SYNTH_ASSETS.ALUSD];
      return {
        type: SYNTH_ASSETS.ALUSD,
        address
      };
    }

    throw new Error(`Unsupported deposit asset: ${asset}`);
  };

  const mapNetworkName = (networkName: string): Network => {
    const networkMapping: Record<string, Network> = {
      'arbitrum one': Network.arbitrum,
      arbitrum: Network.arbitrum,
      polygon: Network.polygon,
      ethereum: Network.ethereum,
      optimism: Network.optimism,
      'op mainnet': Network.optimism,
    };
    return networkMapping[networkName.toLowerCase()] || networkName.toLowerCase();
  };

  const handleTopUp = async (holytag: string, amount: string, depositAsset: string) => {
    try {
      // Vérification des limites min/max avant toute opération
      /*       const amountInEth = parseFloat(amount);
            if (amountInEth < parseFloat(minTopUpAmountInEUR) || amountInEth > parseFloat(maxTopUpAmountInEUR)) {
              throw new Error(`Amount must be between ${minTopUpAmountInEUR} and ${maxTopUpAmountInEUR} EUR`);
            } */

      console.log('handleTopUp: depositAsset =', depositAsset, 'selectedStrategy =', selectedStrategy);
      console.log('Handle Top-Up initiated.');

      // Check if wallet is connected and chain is supported
      if (!publicClient || !walletClient || !chain || !address) {
        throw new Error('Please connect your wallet and select a valid chain.');
      }

      // Validation du holytag
      const isValidTag = await validateHolytag(holytag);
      if (!isValidTag) {
        throw new Error('Invalid Holytag. Please enter a valid holytag before proceeding.');
      }

      if (!amount || parseFloat(amount) <= 0) {
        throw new Error('Please enter a valid deposit amount.');
      }
      if (!depositAsset) {
        throw new Error('Please select a deposit asset.');
      }
      if (!selectedStrategy) {
        throw new Error('Please select a yield strategy.');
      }
      if (alchemistsLoading) {
        throw new Error('Loading alchemists data...');
      }
      if (!DEPOSIT_ASSETS.includes(depositAsset as DepositAsset)) {
        throw new Error(`Invalid deposit asset: ${depositAsset}`);
      }

      if (alchemistsError) {
        console.error("alchemists:", alchemists)

        console.error("synth:", synthMapping)
        console.log(alchemistsError)
        throw new Error('Failed to fetch alchemists data.');
      }
      //console.log("Available alchemists:", alchemists);
      //console.log("Deposit asset:", depositAsset.toUpperCase());

      const mappedSynthType = synthMapping[depositAsset.toUpperCase()] || depositAsset.toUpperCase();
      if (!mappedSynthType) {
        throw new Error(`No synth mapping found for asset: ${depositAsset}`);
      }

      // Attendre que alchemists soit chargé et défini
      if (!alchemists || alchemists.length === 0) {
        throw new Error('No alchemists data available');
      }

      // Trouver l'alchemist correspondant
      const alchemist = alchemists.find((al: { synthType: string; }) => {
        //console.log("Checking alchemist:", al.synthType, "against", mappedSynthType);
        return al.synthType === mappedSynthType;
      });

      if (!alchemist) {
        console.error("Available alchemists:", alchemists.map((a: { synthType: any; address: any; }) => ({
          type: a.synthType,
          address: a.address
        })));
        throw new Error(`No alchemist found for asset: ${depositAsset} (${mappedSynthType})`);
      }

      const alchemistAddress = alchemist.address;

      // Étape 1 : Vérification des paramètres
      //console.log('Fetching server settings...');
      const serverSettings = await sdk.getServerSettings();
      if (!serverSettings.external.isTopupEnabled) {
        throw new Error('Top-up is currently disabled.');
      }

      if (!isTopupEnabled) {
        throw new Error('Top-up service is currently unavailable');
      }

      // Proceed with the top-up process
      type SupportedChainId = keyof typeof CONTRACTS;

      const chainId = chain.id as SupportedChainId;

      // Logique différente pour ETH et ERC20
      if (depositAsset === 'ETH') {
        console.log('Processing ETH deposit...');

        // Vérifier la vault et le gateway
        const vaults = VAULTS[chainId];
        const vault = Object.entries(vaults).find(([addr]) => addr === selectedStrategy)?.[1];

        if (!vault?.wethGateway) {
          throw new Error('Selected strategy does not support ETH deposits')
        }

        // Dépôt ETH avec valeur attachée
        const depositResult = await deposit(
          selectedStrategy as `0x${string}`,
          amount,
          address as `0x${string}`,
          depositAsset
        );

        if (!depositResult) throw new Error('ETH deposit failed');

        const depositReceipt = await publicClient.waitForTransactionReceipt({
          hash: depositResult.transactionHash,
        });

        if (depositReceipt.status !== 'success') {
          throw new Error('ETH deposit transaction failed');
        }

        await new Promise(resolve => setTimeout(resolve, 15000));

        // Utiliser le borrowAmount pour le mint au lieu de 50% du dépôt
        const { type: synthType } = getSynthToken(depositAsset);

        const mintResult = await mint(
          borrowAmount,
          address,
          synthType
        );

        if (!mintResult) throw new Error('Mint failed');

        const mintReceipt = await publicClient.waitForTransactionReceipt({
          hash: mintResult.transactionHash,
        });

        if (mintReceipt.status !== 'success') {
          throw new Error('Minting transaction failed');
        }

        // Top-up pour ETH
        const synthTokenAddress = SYNTH_ASSETS_ADDRESSES[chainId][synthType];
        if (!synthTokenAddress) {
          throw new Error(`Synthetic token address not found for ${synthType}`);
        }

        // Étape 6 : Conversion en EUR
        const formattedAmount = formatUnits(BigInt(mintResult.mintedAmount), 18);

        console.log('Converting to EUR...', {
          mintedAmount: mintResult.mintedAmount,
          formattedAmount,
          synthType
        });

        const mappedNetwork = mapNetworkName(chain.name);

        const decimals = await publicClient.readContract({
          address: synthTokenAddress as `0x${string}`,
          abi: erc20Abi,
          functionName: 'decimals',
        }) as number;

        const alAmount = formatUnits(BigInt(mintResult.mintedAmount), decimals);

        const { transferData } = await convertToEUR(
          synthTokenAddress,
          decimals,
          formattedAmount,
          mappedNetwork
        );

        // Étape 7 : Top-Up
        await performTopUp(
          publicClient,
          walletClient,
          address,
          synthTokenAddress,
          mappedNetwork,
          alAmount,
          transferData,
          holytag,
          true,
          {
            onHashGenerate: (hash) => console.log('Transaction Hash:', hash),
            onStepChange: (step) => console.log('Current Step:', step),
          }
        );

        console.log('Top-up completed successfully.');
        return true; // Retourner explicitement true pour indiquer le succès
      } else {
        setIsModalOpen(false);


        const tokenKey = depositAsset.toUpperCase() as keyof typeof CONTRACTS[SupportedChainId]["TOKENS"];
        const tokenInfo = CONTRACTS[chainId]?.TOKENS[tokenKey];

        // console.log("Token Key:", tokenKey);
        //console.log("Token Info:", tokenInfo);

        if (!tokenInfo) {
          throw new Error(`Token configuration not found for asset: ${depositAsset}`);
        }

        const tokenAddress = tokenInfo.token;
        const depositDecimals = tokenInfo.decimals;

        const depositAmountWei = parseUnits(amount, depositDecimals);

        if (!tokenAddress || !depositDecimals) {
          throw new Error(`Invalid token configuration for ${depositAsset} on chain ID ${chainId}.`);
        }

        //  console.log("Token Address:", tokenAddress);
        // console.log("Deposit Amount (Wei):", depositAmountWei.toString());

        // Étape 2 : Approve

        // Vérifier l'allocation avant d'approuver
        const allowance = await publicClient.readContract({
          address: tokenAddress,
          abi: erc20Abi,
          functionName: 'allowance',
          args: [address, alchemistAddress],
        }) as bigint;

        if (allowance < depositAmountWei) {
          console.log(`Current allowance: ${allowance.toString()}, required: ${depositAmountWei.toString()}. Approving...`);

          const approveHash = await walletClient.writeContract({
            address: tokenAddress as `0x${string}`,
            abi: erc20Abi,
            functionName: 'approve',
            args: [alchemistAddress, depositAmountWei],
            gas: 100000n,
          });

          console.log('Approve transaction sent, waiting for confirmation...');
          const approveReceipt = await publicClient.waitForTransactionReceipt({
            hash: approveHash,
            confirmations: 1
          });

          console.log('Approve confirmed:', approveReceipt);

          if (approveReceipt.status !== "success") {
            throw new Error('Approve transaction failed.');
          }
        } else {
          console.log(`Sufficient allowance: ${allowance.toString()} (no need to approve).`);
        }

        console.log('handleTopUp: selectedStrategy =', selectedStrategy);
        if (!selectedStrategy) {
          throw new Error('Aucune stratégie sélectionnée');
        }
        // Étape 3 : Dépôt
        const depositResult = await deposit(
          selectedStrategy as `0x${string}`,
          amount,
          address as `0x${string}`,
          depositAsset as DepositAsset
        );

        if (!depositResult) throw new Error('Deposit failed.');
        console.log('Waiting for deposit confirmation...');
        const depositReceipt = await publicClient.waitForTransactionReceipt({
          hash: depositResult.transactionHash,
        });
        console.log('Deposit confirmed:', depositReceipt);

        await new Promise(resolve => setTimeout(resolve, 15000));

        // Étape 4 : Mint
        const { type: synthType } = getSynthToken(depositAsset);

        const mintResult = await mint(
          borrowAmount,
          address as `0x${string}`,
          synthType
        );

        if (!mintResult) throw new Error(`${synthType} minting failed.`);
        console.log('Waiting for mint transaction confirmation...');
        const mintReceipt = await publicClient.waitForTransactionReceipt({
          hash: mintResult.transactionHash,
        });
        console.log('Mint confirmed:', mintReceipt);

        await new Promise(resolve => setTimeout(resolve, 10000)); // 10 secondes de pause

        /*       // Étape 5 : Vérification du solde synthétique
              console.log('Verifying synthetic token balance...');
              const synthBalance = await publicClient.readContract({
                address: synthAddress as `0x${string}`,
                abi: erc20Abi,
                functionName: 'balanceOf',
                args: [address],
              });
          
              if (BigInt(synthBalance.toString()) < BigInt(mintResult.mintedAmount)) {
                throw new Error('Synthetic token balance not yet updated.');
              }
              console.log('Current synthetic token balance:', synthBalance.toString()); */

        // Get the correct alAsset (alUSD or alETH) for conversion
        const synthTokenAddress = SYNTH_ASSETS_ADDRESSES[chainId][synthType];
        if (!synthTokenAddress) {
          throw new Error(`Synthetic token address not found for ${synthType}`);
        }

        // Étape 6 : Conversion en EUR
        const formattedAmount = formatUnits(BigInt(mintResult.mintedAmount), 18);

        console.log('Converting to EUR...');
        console.log('format out...', formattedAmount);

        const mappedNetwork = mapNetworkName(chain.name);

        //  console.log('synth:', synthTokenAddress)
        // console.log('tokenAdress:', tokenAddress)
        // console.log('synthAdress:', synthAddress)

        const decimals = await publicClient.readContract({
          address: synthTokenAddress as `0x${string}`, // Adresse du synthToken (ex : alETH)
          abi: erc20Abi,
          functionName: 'decimals',
        }) as number;

        const alAmount = formatUnits(BigInt(mintResult.mintedAmount), decimals);
        //  console.log("alAmount with correct decimals:", alAmount);

        const { transferData } = await convertToEUR(
          synthTokenAddress,
          decimals,
          formattedAmount,
          mappedNetwork
        );
        //  console.log(convertToEUR)
        //  console.log("Type of transferData:", typeof transferData);
        //  console.log('TransferData before top-up:', transferData);

        if (!transferData) {
          throw new Error('Failed to get transfer data');
        }

        // Étape 7 : Top-Up
        await performTopUp(
          publicClient,
          walletClient,
          address,
          synthTokenAddress,
          mappedNetwork,
          alAmount,
          transferData,
          holytag,
          true,
          {
            onHashGenerate: (hash) => console.log('Transaction Hash:', hash),
            onStepChange: (step) => console.log('Current Step:', step),
          }
        );
        console.log('Top-up completed successfully.');
        return true; // Retourner explicitement true pour indiquer le succès
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error('An unknown error occurred');
      }

      setError(err instanceof Error ? err : 'An unknown error occurred');
      return false; // Retourner explicitement false pour indiquer l'échec
    } finally {
      setIsLoading(false);
    }
  };

  const handleMaxAmount = async () => {
    if (!address || !chain?.id || !depositAsset) return;
    try {
      const maxAmount = await calculateMaxAmount(address, chain.id, depositAsset);
      setDepositAmount(maxAmount);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error setting max amount:', err.message);
      } else {
        console.error('An unknown error occurred while setting max amount');
      }

      setError(err instanceof Error ? err : 'An unknown error occurred');
    }
  };

  const openConfirmationModal = () => {
    // Construire l'objet de détails à afficher dans le pop-up
    const deposit = parseFloat(depositAmount || '0');
    const txDetails = {
      type: mode === 'topup' ? 'Deposit & Top-up' : 'Top-up',
      amount: mode === 'topup' ? depositAmount : borrowAmount,
      token: depositAsset || '',
      collateralAmount: mode === 'topup' ? depositAmount : '',
      depositAsset: depositAsset || '',
      apr: mode === 'topup' ? apr : 0,
      estimatedEarnings: mode === 'topup'
        ? {
          daily: calculateEstimatedEarnings(deposit, apr, 1).toFixed(8),
          weekly: calculateEstimatedEarnings(deposit, apr, 7).toFixed(8),
          monthly: calculateEstimatedEarnings(deposit, apr, 30).toFixed(8),
          yearly: calculateEstimatedEarnings(deposit, apr, 365).toFixed(8)
        }
        : {
          daily: '0.00',
          weekly: '0.00',
          monthly: '0.00',
          yearly: '0.00'
        },
      expectedDebt,
      loanAsset
    };

    setTxDetails(txDetails);
    setIsModalOpen(true);
  };

  // -------------------------------------
  // Confirmation depuis le pop-up
  // -------------------------------------
  const handleSubmit = async () => {
    try {
      // Validate holytag only in topup mode
      if (mode === 'topup') {
        const isValidTag = await validateHolytag(holytag);
        if (!isValidTag) {
          toast.error('Invalid Holytag. Please enter a valid holytag before proceeding.', {
            ...toastConfig,
            icon: <span aria-label="error">❌</span>,
          });
          return;
        }
      }

      const promise = (async () => {
        try {
          if (mode === 'topup') {
            const result = await handleTopUp(holytag, depositAmount, depositAsset);
            if (!result) {
              throw new Error('Top-up operation failed');
            }
          } else {
            const borrowResult = await handleBorrowOnly();
            if (!borrowResult || borrowResult.status !== 'success') {
              throw new Error(borrowResult?.status === 'reverted'
                ? 'Transaction was reverted by the network'
                : 'Transaction failed');
            }
          }
          return true;
        } catch (err) {
          console.error(`Error in ${mode} operation:`, err);
          if (err instanceof Error) {
            throw err;
          } else {
            throw new Error('Transaction failed');
          }
        }
      })();

      await toast.promise(promise, {
        pending: {
          render: `${mode === 'topup' ? 'Deposit & Top-up' : 'Top-up'} transaction in progress...`,
          ...toastConfig,
        },
        success: {
          render: `${mode === 'topup' ? 'Deposit & Top-up' : 'Top-up'} completed successfully!`,
          ...toastConfig,
        },
        error: {
          render({ data }) {
            return data instanceof Error ? data.message : 'Transaction failed';
          },
          ...toastConfig,
        },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error during transaction:', error);
      } else {
        console.error('An unknown error occurred during transaction');
      }
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(typeof error === 'string' ? error : (error instanceof Error ? error.message : 'An error occurred'), {
        ...toastConfig,
        icon: <span aria-label="error">❌</span>,
      });
      setError(null); // Clear error after showing toast
    }
  }, [error]);

  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setShowWelcomeModal(true);
    }
  }, []);

  const handleCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
    localStorage.setItem('hasSeenWelcome', 'true');
  };

  useEffect(() => {
    if (!serverSettingsLoading && mode === 'topup' && !isTopupEnabled) {
      toast.error('Top-up service is currently unavailable', {
        ...toastConfig,
        icon: <span aria-label="error">❌</span>,
      });
    }
  }, [mode, isTopupEnabled, serverSettingsLoading]);

  return (
    <div className="bg-alchemix">
      <ToastContainer />
      <MessageProvider>
        <div className="app-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <MessageDisplay />

          {/* Welcome Modal */}
          <Dialog
            open={showWelcomeModal}
            onClose={handleCloseWelcomeModal}
            maxWidth="sm"
            fullWidth
            PaperProps={{
              style: {
                background: 'rgba(20, 25, 33, 0.95)',
                color: 'white',
                border: '1px solid #2d2f36',
                borderRadius: '8px',
              },
            }}
          >
            <DialogTitle sx={{
              borderBottom: '1px solid #2d2f36',
              color: '#f5caa4'
            }}>
              Welcome to Alchemix Self-Repaying Loans
            </DialogTitle>
            <DialogContent sx={{ mt: 2 }}>
              <p>Choose an option:</p>
              <ul style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '15px' }}>
                  <strong>Deposit & Top-up</strong>
                  <p style={{ margin: '5px 0', color: '#979BA2' }}>
                    Deposit assets into an Alchemix vault and take a loan to your HolyHeld card
                  </p>
                </li>
                <li style={{ marginBottom: '15px' }}>
                  <strong>Top-up</strong>
                  <p style={{ margin: '5px 0', color: '#979BA2' }}>
                    Borrow against an existing position to top-up your Holyheld Card.
                  </p>
                </li>
              </ul>
            </DialogContent>
            <DialogActions sx={{
              borderTop: '1px solid #2d2f36',
              padding: '16px 24px'
            }}>
              <Button
                onClick={handleCloseWelcomeModal}
                variant="contained"
                sx={{
                  textTransform: 'none',
                  bgcolor: '#f5caa4',
                  color: '#232833',
                  fontWeight: 'bold',
                  '&:hover': {
                    bgcolor: '#d4a88c',
                  },
                }}
              >
                Get Started
              </Button>
            </DialogActions>
          </Dialog>

          <div className="main-content">
            {/* Header */}
            <header className="header">
              <div className="logo-section">
                <img src={logo} alt="Alchemix Logo" className="logo" />
              </div>
              <ConnectButton />
            </header>

            <main className="main-content">
              {/* Current Position */}
              {position && !position.isLoading && (
                <div>

                  <div className="position-details">
                    {/* <p>Collateral: {position.collateral.amount} {position.collateral.symbol}</p> */}
                  </div>
                </div>
              )}


              {/* Mode Selection */}
              <div className="card first-card">
                <div className="mode-selection" style={{
                  display: 'flex',
                  gap: '0px',
                  marginBottom: '20px',
                  justifyContent: 'center'
                }}>
                  <Button
                    variant={mode === 'topup' ? 'contained' : 'outlined'}
                    onClick={() => setMode('topup')}
                    sx={{
                      textTransform: 'none',
                      bgcolor: mode === 'topup' ? '#f5caa4' : 'transparent',
                      color: mode === 'topup' ? '#232833' : 'white',
                      fontWeight: mode === 'topup' ? 'bold' : 'normal',
                      flex: 1,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      borderColor: '#f5caa4',
                      '&:hover': { bgcolor: mode === 'topup' ? '#d4a88c' : 'rgba(245,202,164,0.1)', color: mode === 'topup' ? '#232833' : 'white' },
                    }}
                  >
                    Deposit & Top-Up
                  </Button>
                  <Button
                    variant={mode === 'borrowOnly' ? 'contained' : 'outlined'}
                    onClick={() => setMode('borrowOnly')}
                    sx={{
                      textTransform: 'none',
                      bgcolor: mode === 'borrowOnly' ? '#f5caa4' : 'transparent',
                      color: mode === 'borrowOnly' ? '#232833' : 'white',
                      fontWeight: mode === 'borrowOnly' ? 'bold' : 'normal',
                      flex: 1,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      borderColor: '#f5caa4',
                      '&:hover': { bgcolor: mode === 'borrowOnly' ? '#d4a88c' : 'rgba(245,202,164,0.1)', color: mode === 'borrowOnly' ? '#232833' : 'white' },
                    }}
                  >
                    Top-Up
                  </Button>
                </div>
                {mode === 'topup' && (
                  <div style={{ textAlign: 'left', marginTop: '12px', marginBottom: '0px', color: '#979BA2', fontSize: '0.9em' }}>
                    Deposit into an Alchemix vault and take a loan to top-up your Holyheld Card.<br />
                    <br />
                    1. Tag your HolyHeld card.<br />
                    2. Select your deposit asset and amount.<br />
                    3. Choose your Yield Strategy to deposit into.<br />
                    4. Borrow and top-up your card.
                  </div>
                )}
                {mode === 'borrowOnly' && (
                  <div style={{ textAlign: 'left', marginTop: '12px', marginBottom: '0px', color: '#979BA2', fontSize: '0.9em' }}>
                    Borrow against an existing position to top-up your Holyheld Card .<br />
                    <br />
                    1. Tag your HolyHeld Card.<br />
                    2. Select your asset .<br />
                    3. Choose your Yield Strategy to deposit into.<br />
                    4. Borrow and top-up your card.
                  </div>
                )}
              </div>

              {/* Holytag */}
              <div className="card holytag-card">
                <label htmlFor="holytag" style={{ marginBottom: '10px' }}>Holytag</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    id="holytag"
                    type="text"
                    value={holytag}
                    onChange={(e) => setHolytag(e.target.value)}
                    placeholder="alchemix"
                    className="input-field"
                    style={{ flex: 1 }}
                  />
                  <Button
                    variant="contained"
                    onClick={handleValidateHolytag}
                    sx={{
                      textTransform: 'none',
                      bgcolor: '#f5caa4',
                      color: '#232833',
                      fontWeight: 'bold',
                      width: '150px',
                      marginLeft: '10px',
                      '&:hover': { bgcolor: '#d4a88c' },
                    }}
                  >
                    Validate Holytag
                  </Button>
                </div>
              </div>


              {/* Deposit Asset Selection */}
              <div className="card deposit-card">
                <label htmlFor="deposit-asset" style={{ marginBottom: '0px' }}>{mode === 'borrowOnly' ? 'Select your asset' : 'Deposit asset'}</label>
                <select
                  id="deposit-asset"
                  className="dropdown"
                  value={depositAsset}
                  onChange={handleDepositAssetChange}
                  style={{ margin: '10px 0', backgroundColor: '#1a1b1f' }}
                >
                  <option value="">Select asset</option>
                  {availableDepositAssets.map((asset) => (
                    <option key={asset} value={asset}>
                      {asset}
                    </option>
                  ))}
                </select>

                {mode !== 'borrowOnly' && (
                  <>
                    <label htmlFor="deposit-amount" style={{ marginBottom: '10px' }}>Deposit amount</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
                      <input
                        id="deposit-amount"
                        type="text"
                        value={depositAmount}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder="$100"
                        className="input-field"
                        style={{ flex: 1, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                      />
                      <Button
                        variant="outlined"
                        onClick={handleMaxAmount}
                        size="small"
                        disabled={balanceLoading || maxLoading || !depositAsset || !address}
                        sx={{
                          textTransform: 'none',
                          minWidth: '60px',
                          height: '33px',
                          color: 'white',
                          borderColor: '#f5caa4',
                          fontWeight: 'normal',
                          margin: 0,
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          '&:hover': {
                            borderColor: 'white',
                            color: 'white',
                          },
                        }}
                      >
                        MAX
                      </Button>
                    </div>
                  </>
                )}
                {/* Balance Display */}
                {mode !== 'borrowOnly' && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '4px'
                  }}>
                    <p className="balance-text">
                      {balanceLoading ? 'Loading...' : `Balance: ${Tbalance.toFixed(8)} ${depositAsset || ''}`}
                    </p>
                    {balanceError && (
                      <p className="error-text" style={{ color: 'red', fontSize: '12px' }}>
                        {balanceError}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Yield Strategy and Borrow Amount */}
              <div className="card yield-strategy-card">
                <label htmlFor="yield-strategy" style={{ marginBottom: '0px' }}>
                  Yield strategy
                  <span className="tooltip-icon" data-tooltip="Your strategy shapes how your funds and loans work.">
                    ⓘ
                  </span>
                </label>

                {isLoading ? (
                  <p>Waiting for Strategies...</p>
                ) : (
                  <select
                    id="yield-strategy"
                    className="dropdown"
                    value={selectedStrategy}
                    onChange={(e) => {
                      console.log('Strategy selected:', e.target.value);
                      setSelectedStrategy(e.target.value);
                      addMessage(`Selected strategy: ${e.target.value}`, 'info');
                    }}
                    style={{ margin: '10px 0', backgroundColor: '#1a1b1f' }}
                  >
                    <option value="">Select strategy</option>
                    {formattedStrategies.map((strategy) => (
                      <option key={strategy.value} value={strategy.value}>
                        {strategy.label}
                      </option>
                    ))}
                  </select>
                )}

                <div style={{ marginTop: '0px' }}>
                  <label htmlFor="borrow-amount" style={{ marginBottom: '0px' }}>
                    Borrow amount
                    <span className="tooltip-icon" data-tooltip="Amount you want to borrow">
                      ⓘ
                    </span>
                  </label>
                  <input
                    type="text"
                    value={borrowAmount ?
                      typeof borrowAmount === 'string' ?
                        borrowAmount :
                        // Convertir d'abord en chaîne décimale, puis formater
                        formatUnits(formatNumberWithoutExponent(borrowAmount), 18)
                      : "0"}
                    onChange={handleBorrowAmountChange}
                    placeholder="$100"
                    className="input-field"
                    style={{ margin: '10px 0', width: '500px' }}
                  />

                  <div style={{ display: 'flex', gap: '0', marginTop: '10px' }}>
                    {[25, 50, 75, 100].map((percentage, index, array) => (
                      <button
                        key={percentage}
                        onClick={() => handleBorrowPercentage(percentage)}
                        style={{
                          flex: 1,
                          padding: '3px',
                          backgroundColor: 'transparent',
                          border: '1px solid #f5caa4',
                          color: '#ccc',
                          cursor: 'pointer',
                          margin: 0,
                          borderRadius: index === 0
                            ? '4px 0 0 4px'
                            : index === array.length - 1
                              ? '0 4px 4px 0'
                              : '0',
                          borderRight: index === array.length - 1 ? '1px solid #f5caa4' : 'none',
                          transition: 'background-color 0.3s, color 0.3s',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(245, 202, 164, 0.2)'; e.currentTarget.style.color = 'white'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#ccc'; }}
                        onMouseDown={(e) => { e.currentTarget.style.backgroundColor = '#d4a88c'; e.currentTarget.style.color = 'white'; }}
                        onMouseUp={(e) => { e.currentTarget.style.backgroundColor = 'rgba(245, 202, 164, 0.2)'; e.currentTarget.style.color = 'white'; }}
                      >
                        {percentage}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>



              {/* Action Button */}
              <div className="card">
                <Button
                  variant="contained"
                  onClick={openConfirmationModal}
                  disabled={isBorrowing}
                  fullWidth
                  sx={{
                    textTransform: 'none',
                    backgroundColor: 'transparent',
                    border: '2px solid green',
                    color: 'green',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: 'transparent', border: '2px solid green', color: 'green' },
                  }}
                >
                  {isBorrowing ? 'Processing...' : mode === 'topup' ? 'Deposit & Top-Up' : 'Top-Up'}
                </Button>

                <div className=" ">
                  <div className="text-gray-700  center-text-hack">
                    {mode === 'topup'
                      ? 'You will need to approve five transactions'
                      : 'You will need to approve three transactions'}
                  </div>
                </div>
              </div>
            </main>
          </div>

          <TransactionConfirmation
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleSubmit}
            transactionDetails={txDetails}
          />
        </div>
      </MessageProvider>

    </div>
  );
};

export default App;