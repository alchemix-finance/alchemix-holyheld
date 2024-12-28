import { toast, ToastOptions } from 'react-toastify';

// Default configuration for all toasts
export const toastConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  style: {
    background: '#1c1c1c',
    color: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '8px',
    border: '1px solid #333333',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export const warn: ToastOptions = {
  position: 'top-right',
  autoClose: 25000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
  style: {
    background: '#1c1c1c',
    color: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '8px',
    border: '1px solid #333333',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

// Transaction status toasts
export const showTransactionToast = {
  pending: (message: string = 'Transaction in progress...') =>
    toast.info(message, {
      ...toastConfig,
      autoClose: false, // Keep the toast visible until updated
      icon: '🔄',
    }),

  success: (message: string = 'Transaction successful!') =>
    toast.success(message, {
      ...toastConfig,
      icon: '✅',
    }),

  error: (error: Error | string) => {
    const message = error instanceof Error ? error.message : error;
    return toast.error(`Transaction failed: ${message}`, {
      ...toastConfig,
      icon: '❌',
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
      icon: '✅',
    });

    return result;
  } catch (err) {
    const message = err instanceof Error ? err.message : error;

    // Update the "pending" toast to "error"
    toast.update(toastId, {
      render: `${error}: ${message}`,
      type: 'error',
      autoClose: 5000,
      icon: '❌',
    });

    throw err; // Re-throw the error for further handling
  } finally {
    // Ensure "pending" toast is dismissed if not already updated
    toast.dismiss(toastId);
  }
};
