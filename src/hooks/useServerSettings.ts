import { useState, useEffect } from 'react';
import { ServerExternalSettings } from '../types/ServerSettings';
import HolyheldSDK from '@holyheld/sdk';

export const useServerSettings = () => {
  const [settings, setSettings] = useState<ServerExternalSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true);
        const sdk = new HolyheldSDK({
          apiKey: import.meta.env.VITE_HOLYHELD_SDK_API_KEY || '',
        });
        await sdk.init();
        const data = await sdk.getServerSettings();
        setSettings(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch server settings'));
        setSettings(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return {
    settings,
    loading,
    error,
    isTopupEnabled: settings?.external.isTopupEnabled ?? false,
    minTopUpAmountInEUR: settings?.external.minTopUpAmountInEUR ?? '0',
    maxTopUpAmountInEUR: settings?.external.maxTopUpAmountInEUR ?? '0',
    topUpFeePercent: settings?.common.topUpFeePercent ?? '0',
  };
};
