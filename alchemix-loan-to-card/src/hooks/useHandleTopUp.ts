import { useState } from 'react';
import { useHolyheldSDK } from './useHolyheld';
import { useAlchemixDeposit } from './useAlchemixLoan'; // Hook pour gérer le dépôt
import { useChain } from './useChain';
import { useAccount } from 'wagmi'; // Pour récupérer l'adresse du wallet connecté
import { isSupported } from '../lib/wagmi/chains';
import type { Network, TransferData, TopUpCallbackConfig } from '@holyheld/sdk';

interface UseHandleTopUpReturn {
  handleTopUp: (
    holytag: string,
    depositAmount: string,
    depositAsset: string
  ) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export const useHandleTopUp = (): UseHandleTopUpReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { validateHolytag, convertToEUR, performTopUp, getServerSettings } = useHolyheldSDK();
  const { deposit } = useAlchemixDeposit();
  const currentChain = useChain();
  const { address: walletAddress } = useAccount(); // Récupérer l'adresse du wallet connecté

  const handleTopUp = async (holytag: string, depositAmount: string, depositAsset: string) => {
    if (!currentChain || !isSupported(currentChain.id)) {
      setError('Unsupported chain. Please switch to a supported network.');
      return;
    }

    if (!walletAddress) {
      setError('No wallet connected. Please connect your wallet.');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // Valider que depositAsset est une adresse Ethereum valide
      if (!/^0x[a-fA-F0-9]{40}$/.test(depositAsset)) {
        throw new Error('Invalid deposit asset address format.');
      }

      // Étape 1: Vérifier les paramètres du serveur
      const serverSettings = await getServerSettings();
      if (!serverSettings.external.isTopupEnabled) {
        throw new Error('Top-up is currently disabled. Please try again later.');
      }

      // Étape 2: Valider le Holytag
      const isValidTag = await validateHolytag(holytag);
      if (!isValidTag) {
        throw new Error('Invalid Holytag.');
      }

      const percentage = 0.90; // Tolérance de 5% de perte
const minimumAmountOut = BigInt(depositAmount) * BigInt(Math.floor(percentage * 100)) / BigInt(100);


      // Étape 3: Effectuer le dépôt via Alchemix
      const depositResult = await deposit(
        depositAsset as `0x${string}`, // Conversion explicite pour TypeScript
        depositAmount,
        walletAddress as `0x${string}`, // Conversion explicite pour TypeScript
        minimumAmountOut.toString() 
        
      );
      if (!depositResult) {
        throw new Error('Deposit transaction failed.');
      }

      // Étape 4: Convertir les fonds empruntés en EUR
      const { EURAmount, transferData } = await convertToEUR(
        "0xCB8FA9a76b8e203D8C3797bF438d8FB81Ea3326A", // Conversion explicite pour TypeScript
        18, // Décimales du token emprunté
        depositAmount,
        currentChain.name.toLowerCase() as Network
      );

      // Vérification des limites (min/max) pour la conversion
      if (
        parseFloat(EURAmount) < parseFloat(serverSettings.external.minTopUpAmountInEUR) ||
        parseFloat(EURAmount) > parseFloat(serverSettings.external.maxTopUpAmountInEUR)
      ) {
        throw new Error(
          `Amount must be between €${serverSettings.external.minTopUpAmountInEUR} and €${serverSettings.external.maxTopUpAmountInEUR}.`
        );
      }

      // Étape 5: Effectuer le Top-Up
      const callbacks: TopUpCallbackConfig = {
        onHashGenerate: (hash) => console.log('Transaction Hash:', hash),
        onStepChange: (step) => console.log('Current Step:', step),
      };

      await performTopUp(
        {}, // Placeholder pour le public client (à configurer si nécessaire)
        null, // Placeholder pour le wallet client
        walletAddress as `0x${string}`, // Conversion explicite pour TypeScript
        depositAsset as `0x${string}`, // Conversion explicite pour TypeScript
        currentChain.name.toLowerCase() as Network,
        depositAmount,
        transferData,
        holytag,
        true, // Assure que les données typées sont supportées
        callbacks // Ajout des callbacks
      );

      alert('Top-up successful!');
    } catch (err: any) {
      console.error('Error during top-up:', err);
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleTopUp, isLoading, error };
};
