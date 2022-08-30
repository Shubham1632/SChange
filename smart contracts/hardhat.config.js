//https://eth-goerli.g.alchemy.com/v2/e0a6J0C8Ijefgu_dWGoNY6wgD31eSW7b

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/xveZ78DQEumaf8RTCfhzUNxP25r0ALuU",
      accounts: [
        "248d4d698147d02151e2785f405efb90e419f519d02a7eee0e3ab7bdb32000b5",
      ],
    },
  },
};
