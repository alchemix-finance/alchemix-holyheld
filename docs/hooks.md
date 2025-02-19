# Hooks Documentation

This document provides a comprehensive overview of all the hooks used in the Alchemix Self-Repaying Loans dApp. These hooks are organized by their functionality and include detailed examples, interfaces, and implementation details.

## Table of Contents
- [Holyheld Integration](#holyheld-integration)
  - [useHolyheld](#useholyheld)
  - [useHandleTopUp](#usehandletopup)
- [Loan Operations](#loan-operations)
  - [useBorrow](#useborrow)
  - [useAlchemistPosition](#usealchemistposition)
  - [useMintAlETH](#usemintaleth)
- [Chain and Token Management](#chain-and-token-management)
  - [useChain](#usechain)
  - [useTokenBalance](#usetokenbalance)
  - [useMaxAmount](#usemaxamount)
- [Strategy Management](#strategy-management)
  - [useStrategies](#usestrategies)
  - [useWatchQuery](#usewatchquery)

## Holyheld Integration

### useHolyheld

Hook for interacting with the Holyheld SDK. This hook manages the initialization and interaction with Holyheld's services.

#### Interface

```typescript
interface UseHolyheldSDKReturn {
  validateHolytag: (holytag: string) => Promise<boolean>;
  convertToEUR: (
    tokenAddress: string,
    decimals: number,
    tokenAmount: string,
    network: Network
  ) => Promise<{ EURAmount: string; transferData?: TransferData }>;
  performTopUp: (
    publicClient: any,
    walletClient: any,
    walletAddress: string,
    tokenAddress: string,
    tokenNetwork: Network,
    tokenAmount: string,
    transferData: TransferData | undefined,
    holytag: string,
    supportsSignTypedDataV4: boolean,
    callbacks: TopUpCallbackConfig
  ) => Promise<void>;
  getServerSettings: () => Promise<any>;
  isInitialized: boolean;
  isProcessing: boolean;
  error: string | null;
  sdk: HolyheldSDK;
}
```

#### Usage Example

```typescript
const {
  validateHolytag,
  convertToEUR,
  performTopUp,
  isInitialized,
  error
} = useHolyheldSDK();

// Validate a Holyheld tag
const isValid = await validateHolytag('username');

// Convert amount to EUR
const { EURAmount, transferData } = await convertToEUR(
  '0x1234...', // token address
  18,          // decimals
  '1.0',       // amount
  'ethereum'   // network
);

// Perform top-up
await performTopUp(
  publicClient,
  walletClient,
  '0x1234...',     // wallet address
  '0x5678...',     // token address
  'ethereum',      // network
  '1.0',          // amount
  transferData,
  'username',      // holytag
  true,           // supports SignTypedDataV4
  {
    onHashGenerate: (hash) => console.log('Hash:', hash),
    onStepChange: (step) => console.log('Step:', step)
  }
);
```

#### Implementation Details

- **Initialization**: Automatically initializes the SDK on mount using environment variables
- **Error Handling**: Provides detailed error messages for common failure scenarios
- **State Management**: Tracks initialization and processing states
- **Caching**: Implements caching for server settings and validation results
- **Network Support**: Handles multiple networks (Ethereum, Arbitrum, Optimism)

### useHandleTopUp

Hook for managing top-up operations in the Alchemix protocol. Combines Holyheld SDK functionality with Alchemix deposits.

#### Interface

```typescript
interface UseHandleTopUpReturn {
  handleTopUp: (
    holytag: string,
    depositAmount: string,
    depositAsset: string
  ) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}
```

#### Usage Example

```typescript
const { handleTopUp, isLoading, error } = useHandleTopUp();

try {
  await handleTopUp(
    'username',           // Holyheld tag
    '1.0',               // Amount to deposit
    '0x1234...5678'      // Token address
  );
  console.log('Top-up successful');
} catch (err) {
  console.error('Top-up failed:', err);
}
```

#### Implementation Details

1. **Validation Phase**
   - Checks chain support
   - Validates wallet connection
   - Verifies deposit asset format
   - Confirms server availability
   - Validates Holytag

2. **Deposit Phase**
   - Calculates minimum amount with 5% slippage tolerance
   - Executes deposit via Alchemix contract
   - Monitors transaction confirmation

3. **Top-up Phase**
   - Converts borrowed funds to EUR
   - Validates conversion limits
   - Executes top-up transaction
   - Handles callbacks for transaction status

4. **Error Handling**
   - Network errors
   - Contract interaction failures
   - Validation failures
   - Conversion limits
   - Transaction rejections

## Loan Operations

### useBorrow

Hook for borrowing synthetic assets in the Alchemix protocol. Manages the entire borrowing process from validation to execution.

#### Interfaces

```typescript
interface BorrowResult {
    status: string;
    mintedAmount: string;
    synthType: SynthAsset;
    transactionHash: string;
}

type SynthAsset = 'alETH' | 'alUSD';

interface BorrowParams {
    depositAsset: string;
    amount: string;
    holytag?: string;
    strategy?: string;
}
```

#### Asset Mappings

```typescript
const synthMapping: Record<string, string> = {
    USDC: "alUSD",
    DAI: "alUSD",
    WETH: "alETH",
    ETH: "alETH",
    USDT: "alUSD",
};
```

#### Usage Example

```typescript
const { borrow, isLoading, error } = useBorrow();

// Simple borrow
try {
  const result = await borrow({
    depositAsset: 'ETH',
    amount: '1.0'
  });
  console.log(`Minted ${result.mintedAmount} ${result.synthType}`);
} catch (err) {
  console.error('Borrow failed:', err);
}

// Borrow with top-up
try {
  const result = await borrow({
    depositAsset: 'ETH',
    amount: '1.0',
    holytag: 'username',
    strategy: '0x1234...'
  });
  console.log(`Transaction: ${result.transactionHash}`);
} catch (err) {
  console.error('Borrow failed:', err);
}
```

#### Implementation Details

1. **Initialization**
   - Chain validation
   - Contract loading
   - Gas estimation setup

2. **Validation**
   - Asset support check
   - Amount validation
   - Strategy verification
   - Holytag validation (if provided)

3. **Transaction Execution**
   - Gas estimation
   - Transaction building
   - Signature request
   - Transaction submission
   - Receipt monitoring

4. **Post-Transaction**
   - Event parsing
   - Receipt validation
   - Top-up execution (if requested)
   - Result formatting

### useAlchemistPosition

Hook for fetching and managing user positions in the Alchemist protocol.

#### Interface

```typescript
interface Position {
  collateral: {
    amount: string;
    asset: string;
    symbol: string;
  };
  debt: {
    amount: string;
    asset: string;
    symbol: string;
  };
  shares: string;
  depositLimit: string;
  mintLimit: string;
}

type DepositAsset = 'ETH' | 'WETH' | 'USDC' | 'USDT' | 'DAI';
```

#### Usage Example

```typescript
const position = useAlchemistPosition('ETH');

console.log('Collateral:', position.collateral.amount, position.collateral.symbol);
console.log('Debt:', position.debt.amount, position.debt.symbol);
console.log('Available to mint:', position.mintLimit);
```

#### Implementation Details

1. **Position Tracking**
   - Real-time position updates
   - Automatic refresh on blockchain changes
   - Cached results for performance

2. **Asset Management**
   - Supports multiple deposit assets
   - Automatic synthetic asset mapping
   - Decimal handling for different tokens

3. **Limit Calculations**
   - Deposit limit computation
   - Mint limit updates
   - Share calculations

4. **Error Handling**
   - Network disconnection recovery
   - Contract interaction failures
   - Invalid asset handling

### useMintAlETH

Hook for minting alETH synthetic tokens against ETH collateral.

#### Interface

```typescript
interface UseMintAlReturn {
  mint: (
    amount: string,
    recipient: string,
    minimumAmountOut: string
  ) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}
```

#### Usage Example

```typescript
const { mint, isLoading, error } = useMintAlETH();

try {
  const success = await mint(
    '1.0',              // amount in ETH
    '0x1234...',        // recipient address
    '0.95'              // minimum amount out (5% slippage)
  );
  
  if (success) {
    console.log('Successfully minted alETH');
  }
} catch (err) {
  console.error('Minting failed:', err);
}
```

#### Implementation Details

1. **Pre-mint Checks**
   - Balance verification
   - Allowance checking
   - Gas estimation
   - Slippage protection

2. **Contract Interaction**
   - ETH wrapping (if needed)
   - Contract approval
   - Mint transaction
   - Receipt confirmation

3. **Post-mint Processing**
   - Event parsing
   - Balance updates
   - Position refresh

## Chain and Token Management

### useChain

Hook for managing blockchain network connections and compatibility.

#### Interface

```typescript
interface UseChainReturn {
  chain: Chain | null;
  isUnsupported: boolean;
  switchNetwork: (chainId: number) => Promise<void>;
}

interface Chain {
  id: number;
  name: string;
  network: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}
```

#### Usage Example

```typescript
const { chain, isUnsupported } = useChain();

if (isUnsupported) {
  console.log('Please switch to a supported network');
} else {
  console.log(`Connected to ${chain.name} (${chain.id})`);
}
```

#### Implementation Details

1. **Chain Detection**
   - Automatic chain detection
   - Support verification
   - Default chain fallback

2. **Network Management**
   - Chain switching support
   - Network status monitoring
   - RPC endpoint management

3. **Caching**
   - Chain information caching
   - Support status caching
   - Connection state persistence

### useTokenBalance

Hook for fetching and managing token balances with built-in caching.

#### Interface

```typescript
interface UseTokenBalanceReturn {
  balance: string;
  formattedBalance: string;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}
```

#### Usage Example

```typescript
const {
  balance,
  formattedBalance,
  isLoading,
  refetch
} = useTokenBalance(
  '0x1234...',  // token address
  1,            // chain ID
  'ETH'         // asset symbol
);

console.log(`Balance: ${formattedBalance} ETH`);

// Manual refresh
await refetch();
```

#### Implementation Details

1. **Balance Fetching**
   - Native token support
   - ERC20 token support
   - Decimal handling
   - Automatic formatting

2. **Caching System**
   - Balance caching
   - Cache invalidation
   - Refresh triggers

3. **Auto-refresh Logic**
   - Block-based updates
   - Transaction monitoring
   - Balance change detection

### useMaxAmount

Hook for calculating maximum available amounts for operations with gas considerations.

#### Interface

```typescript
interface UseMaxAmountReturn {
  calculateMaxAmount: (
    address: string,
    chainId: number,
    depositAsset: string
  ) => Promise<string>;
  isLoading: boolean;
  error: string | null;
}
```

#### Usage Example

```typescript
const { calculateMaxAmount, isLoading } = useMaxAmount();

const maxAmount = await calculateMaxAmount(
  '0x1234...',  // address
  1,            // chainId
  'ETH'         // asset
);

console.log(`Maximum available: ${maxAmount} ETH`);
```

#### Implementation Details

1. **Amount Calculation**
   - Gas cost estimation
   - Buffer calculation
   - Balance verification
   - Decimal handling

2. **Asset-specific Logic**
   - ETH gas buffer
   - Token allowance check
   - Contract interaction costs

3. **Chain Optimization**
   - Network-specific gas estimates
   - RPC optimization
   - Cached calculations

## Strategy Management

### useStrategies

Hook for managing yield strategies in the Alchemix protocol.

#### Interface

```typescript
interface Strategy {
  address: string;
  label: string;
  image: string;
  yieldSymbol: string;
}

interface UseStrategiesReturn {
  strategies: Strategy[];
  formattedStrategies: {
    value: string;
    label: string;
  }[];
}
```

#### Usage Example

```typescript
const { strategies, formattedStrategies } = useStrategies(1, 'ETH');

// Use full strategy information
strategies.forEach(strategy => {
  console.log(`${strategy.label}: ${strategy.yieldSymbol}`);
});

// Use in a select component
<Select options={formattedStrategies} />;
```

#### Implementation Details

1. **Strategy Filtering**
   - Chain-specific filtering
   - Asset compatibility check
   - Gateway verification
   - Active status check

2. **Data Formatting**
   - Label generation
   - Image URL handling
   - Select option formatting

3. **Optimization**
   - Memoized results
   - Cached strategy data
   - Minimal re-renders

### useWatchQuery

Hook for monitoring and invalidating queries based on blockchain state changes.

#### Interface

```typescript
interface UseWatchQueryArgs {
  scopeKey: ScopeKey;
}

type ScopeKey = 'alchemist' | 'position' | 'balance';
```

#### Usage Example

```typescript
// Watch alchemist-related queries
useWatchQuery({ scopeKey: 'alchemist' });

// Watch position updates
useWatchQuery({ scopeKey: 'position' });
```

#### Implementation Details

1. **Query Management**
   - Scope-based invalidation
   - Block monitoring
   - Cache management

2. **Performance Optimization**
   - Selective updates
   - Debounced invalidation
   - Memory management

3. **Network Handling**
   - Chain-specific updates
   - RPC optimization
   - Error recovery

## Best Practices

When using these hooks, follow these guidelines:

1. **Error Handling**
   ```typescript
   const { data, error } = useHook();
   if (error) {
     // Handle error appropriately
     console.error('Operation failed:', error);
     // Show user feedback
     return <ErrorMessage error={error} />;
   }
   ```

2. **Loading States**
   ```typescript
   const { data, isLoading } = useHook();
   if (isLoading) {
     return <LoadingSpinner />;
   }
   ```

3. **Chain Validation**
   ```typescript
   const { chain } = useChain();
   if (!isSupportedChain(chain?.id)) {
     return <UnsupportedChainMessage />;
   }
   ```

4. **Gas Estimation**
   ```typescript
   // Always include gas buffer for ETH operations
   const maxAmount = await calculateMaxAmount(address, chainId, 'ETH');
   ```

5. **Type Safety**
   ```typescript
   // Use provided interfaces and types
   const position: Position = useAlchemistPosition('ETH');
   ```

## Contributing

When adding new hooks:

1. **Documentation**
   - Follow the existing documentation pattern
   - Include TypeScript interfaces
   - Provide clear examples
   - Document all parameters and return values

2. **Implementation**
   - Use TypeScript for type safety
   - Implement proper error handling
   - Add loading states
   - Consider performance optimization

3. **Testing**
   - Add unit tests
   - Include integration tests
   - Test error scenarios
   - Verify type safety

4. **Performance**
   - Implement caching where appropriate
   - Use memoization for expensive calculations
   - Optimize re-renders
   - Consider bundle size

5. **Maintenance**
   - Keep documentation updated
   - Monitor deprecations
   - Update dependencies
   - Review security implications
