# Alchemix Self-Repaying Loans dApp

A decentralized user interface for interacting with the Alchemix protocol, enabling management of self-repaying loans using collateral assets.

## 🚀 Features

- Wallet connection via RainbowKit
- Collateral deposits (ETH)
- Borrowing alETH (Alchemix synthetic ETH)
- Loan position management
- Holyheld SDK integration
- Transaction confirmation support
- Modern UI with Material-UI

## 🛠 Technologies Used

- React 18
- TypeScript
- Vite
- Wagmi (Web3 interactions)
- RainbowKit (wallet connection)
- Material-UI
- Ethers.js
- Viem
- React-Toastify

## 📚 Project Structure

```
src/
├── App.tsx             # Main component of the application
├── main.tsx            # Application entry point (providers and global configurations)
├── components/         # Reusable React components
├── hooks/              # Custom Web3 logic hooks (e.g., useAlchemistPosition, useTokenBalance, useMaxAmount, etc.)
├── lib/                # Configurations and utilities (contracts, queries, etc.)
├── context/            # React contexts (e.g., MessageContext)
├── assets/             # Static assets (images, logos, etc.)
└── utils/              # Utility functions
```


- **/src**: Main source code of the application.
  - **App.tsx**: The main component of the application. This file orchestrates the application's core functionalities (deposit, borrowing, notifications, etc.). For detailed documentation, see [App Documentation](docs/app.md).
  - **main.tsx**: The entry point where providers and global configurations (such as Wagmi and RainbowKit) are set up before rendering the App.
  - **hooks/**: Custom React hooks used throughout the application (e.g., useAlchemistPosition, useTokenBalance, useMaxAmount, etc.).
  - **lib/**: Utility functions and configuration files, including blockchain queries and contracts.
  - **assets/**: Static assets like images and logos.
  - **components/**: Reusable UI components such as dialogs, buttons, and message displays.
  - **context/**: Global context providers like MessageContext for notifications.

- **/docs**: Documentation for the project.
  - **app.md**: Detailed documentation for App.tsx, explaining its architecture, state management, UI components, and integrations.
  - **styles.md**: Documentation of the project's CSS styles.
  - **hooks.md**: Comprehensive guide to all React hooks used in the application.
  - **libraries.md**: Overview of key libraries used in the project (wagmi, ethers.js/viem, @holyheld/sdk, etc.).
  - **loan-flow.md** and **deployment.md**: Additional documentation for specific workflows and deployment instructions.

- **/public**: Static files and assets public to the application.

- **README.md**: The main project documentation and guide.

## 📦 Installation

1. Clone the repository:
```bash
git clone [REPO_URL]
cd alchemix-self-repaying-loans
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

The application uses several important configurations:

- `src/lib/config/synths.ts`: Synthetic assets configuration
- `src/lib/wagmi/chains.ts`: Contracts and chains configuration
- `src/lib/queries/`: Protocol interaction queries


## 📄 Documentation

Detailed documentation is available in the `/docs` directory:

- [Architecture Overview](docs/architecture.md)
- [Loan Flow](docs/loan-flow.md)
- [Deployment Guide](docs/deployment.md)
- [Hooks Documentation](docs/hooks.md) - Comprehensive guide to all React hooks used in the application
- [Libraries Documentation](docs/libraries.md) - Overview of key libraries used in the project, including:
  - **wagmi**: For managing wallet connections and blockchain interactions.
  - **ethers.js / viem**: For interacting with Ethereum smart contracts.
  - **@holyheld/sdk**: For integrating with the Holyheld platform.
- [App Documentation](docs/app.md) - Detailed documentation for App.tsx, the main file of the application, covering its architecture, state management, UI components, and more.


