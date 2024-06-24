require('dotenv').config();

require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");


const { RPC_API_URL, DEPLOYER_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

/**

* @type import('hardhat/config').HardhatUserConfig

*/

module.exports = {

  solidity: {
    compilers: [
      {
        version: "0.8.8",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },

   defaultNetwork: "sepolia",

   networks: {
      hardhat: {},

      sepolia: {
         url: RPC_API_URL,
         accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]
      }
   },

    etherscan: {
      apiKey: ETHERSCAN_API_KEY,
      customChains: [
        {
          network: "sepolia",
          chainId: 11155111,
          urls: {
            apiURL: "https://api-sepolia.etherscan.io/api",
            browserURL: "https://sepolia.etherscan.io/"
          }
        }
      ]
    },

    sourcify: {
      enabled: true
    }

}