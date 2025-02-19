# Technical Architecture

## Overview

The application is built as a modern dApp (decentralized application) using React and TypeScript. It interacts with Alchemix smart contracts via Web3 libraries.

## Main Components

### 1. User Interface Layer
- **App.tsx**: Main entry point, handles global state and routing
- **Components/**: Reusable components
  - `TransactionConfirmation.tsx`: Transaction confirmation handling
  - `MessageDisplay.tsx`: Message and notification display

### 2. Business Logic Layer (Hooks)
- **useAlchemixLoan.ts**: Alchemix loan operations management
- **useMintAlETH.ts**: Synthetic token minting logic
- **useAlchemistPosition.ts**: User position tracking
- **useWatchQuery.ts**: Blockchain query monitoring

### 3. Configuration and Utilities
- **lib/config/**: Asset and contract configuration
- **lib/wagmi/**: Blockchain connection configuration
- **lib/queries/**: GraphQL queries for on-chain data

## Data Flow

1. User interacts with the UI
2. Custom hooks handle business logic
3. Transactions are sent via wagmi/viem
4. Events are monitored for updates
5. UI is updated via React

## Security

- User input validation
- Secure transaction handling
- Approval checks
- Protection against common attacks
