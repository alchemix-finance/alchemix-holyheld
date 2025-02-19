# Libraries Documentation

This document provides an overview of the key libraries used in the Alchemix Self-Repaying Loans dApp, detailing their roles, functionalities, and examples of usage.

## Table of Contents
- [wagmi](#wagmi)
- [ethers.js / viem](#ethersjs--viem)
- [@holyheld/sdk](#holyheldsdk)

## wagmi

### Overview

`wagmi` is a React Hooks library for Ethereum that simplifies the interaction with Ethereum wallets and smart contracts. It provides a set of hooks that allow developers to easily manage state and effects related to blockchain interactions.

### Key Features
- **Account Management**: Easily manage user accounts and wallet connections.
- **Chain Management**: Handle multiple Ethereum chains and their configurations.
- **Contract Interaction**: Simplify reading and writing to smart contracts.

### Usage Example

```typescript
import { useAccount, useConnect, useDisconnect } from 'wagmi';

const MyComponent = () => {
  const { isConnected, address } = useAccount();
  const { connect, disconnect } = useConnect();

  return (
    <div>
      {isConnected ? (
        <button onClick={() => disconnect()}>Disconnect</button>
      ) : (
        <button onClick={() => connect()}>Connect Wallet</button>
      )}
      <p>Connected address: {address}</p>
    </div>
  );
};
```

### Configuration

To configure `wagmi`, you will typically set up a provider in your main application file:

```typescript
import { WagmiProvider } from 'wagmi';

const App = () => {
  return (
    <WagmiProvider>
      {/* Your application components */}
    </WagmiProvider>
  );
};
```

## ethers.js / viem

### Overview

`ethers.js` is a library for interacting with the Ethereum blockchain and its ecosystem. It provides utilities for working with Ethereum addresses, transactions, contracts, and more. The `viem` library is a lightweight alternative that focuses on performance and simplicity.

### Key Features
- **Contract Interaction**: Read and write to smart contracts easily.
- **Transaction Management**: Send transactions and handle gas estimation.
- **Utilities**: Provides functions for hashing, signing, and encoding data.

### Usage Example

```typescript
import { ethers } from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);

const fetchData = async () => {
  const data = await contract.someFunction();
  console.log(data);
};
```

### Configuration

When using `ethers.js`, you typically need to set up a provider and a signer:

```typescript
const provider = new ethers.providers.JsonRpcProvider('RPC_URL');
const signer = provider.getSigner();
```

## @holyheld/sdk

### Overview

`@holyheld/sdk` is a JavaScript SDK for interacting with the Holyheld platform. It provides methods for tag validation, currency conversion, and top-up operations, allowing seamless integration with the Holyheld services.

### Key Features
- **Tag Validation**: Validate Holyheld tags for user accounts.
- **Currency Conversion**: Convert token amounts to EUR or other currencies.
- **Top-up Operations**: Execute top-up transactions directly from the application.

### Usage Example

```typescript
import HolyheldSDK from '@holyheld/sdk';

const sdk = new HolyheldSDK({ apiKey: 'YOUR_API_KEY' });

const validateTag = async (tag) => {
  const isValid = await sdk.validateHolytag(tag);
  console.log(`Tag is valid: ${isValid}`);
};
```

### Configuration

To use the Holyheld SDK, initialize it with your API key:

```typescript
const sdk = new HolyheldSDK({ apiKey: 'YOUR_API_KEY' });
```

## Conclusion

Understanding these libraries and their functionalities is crucial for effectively developing and maintaining the Alchemix Self-Repaying Loans dApp. Each library plays a vital role in ensuring seamless interactions with the Ethereum blockchain and the Holyheld platform.
