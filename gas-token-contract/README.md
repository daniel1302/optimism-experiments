# Contracts

## Usage

1. Install dependencies

```
npm install
```

1. Deploy

```
npx hardhat run scripts/deploy-gas-token.js 
```

2. Verify:

Command will be printed after running the `deploy-gas-token.js`

```
npx hardhat verify ...
```

## Environment variables

- `RPC_API_URL` - The RPC URL for the EVM network, where you are going deploy the token to
- `ETHERSCAN_API_KEY` - Etherscan API key used to verify smart contract token on the block explorer
- `DEPLOYER_ADDRESS` - Address where all initial supply is transferred to
- `DEPLOYER_PRIVATE_KEY` - Private key for the account used to send deployment transaction.
- `GAS_TOKEN_NAME` - Gas token name(max 32 bytes)
- `GAS_TOKEN_SYMBOL` - Gas token symbol(max 32 bytes)