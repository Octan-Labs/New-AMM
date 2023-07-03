import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {

  networks: {
    bsc_test: {
      url: process.env.BSC_TESTNET_PROVIDER,
      accounts: process.env.TESTNET_DEPLOYER !== undefined ? [process.env.TESTNET_DEPLOYER] : [],
      gasPrice: 10_000_000_000,
      timeout: 20000,
      chainId: 97
  },
  },

  solidity: {
    compilers: [
      {
        version: "0.8.17"
      }
    ]
  },

  gasReporter: {
    enabled: true
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./build/cache",
    artifacts: "./build/artifacts"
  },

  etherscan: {
    apiKey: process.env.BSC_API_KEY,
  }
};

export default config;
