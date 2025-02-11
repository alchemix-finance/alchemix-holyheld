# Usage and Troubleshooting Guide

This guide provides instructions on how to use the Alchemix Self-Repaying Loans dApp and offers troubleshooting tips in case you encounter issues.

## Using the Application

1. **Connect Your Wallet**
   - Click the **Connect Wallet** button (provided by RainbowKit) at the top of the application to link your Ethereum wallet.

2. **Collateral Deposit**
   - Once your wallet is connected, your collateral position is displayed automatically.
   - Enter the amount you wish to deposit in the appropriate field.
   - Choose the asset you want to deposit.
   - Confirm the deposit to update your collateral position.

3. **Borrowing / Top-Up**
   - Depending on the selected mode (borrow-only or top-up):
     - For **borrowing**, enter the desired borrow amount and select the appropriate lending strategy.
     - For **top-up**, adjust your collateral by performing a top-up operation, especially if there is market volatility.

4. **Viewing Information and Notifications**
   - The app displays your token balance (via the `useTokenBalance` hook) and your collateral position (via the `useAlchemistPosition` hook).
   - Notifications and transaction confirmations are shown using react-toastify, integrated with a global MessageContext for real-time updates.

## Troubleshooting

If you experience issues with the application, try the following steps:

- **Wallet Connection Issues**
  - Ensure you have a compatible wallet installed (e.g., MetaMask) and that it is active.
  - Confirm that your wallet is connected to one of the supported Ethereum networks (e.g., Optimism or Arbitrum).

- **Transaction Errors**
  - Check for error messages displayed in the app or in your browser's console. These messages can help identify issues like insufficient funds or invalid inputs.
  - Verify that the amounts you entered are valid and that you have sufficient funds to cover gas fees.

- **Display or Data Issues**
  - Refresh the page to ensure that the latest data is loaded.
  - Check your internet connection and confirm that the Ethereum network is operating normally.

- **Performance Problems**
  - If the application is running slowly, inspect your browser's console for any API or blockchain-related errors.
  - Try using a different browser or an incognito/private window to rule out issues caused by caching.

For further details on the application's functionality, refer to the documentation in the `docs` folder. If problems persist, please open an issue on the repository for support.
