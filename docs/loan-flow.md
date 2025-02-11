# Alchemix Loan Flow

## Process Overview

The Alchemix self-repaying loan process allows users to deposit collateral (ETH) and borrow synthetic assets (alETH) that automatically repay themselves over time.

## Detailed Steps

### 1. Collateral Deposit
- User approves the Alchemist contract for their ETH
- User deposits their ETH into the contract
- Collateral starts generating yield

### 2. alETH Borrowing
- User can borrow up to 50% of their collateral value
- Maximum borrowable amount is calculated dynamically
- Minting fees are displayed and confirmed

### 3. Automatic Repayment
- Deposited collateral generates yield
- This yield is used to automatically repay the debt
- Repayment rate depends on yield strategies

### 4. Position Management
- Monitoring debt-to-collateral ratio
- Ability to add more collateral
- Manual repayment option
- Available collateral withdrawal

## Smart Contract Interactions

### Main Contracts
- **Alchemist**: Manages deposits and borrowing
- **TransmuterBuffer**: Handles yield conversion
- **YieldTokens**: Represents yield tokens

### Important Events
- `Deposit`: Emitted on deposit
- `Borrow`: Emitted on borrowing
- `Repay`: Emitted on repayment
- `Withdraw`: Emitted on withdrawal
