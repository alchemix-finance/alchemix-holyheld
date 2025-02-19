# Deployment Guide

## Prerequisites

- Node.js v16+
- npm or yarn
- Access to an Ethereum node (Infura, Alchemy, etc.)
- Required API keys configured

## Configuration

1. **Environment Variables**
```bash
VITE_ALCHEMY_API_KEY=your_alchemy_key
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id
```

2. **Network Configuration**
- Modify `src/lib/wagmi/chains.ts` for supported networks
- Verify contract addresses for each network

