import { toast, ToastOptions } from 'react-toastify';

// Configuration de base pour les toasts
const baseToastStyle = {
  background: 'rgb(14, 17, 22)',
  color: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '8px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  fontFamily: 'Montserrat, sans-serif',
};

// Style spécifique pour le toast initial (info/pending)
const infoToastStyle = {
  ...baseToastStyle,
  fontFamily: 'Neue Kabel, sans-serif',
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

// Configuration spécifique pour les toasts info/pending
export const infoToastConfig: ToastOptions = {
  ...toastConfig,
  style: infoToastStyle,
};

// Transaction status toasts
export const showTransactionToast = {
  pending: (message: string = 'Transaction in progress...') => {
    // Personnalisation du toast initial avec Kabel
    const id = toast.info(message, {
      ...toastConfig,
      autoClose: false,
      style: {
        ...baseToastStyle,
        fontFamily: 'Neue Kabel, sans-serif',
      },
      onOpen: () => {
        // Manipulation DOM directe plus agressive
        setTimeout(() => {
          const infoToasts = document.querySelectorAll('.Toastify__toast--info .Toastify__toast-body');
          infoToasts.forEach(toast => {
            if (toast instanceof HTMLElement) {
              toast.style.fontFamily = 'Neue Kabel, sans-serif';
              
              // Parcourir tous les enfants et appliquer le style
              const allChildren = toast.querySelectorAll('*');
              allChildren.forEach(child => {
                if (child instanceof HTMLElement) {
                  child.style.fontFamily = 'Neue Kabel, sans-serif';
                }
              });
            }
          });
        }, 10); // Petit délai pour s'assurer que le DOM est mis à jour
      }
    });
    return id;
  },

  success: (message: string = 'Transaction successful!') =>
    toast.success(message, {
      ...toastConfig,
    }),

  error: (error: Error | string) => {
    const message = error instanceof Error ? error.message : error;
    return toast.error(`Transaction failed: ${message}`, {
      ...toastConfig,
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
  // Show "pending" toast with Kabel font
  const toastId = showTransactionToast.pending(pending);

  try {
    const result = await promise; // Await the async transaction

    // Update the "pending" toast to "success"
    toast.update(toastId, {
      render: success,
      type: 'success',
      autoClose: 5000,
      style: baseToastStyle, // Appliquer le style Montserrat lors du passage à "success"
    });

    return result;
  } catch (err) {
    const message = err instanceof Error ? err.message : error;

    // Update the "pending" toast to "error"
    toast.update(toastId, {
      render: `${error}: ${message}`,
      type: 'error',
      autoClose: 5000,
      style: baseToastStyle, // Appliquer le style Montserrat lors du passage à "error"
    });

    throw err; // Re-throw the error for further handling
  } finally {
    // Ensure "pending" toast is dismissed if not already updated
    toast.dismiss(toastId);
  }
};
