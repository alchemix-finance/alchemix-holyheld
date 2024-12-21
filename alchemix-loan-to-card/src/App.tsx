import { useState, useEffect, useMemo } from 'react';
import * as React from "react";
import { formatUnits, parseUnits } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Button from '@mui/material/Button';
import { useAccount, useWalletClient, usePublicClient } from 'wagmi';
import { erc20Abi } from 'viem';
import { useMaxAmount } from './hooks/useMaxAmount';
import { useTokenBalance } from './hooks/useTokenBalance';
import { useBorrowableLimit } from './hooks/useBorrowableLimit';
import { useChain } from './hooks/useChain';
import { VAULTS } from './lib/queries/useVaults';
import { useHolyheldSDK } from './hooks/useHolyheld';
import logo from './assets/ALCX_Std_logo.png';
import './App.css';
import Select from 'react-select';
import { Network } from '@holyheld/sdk';
import { useAlchemixDeposit } from './hooks/useAlchemixLoan';
import { useMintAl } from './hooks/UseMintAlETH';
import { SYNTH_ASSETS, SYNTH_ASSETS_ADDRESSES, SYNTH_ASSETS_METADATA } from "@/lib/config/synths";
import type { SynthAsset } from "@/lib/config/synths";
import { CONTRACTS } from './lib/wagmi/chains';
import { useAlchemists } from "@/lib/queries/useAlchemists";





