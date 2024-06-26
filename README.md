# optimism-experiments

## Components

### gas-token-contract

Folder contains deployment script and implementation for the ERC20 smart. Deploy of this smart contract is prerequisite to deploy the optimistic chain.

Deployment instructions:

1. Have account with some funds on the EVM network where you want to deploy ERC20.
2. Change directory to `gas-token-contract`
3. Follow the instructions in the `README.md` for the `gas-token-contract`


## Optimism chain info:

- L1 Network [Ethereum Sepolia](https://sepolia.etherscan.io)
- Gas token address: [0xe11e87ab28920d8291b71dab970644041a054da9](https://sepolia.etherscan.io/address/0xe11e87ab28920d8291b71dab970644041a054da9)
- Smart contract addresses: [network-artifacts/addresses.json](./network-artifacts/addresses.json)

## Network artifacts

The optimism stack has been generated and you can start your node in our op-stack using the network artifacts located in the [network-artifacts](./network-artifacts/) folder.

## Addresses used to spin the network up

- Admin: 0x530FE24D7Bb68C359325BDc8360B616Db99E31d9
- Batcher: 0x3c9BCb0B5BE9D1c4D75024BAA0d5D55aD354fa77
- Proposer: 0xb119F727C963886cE97BCA833090F854F7654848
- Sequencer: 0x5e188618Ed275A47E0BF6Da0905F1a1067d52425

## References

Used references:

- [Node Architecture](https://docs.optimism.io/builders/node-operators/architecture)
- [How to Run a Custom Gas Token Chain](https://docs.optimism.io/builders/chain-operators/features/custom-gas-token)
- [Creating Your Own L2 Rollup Testnet](https://docs.optimism.io/builders/chain-operators/tutorials/create-l2-rollup)

### Missing stuff

- Monitoring
- HA
- Immutable infrastructure - at the moment all of the servers are deployed with ansible, which is not good, We should build the server image, or create reproducible builds with docker depending, where we are going to deploy our stack
- Automation: Github actions / Jenkins