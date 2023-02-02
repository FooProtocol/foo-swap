import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { any } from "hardhat/internal/core/params/argumentTypes";
require("dotenv").config()
// const PRIVATE_KEY: any = process.env.PRIVATE_KEY
type HttpNetworkAccountsUserConfig = any;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: '0.4.18',
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
    ],
  },
  // defaultNetwork: "hyperspace",
  // networks: {
  //   hyperspace: {
  //     url: "https://matic-mumbai.chainstacklabs.com",
  //     accounts:[ process.env.PRIVATE_KEY] as HttpNetworkAccountsUserConfig | undefined ,
  //   },
  // },

  //   networks: {
  //   mumbai: {
  //         url: "https://matic-mumbai.chainstacklabs.com",
  //         accounts:[ process.env.PRIVATE_KEY] as HttpNetworkAccountsUserConfig | undefined ,
  //     },
  // },
};

export default config;
