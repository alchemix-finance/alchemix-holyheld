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
import Select from 'react-select';
import { Network } from '@holyheld/sdk';
import { useAlchemixDeposit, DepositAsset, DEPOSIT_ASSETS } from './hooks/useAlchemixLoan';
import { useMintAl } from './hooks/UseMintAlETH';
import { SYNTH_ASSETS, SYNTH_ASSETS_ADDRESSES } from "@/lib/config/synths";
import type { SynthAsset } from "@/lib/config/synths";
import { CONTRACTS } from './lib/wagmi/chains';
import { useAlchemists } from "@/lib/queries/useAlchemists";
import { TransactionConfirmation } from './components/TransactionConfirmation';
import { MessageProvider } from './context/MessageContext';
import MessageDisplay from './components/MessageDisplay';
import { useMessages } from './context/MessageContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastConfig, warn } from './utils/toast';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

interface ErrorData { message: string; }

const App: React.FC = () => {
  const [depositAmount, setDepositAmount] = useState<string>('');
  const [selectedStrategy, setSelectedStrategy] = useState<string>('');
  const [loanAsset, setLoanAsset] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [holytag, setHolytag] = useState<string>('');
  const [availableStrategies, setAvailableStrategies] = useState<any[]>([]);
  const [mode, setMode] = useState<'topup' | 'borrowOnly'>('topup');
  const [borrowAmount, setBorrowAmount] = useState<string>('');
  const { borrow, isLoading: isBorrowing } = useBorrow();
  const [depositAsset, setDepositAsset] = useState<DepositAsset | `0x${string}` | ''>('');
  const position = useAlchemistPosition(depositAsset);

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
  const [selectKey, setSelectKey] = useState(0);

  const [collateralAmount, setCollateralAmount] = useState<string>('0.00');
  const [estimatedEarnings, setEstimatedEarnings] = useState<string>('0.00');
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
      // Vérifiez si publicClient est défini
      if (!publicClient) {
        throw new Error('Public client is not initialized. Please connect your wallet and ensure the network is configured correctly.');
      }

      // Validation du holytag
      const isValidTag = await validateHolytag(holytag);
      if (!isValidTag) {
        throw new Error('Invalid Holytag. Please enter a valid holytag before proceeding.');
      }

      // On fait le mint et le topup en une seule opération
      const txResponse = await borrow(
        depositAsset,
        depositAmount,
        borrowAmount,
        selectedStrategy,
        holytag
      );

      // Vérifiez que la réponse contient un hash de transaction
      if (!txResponse || !txResponse.transactionHash) {
        throw new Error('Transaction submission failed: No transaction hash returned.');
      }

      // Attendez la confirmation de la transaction
      const txReceipt = await publicClient.waitForTransactionReceipt({
        hash: txResponse.transactionHash as `0x${string}`,
      });

      // Vérifiez le statut de la transaction
      if (txReceipt.status !== 'success') {
        throw new Error('Borrow transaction failed on-chain.');
      }

      // Convertir le montant en format lisible
      // const readableAmount = formatUnits(txResponse.mintedAmount, 18);
      // toast.success(`Successfully minted ${readableAmount} ${txResponse.synthType} and topped up on Holyheld`);

    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error during borrow:', err.message);
        toast.error(err.message);
      } else {
        console.error('An unknown error occurred during borrow');
        toast.error('An unknown error occurred during borrow');
      }
    }
  };

  const handleBorrowPercentage = (percentage: number) => {
    if (!depositAmount) return;
    // On calcule d'abord 50% du montant de dépôt (limitation du contrat)
    const maxBorrowAmount = parseFloat(depositAmount) * 0.5;
    // Puis on applique le pourcentage choisi par l'utilisateur sur ce montant maximum
    const amount = maxBorrowAmount * (percentage / 100);
    setBorrowAmount(amount.toString());
  };

  const getStrategyImplications = (apr: string | number): string => {
    const aprValue = typeof apr === 'string' ? parseFloat(apr) : apr;

    if (aprValue <= 5) {
      return "This strategy offers low returns with minimal risk. Suitable for conservative investors.";
    } else if (aprValue <= 10) {
      return "This strategy provides balanced returns and moderate risk. Ideal for steady growth.";
    } else if (aprValue <= 15) {
      return "This strategy offers high returns but comes with increased risk. Suitable for bold investors.";
    } else {
      return "Invalid APR value.";
    }
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
    const value = e.target.value;
    if (value === '' || DEPOSIT_ASSETS.includes(value as DepositAsset)) {
      setDepositAsset(value as DepositAsset | '');
    }
    // Réinitialiser la stratégie
    setSelectedStrategy('');
    setSelectKey(prev => prev + 1);
    const { addMessage } = useMessages();
    addMessage(`Selected deposit asset: ${value}`, 'info');
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
            ...warn,
            icon: <span aria-label="error">❌</span>,
          });

          const apr = await vault.api.apr({
            chainId,
            underlyingToken: tokenAddress
          });
          return apr;
        } catch (err) {
          toast.error(`Error fetching APR for asset ${asset}:`, {
            ...warn,
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

  const [isValidHolytag, setIsValidHolytag] = useState(false);

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
          ...warn,
          icon: <span aria-label="error">❌</span>,
        });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error during holytag validation:', err.message);
        toast.error(err.message, {
          ...warn,
          icon: <span aria-label="error">❌</span>,
        });
      } else {
        console.error('An unknown error occurred during holytag validation');
        toast.error('An unknown error occurred during holytag validation', {
          ...warn,
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
    const { addMessage } = useMessages();
    if (value && parseFloat(value) > 0) {
      addMessage(`Set deposit amount to ${value}`, 'info');
    }
  };

  const handleBorrowAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Validation basique : nombre positif
    if (!value || parseFloat(value) >= 0) {
      setBorrowAmount(value);
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
    console.log('Handle Top-Up initiated.');

    try {
      setIsModalOpen(false);

      // Check if wallet is connected and chain is supported
      if (!publicClient || !walletClient || !chain || !address) {
        throw new Error('Please connect your wallet and select a valid chain.');
      }

      // Validate holytag first
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

        /*       if (
                parseFloat(EURAmount) < parseFloat(serverSettings.external.minTopUpAmountInEUR) ||
                parseFloat(EURAmount) > parseFloat(serverSettings.external.maxTopUpAmountInEUR)
              ) {
                throw new Error(
                  `Amount must be between €${serverSettings.external.minTopUpAmountInEUR} and €${serverSettings.external.maxTopUpAmountInEUR}.`
                );
              } */


        //  console.log("Token balance:", tokenBalance.toString());
        //  console.log("alAmount in Wei:", parseUnits(alAmount, decimals).toString());

        /*       if (tokenBalance < parseUnits(alAmount, decimals)) {
                throw new Error("Insufficient token balance for the requested top-up.");
              } */

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
        //  console.log(performTopUp)

        console.log('Top-up completed successfully.');
        // alert('Top-up successful!');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error('An unknown error occurred');
      }

      setError(err instanceof Error ? err.message : 'An unknown error occurred');
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

      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  const openConfirmationModal = () => {
    // Construire l'objet de détails à afficher dans le pop-up
    const deposit = parseFloat(depositAmount || '0');
    const txDetails = {
      type: mode === 'topup' ? 'Top-up' : 'Borrow',
      amount: depositAmount,
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
            ...warn,
            icon: <span aria-label="error">❌</span>,
          });
          return;
        }
      }

      const promise = (async () => {
        if (mode === 'topup') {
          await handleTopUp(holytag, depositAmount, depositAsset);
        } else {
          await handleBorrowOnly();
        }
      })();

      await toast.promise(promise, {
        pending: {
          render: `${mode === 'topup' ? 'Top-up' : 'Borrow'} transaction in progress...`,
          ...toastConfig,
        },
        success: {
          render: `${mode === 'topup' ? 'Top-up' : 'Borrow'} completed successfully!`,
          ...toastConfig,
        },
        error: {
          render({ data }) {
            if (data instanceof Error) {
              return data.message;
            }
            const errorData = data as ErrorData | null | undefined;
            if (errorData?.message === 'Transaction cancelled') {
              return 'Transaction cancelled';
            }
            return `${mode === 'topup' ? 'Top-up' : 'Borrow'} failed`;
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
      toast.error(error);
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
                    Borrow against an existing position to top-up your HolyHeld card
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
              <div className="card" style={{ border: 'none' }}>
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
                      '&:hover': {
                        bgcolor: mode === 'topup' ? '#d4a88c' : 'rgba(245,202,164,0.1)',
                      },
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
                      '&:hover': {
                        bgcolor: mode === 'borrowOnly' ? '#d4a88c' : 'rgba(245,202,164,0.1)',
                      },
                    }}
                  >
                    Top-Up
                  </Button>
                </div>
              </div>

              <hr style={{ border: '0.5px solid rgba(255, 255, 255, 0.5)', margin: '10px 0' }} />

              {/* Holytag Section */}
              <div className="card" style={{ border: 'none' }}>
                <label htmlFor="holytag"></label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={holytag}
                    onChange={(e) => { setHolytag(e.target.value); }}
                    placeholder="alchemix"
                    className={`input-field ${holytag ? (isValidHolytag ? 'valid' : 'invalid') : ''}`}
                  />
                  {isValidHolytag && <span className="checkmark">✔️</span>}
                </div>
              </div>

              <hr style={{ border: '0.5px solid rgba(255, 255, 255, 0.5)', margin: '10px 0' }} />

              {/* Deposit Asset Selection */}
              <div className="card" style={{ border: 'none' }}>
                <label htmlFor="deposit-asset">Deposit asset</label>
                <select
                  id="deposit-asset"
                  className="dropdown"
                  value={depositAsset}
                  onChange={handleDepositAssetChange}
                >
                  <option value="">Select asset</option>
                  {availableDepositAssets.map((asset) => (
                    <option key={asset} value={asset}>
                      {asset}
                    </option>
                  ))}
                </select>

                {/* Deposit Amount Input */}
                <label htmlFor="deposit-amount">Deposit amount</label>
                <input
                  id="deposit-amount"
                  type="text"
                  value={depositAmount}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder="$100"
                  className="input-field"
                />

                {/* Balance Display */}
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
              </div>

              <hr style={{ border: '0.5px solid rgba(255, 255, 255, 0.5)', margin: '10px 0' }} />

              {/* Borrow Amount Input */}
              <div className="card" style={{ border: 'none' }}>
                <label htmlFor="borrow-amount">
                  Borrow amount
                  <span className="tooltip-icon" data-tooltip="Amount you want to borrow">
                    ⓘ
                  </span>
                </label>
                <input
                  id="borrow-amount"
                  type="text"
                  value={borrowAmount}
                  onChange={handleBorrowAmountChange}
                  placeholder="$100"
                  className="input-field"
                />
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  {[25, 50, 75, 100].map((percentage) => (
                    <button
                      key={percentage}
                      onClick={() => handleBorrowPercentage(percentage)}
                      className="percentage-button"
                      style={{
                        flex: 1,
                        padding: '4px',
                        backgroundColor: '#1a1b1f',
                        border: '1px solid #2d2f36',
                        borderRadius: '4px',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: 'normal'
                      }}
                    >
                      {percentage}%
                    </button>
                  ))}
                </div>
              </div>

              <hr style={{ border: '0.5px solid rgba(255, 255, 255, 0.5)', margin: '10px 0' }} />

              {/* Yield Strategy Selection */}
              <div className="card" style={{ border: 'none' }}>
                <label htmlFor="yield-strategy">
                  Select yield strategy
                  <span className="tooltip-icon" data-tooltip="Your strategy shapes how your funds and loans work.">
                    ⓘ
                  </span>
                </label>

                {isLoading ? (
                  <p>Waiting for Strategies...</p>
                ) : (
                  <select id="yield-strategy" className="dropdown">
                    {formattedStrategies.map((strategy) => (
                      <option key={strategy.value} value={strategy.value}>
                        {strategy.label}
                      </option>
                    ))}
                  </select>
                )}

                {/* Strategy Implications */}
                {selectedStrategy && (
                  <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                    <h3>Implications of Selected Strategy:</h3>
                    <p>
                      {getStrategyImplications(
                        availableStrategies.find((strategy) => strategy.address === selectedStrategy)?.apr || 0
                      )}
                    </p>
                  </div>
                )}
              </div>

              <hr style={{ border: '0.5px solid rgba(255, 255, 255, 0.5)', margin: '10px 0' }} />

              {/* Action Button */}
              <div className="card" style={{ border: 'none' }}>
                <Button
                  variant="contained"
                  onClick={openConfirmationModal}
                  disabled={isBorrowing}
                  fullWidth
                  sx={{
                    textTransform: 'none',
                    bgcolor: '#f5caa4',
                    color: '#232833',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#d4a88c' },
                  }}
                >
                  {isBorrowing ? 'Processing...' : mode === 'topup' ? 'Perform Top-Up' : 'Borrow'}
                </Button>
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