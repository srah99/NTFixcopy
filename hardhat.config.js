require('@nomiclabs/hardhat-ethers');

module.exports = {
    solidity: "0.8.0",
    paths: {
        artifacts: "./src/artifacts",
    },
    networks: {
        hardhat: {
            chainId: 1337,
        },
    },
};