const App: React.FC = () => {
  const [depositAsset, setDepositAsset] = useState<string>('');
  const [depositAmount, setDepositAmount] = useState<string>('');
  const [selectedStrategy, setSelectedStrategy] = useState<string>('');
  const [loanAsset, setLoanAsset] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [eurAmount, setEurAmount] = useState<string>('');
  const [holytag, setHolytag] = useState<string>('');
  const [availableStrategies, setAvailableStrategies] = useState<any[]>([]);
  const [isLoadingStrategies, setIsLoadingStrategies] = useState<boolean>(false);


  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const chain = useChain();
  const publicClient = usePublicClient();
  const [selectKey, setSelectKey] = useState(0);


  const { validateHolytag, convertToEUR, performTopUp, sdk } = useHolyheldSDK();
  const { deposit, isLoading: isDepositLoading, error: depositError } = useAlchemixDeposit();
  const { mint, isLoading: isMinting, error: mintError } = useMintAl();
  const { data: alchemists, isLoading: alchemistsLoading, error: alchemistsError } = useAlchemists();
  const { Tbalance, isLoading: balanceLoading, error: balanceError } = useTokenBalance(
    address,
    chain?.id,
    depositAsset
  );

  const { calculateMaxAmount, isLoading: maxLoading } = useMaxAmount();
  type SupportedChainId = keyof typeof CONTRACTS;



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
    setDepositAsset(e.target.value);
    // Réinitialiser la stratégie
    setSelectedStrategy('');
    setSelectKey(prev => prev + 1);
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

    const getYield = async (vault: any) => {
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
          const tokenAddress = CONTRACTS[chainId]?.TOKENS[tokenKey]?.token;
          if (!tokenAddress) throw new Error(`No token address found for ${tokenKey}`);

          const apr = await vault.api.apr({
            chainId,
            underlyingToken: tokenAddress
          });
          return apr;
        } catch (err) {
          console.error(`Error fetching APR for asset ${asset}:`, err);
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

      setIsLoadingStrategies(true);
      const strategies = await getStrategiesForAsset(depositAsset, vaults, chain.id);
      setAvailableStrategies(strategies);
      setIsLoadingStrategies(false);
    };

    fetchStrategies();
  }, [chain.id, depositAsset]);

  const formattedStrategies = useMemo(() => {
    return availableStrategies.map((strategy) => ({
      value: strategy.address,
      label: `${strategy.label} (${strategy.apr}%)`,
    }));
  }, [availableStrategies]);



  const handleValidateHolytag = async () => {
    try {
      const isValid = await validateHolytag(holytag);
      alert(isValid ? 'Holytag is valid!' : 'Holytag is not valid!');
    } catch (err) {
      console.error('Error validating holytag:', err);
      setError('Failed to validate holytag.');
    }
  };

  const handleInputChange = (value: string) => {
    const regex = /^[0-9]*[.]?[0-9]*$/;
    if (regex.test(value)) {
      setDepositAmount(value);
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

    // Cast explicite du chainId
    const typedChainId = chainId as keyof typeof CONTRACTS;



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

  const handleTopUp = async () => {
    console.log('Handle Top-Up initiated.');

    try {
      if (!address || !walletClient || !chain || !publicClient) {
        throw new Error('Please connect your wallet and select a chain.');
      }

      if (!depositAmount || parseFloat(depositAmount) <= 0) {
        throw new Error('Please enter a valid deposit amount.');
      }

      if (!depositAsset) {
        throw new Error('Please select a deposit asset.');
      }

      if (alchemistsError) {
        throw new Error('Failed to fetch alchemists data.');
      }
      console.log("Available alchemists:", alchemists);
      console.log("Deposit asset:", depositAsset.toUpperCase());
      console.log("Synth types in alchemists:", alchemists?.map((al) => al.synthType));



      const mappedSynthType = synthMapping[depositAsset.toUpperCase()] || depositAsset.toUpperCase();



      // Récupération de l'alchimiste pour l'actif sélectionné
      const alchemist = alchemists?.find((al) => al.synthType === mappedSynthType);


      if (!alchemist) {
        throw new Error(`No alchemist found for asset: ${depositAsset}`);
      }

      const alchemistAddress = alchemist.address;

      // Étape 1 : Vérification des paramètres
      console.log('Fetching server settings...');
      const serverSettings = await sdk.getServerSettings();
      if (!serverSettings.external.isTopupEnabled) {
        throw new Error('Top-up is currently disabled.');
      }

      console.log('Validating holytag...');
      const isValidTag = await validateHolytag(holytag);
      if (!isValidTag) {
        throw new Error('Invalid Holytag.');
      }

      type SupportedChainId = keyof typeof CONTRACTS;

      const chainId = chain.id as SupportedChainId;

      // Logique différente pour ETH et ERC20
      if (depositAsset === 'ETH') {
        console.log('Processing ETH deposit...');

        // Vérifier la vault et le gateway
        const vaults = VAULTS[chainId];
        const vault = Object.entries(vaults).find(([addr]) => addr === selectedStrategy)?.[1];

        if (!vault?.wethGateway) {
          throw new Error('Selected strategy does not support ETH deposits');
        }

        // Préparer le dépôt ETH
        const depositAmountWei = parseUnits(depositAmount, 18);
        console.log('Depositing ETH via gateway:', {
          strategy: selectedStrategy,
          amount: depositAmount,
          gateway: vault.wethGateway
        });

        // Dépôt ETH avec valeur attachée
        console.log('Depositing ETH to Alchemix...');
        const depositResult = await deposit(
          selectedStrategy as `0x${string}`,
          depositAmount,
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

        // Processus de mint
        const mintAmount = (parseFloat(depositAmount) / 2).toString();
        const { type: synthType } = getSynthToken(depositAsset);

        console.log('Minting synthetic token...', { mintingAmount: mintAmount });
        const mintResult = await mint(
          mintAmount.toString(),
          address,
          synthType
        );

        if (!mintResult) throw new Error(`${synthType} minting failed`);

        const mintReceipt = await publicClient.waitForTransactionReceipt({
          hash: mintResult.transactionHash,
        });

        if (mintReceipt.status !== 'success') {
          throw new Error('Minting transaction failed');
        }

        // La suite du processus (conversion EUR et top-up) reste la même
        const synthTokenAddress = SYNTH_ASSETS_ADDRESSES[chainId][synthType];
        const decimals = await publicClient.readContract({
          address: synthTokenAddress as `0x${string}`,
          abi: erc20Abi,
          functionName: 'decimals',
        }) as number;

        const formattedAmount = formatUnits(BigInt(mintResult.mintedAmount), decimals);
        const mappedNetwork = mapNetworkName(chain.name);

        // Conversion et Top-up
        const { EURAmount, transferData } = await convertToEUR(
          synthTokenAddress,
          decimals,
          formattedAmount,
          mappedNetwork
        );

        await performTopUp(
          publicClient,
          walletClient,
          address,
          synthTokenAddress,
          mappedNetwork,
          formattedAmount,
          transferData,
          holytag,
          true,
          {
            onHashGenerate: (hash) => console.log('Transaction Hash:', hash),
            onStepChange: (step) => console.log('Current Step:', step),
          }
        );

        console.log('Top-up completed successfully.');
        alert('Top-up successful!');

      } else {

        const tokenKey = depositAsset.toUpperCase() as keyof typeof CONTRACTS[SupportedChainId]["TOKENS"];
        const tokenInfo = CONTRACTS[chainId]?.TOKENS[tokenKey];

        console.log("Token Key:", tokenKey);
        console.log("Token Info:", tokenInfo);

        if (!tokenInfo) {
          throw new Error(`Token configuration not found for asset: ${depositAsset}`);
        }




        const tokenAddress = tokenInfo.token;
        const depositDecimals = tokenInfo.decimals;

        const depositAmountWei = parseUnits(depositAmount, depositDecimals);

        if (!tokenAddress || !depositDecimals) {
          throw new Error(`Invalid token configuration for ${depositAsset} on chain ID ${chainId}.`);
        }

        console.log("Token Address:", tokenAddress);
        console.log("Deposit Amount (Wei):", depositAmountWei.toString());


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
        console.log('Depositing to Alchemix...');
        const depositResult = await deposit(
          selectedStrategy as `0x${string}`,
          depositAmount,
          address as `0x${string}`,
          depositAsset
        );

        if (!depositResult) throw new Error('Deposit failed.');
        console.log('Waiting for deposit confirmation...');
        const depositReceipt = await publicClient.waitForTransactionReceipt({
          hash: depositResult.transactionHash,
        });
        console.log('Deposit confirmed:', depositReceipt);
        await new Promise(resolve => setTimeout(resolve, 15000));

        // Étape 4 : Mint
        const depositFloat = parseFloat(depositAmount);
        const mintAmountFloat = depositFloat / 2;
        const mintAmount = mintAmountFloat.toString();

        const { type: synthType, address: synthAddress } = getSynthToken(depositAsset);

        console.log('Minting synthetic token...', { mintingAmount: mintAmount });
        const mintResult = await mint(
          mintAmount.toString(),
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

        console.log('synth:', synthTokenAddress)
        console.log('tokenAdress:', tokenAddress)
        console.log('synthAdress:', synthAddress)

        const decimals = await publicClient.readContract({
          address: synthTokenAddress as `0x${string}`, // Adresse du synthToken (ex : alETH)
          abi: erc20Abi,
          functionName: 'decimals',
        }) as number;

        const alAmount = formatUnits(BigInt(mintResult.mintedAmount), decimals);
        console.log("alAmount with correct decimals:", alAmount);

        const { EURAmount, transferData } = await convertToEUR(
          synthTokenAddress,
          decimals,
          formattedAmount,
          mappedNetwork
        );
        console.log(convertToEUR)
        console.log("Type of transferData:", typeof transferData);
        console.log('TransferData before top-up:', transferData);




        /*       if (
                parseFloat(EURAmount) < parseFloat(serverSettings.external.minTopUpAmountInEUR) ||
                parseFloat(EURAmount) > parseFloat(serverSettings.external.maxTopUpAmountInEUR)
              ) {
                throw new Error(
                  `Amount must be between €${serverSettings.external.minTopUpAmountInEUR} and €${serverSettings.external.maxTopUpAmountInEUR}.`
                );
              } */



        console.log("Decimals for token:", decimals);

        console.log(EURAmount)
        console.log(mintResult)


        const tokenBalance = await publicClient.readContract({
          address: synthTokenAddress as `0x${string}`,
          abi: erc20Abi,
          functionName: 'balanceOf',
          args: [address], // Adresse de l'utilisateur
        }) as bigint;

        console.log("Token balance:", tokenBalance.toString());
        console.log("alAmount in Wei:", parseUnits(alAmount, decimals).toString());

        /*       if (tokenBalance < parseUnits(alAmount, decimals)) {
                throw new Error("Insufficient token balance for the requested top-up.");
              } */


        // Étape 7 : Top-Up
        console.log('Executing top-up...');
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
        console.log(performTopUp)

        console.log('Top-up completed successfully.');
        alert('Top-up successful!');
      }
    } catch (err: unknown) {
      const errorMessage = (err as Error).message;
      console.error(err);
      //console.error('Error during top-up:', errorMessage);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMaxAmount = async () => {
    if (!address || !chain?.id || !depositAsset) return;
    try {
      const maxAmount = await calculateMaxAmount(address, chain.id, depositAsset);
      setDepositAmount(maxAmount);
    } catch (err) {
      console.error('Error setting max amount:', err);
      setError(err instanceof Error ? err.message : 'Failed to set maximum amount');
    }
  };


  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Alchemix Logo" className="logo" />
        </div>
        <ConnectButton />
      </header>

      <main className="main-content">
        <div className="card">
          <label htmlFor="holytag">Enter Holytag</label>
          <input
            id="holytag"
            type="text"
            value={holytag}
            onChange={(e) => setHolytag(e.target.value)}
            placeholder="Enter Holytag"
            className="input-field"
          />
          <Button
            variant="contained"
            onClick={handleValidateHolytag}
            sx={{ bgcolor: 'gray' }}
          >
            Validate Holytag</Button>
        </div>

        <div className="card">
          <label htmlFor="deposit-asset">Select deposit asset</label>
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

          <label htmlFor="deposit-amount">Enter deposit amount</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              id="deposit-amount"
              type="text"
              value={depositAmount}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="0.00"
              className="input-field"
              style={{ flex: 1 }}
            />
            <Button
              variant="outlined"
              onClick={handleMaxAmount}
              size="small"
              disabled={balanceLoading || maxLoading || !depositAsset || !address}
              sx={{
                minWidth: '60px',
                height: '32px',
                color: 'gray',
                borderColor: 'gray',
                '&:hover': {
                  borderColor: 'white',
                  color: 'white',
                },
              }}
            >
              MAX
            </Button>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '4px'
          }}>
            <p className="balance-text">
              {balanceLoading ? (
                'Loading...'
              ) : (
                `Balance: ${Tbalance.toFixed(8)} ${depositAsset || ''}`
              )}
            </p>
            {balanceError && (
              <p className="error-text" style={{ color: 'red', fontSize: '12px' }}>
                {balanceError}
              </p>
            )}
          </div>
        </div>
        <div className="card">
          <label htmlFor="yield-strategy">
            Select yield strategy
            <span className="tooltip-icon" data-tooltip="Your strategy shapes how your funds and loans work.">
              ⓘ
            </span>
          </label>

          {isLoading ? (
            <p>Waiting for Strategies...</p>
          ) : (
            <Select
              key={selectKey}
              options={formattedStrategies}
              value={formattedStrategies.find((s) => s.value === selectedStrategy)}
              onChange={(option) => setSelectedStrategy(option?.value || '')}
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: '#000',
                  border: '1px solid #444',
                  color: '#fff',
                }),
                option: (base, { isFocused }) => ({
                  ...base,
                  backgroundColor: isFocused ? '#333' : '#000',
                  color: '#fff',
                }),
                singleValue: (base) => ({
                  ...base,
                  color: '#fff',
                }),
              }}
            />
          )}
          {/* <p className="balance-text">Current Balance: 0.0000</p> */}
        </div>

        <div className="card">
          <label htmlFor="loan-asset">Loan asset</label>
          <select
            id="loan-asset"
            className="dropdown"
            value={loanAsset}
            disabled  // disabled car il est automatiquement défini
          >
            <option value="">{loanAsset || "Select asset"}</option>
          </select>
          {/* <p className="balance-text">Borrowable Limit: {}</p> */}
        </div>

        <div className="card">
          <Button
            variant="contained"
            onClick={handleTopUp}
            disabled={isLoading}
            fullWidth
            sx={{ bgcolor: 'Gray' }}
          >
            {isLoading ? 'Processing...' : 'Perform Top-Up'}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default App;
