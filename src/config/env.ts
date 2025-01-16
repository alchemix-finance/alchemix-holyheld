// Default configuration values
console.log('VITE_WC_PROJECT_ID:', import.meta.env.VITE_WC_PROJECT_ID);
export const config = {
    walletConnect: {
        projectId: import.meta.env.VITE_WC_PROJECT_ID
    }
};
