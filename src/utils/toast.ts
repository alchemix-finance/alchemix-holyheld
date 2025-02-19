import { toast, ToastOptions } from 'react-toastify';

// Configuration de base pour les toasts
const baseToastStyle = {
  background: 'rgb(14, 17, 22)',
  color: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '8px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  fontFamily: 'Neue Kabel, Montserrat, sans-serif',
};

// Configuration pour les toasts d'erreur
const errorToastStyle = {
  ...baseToastStyle,
  background: 'rgba(211, 47, 47, 0.95)',
  border: '1px solid rgba(211, 47, 47, 0.2)',
};

// Default configuration for all toasts
export const toastConfig: ToastOptions = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  style: baseToastStyle,
};

// Configuration spécifique pour les erreurs
export const errorToastConfig: ToastOptions = {
  ...toastConfig,
  style: errorToastStyle,
};

// Transaction status toasts
export const showTransactionToast = {
  pending: (message: string = 'Transaction in progress...') =>
    toast.info(message, {
      ...toastConfig,
      autoClose: false, // Keep the toast visible until updated
    }),

  success: (message: string = 'Transaction successful!') =>
    toast.success(message, {
      ...toastConfig,
    }),

  error: (error: Error | string) => {
    const message = error instanceof Error ? error.message : error;
    return toast.error(`Transaction failed: ${message}`, {
      ...errorToastConfig,
    });
  },
};

// Helper to handle async transactions with toast notifications
export const withToast = async <T,>(
  promise: Promise<T>,
  {
    pending = 'Transaction in progress...',
    success = 'Transaction completed successfully!',
    error = 'Transaction failed',
  }: {
    pending?: string;
    success?: string;
    error?: string;
  } = {}
): Promise<T> => {
  const toastId = showTransactionToast.pending(pending); // Show "pending" toast

  try {
    const result = await promise; // Await the async transaction

    // Update the "pending" toast to "success"
    toast.update(toastId, {
      render: success,
      type: 'success',
      autoClose: 5000,
    });

    return result;
  } catch (err) {
    const message = err instanceof Error ? err.message : error;

    // Update the "pending" toast to "error"
    toast.update(toastId, {
      render: `${error}: ${message}`,
      type: 'error',
      autoClose: 5000,
    });

    throw err; // Re-throw the error for further handling
  } finally {
    // Ensure "pending" toast is dismissed if not already updated
    toast.dismiss(toastId);
  }
};
