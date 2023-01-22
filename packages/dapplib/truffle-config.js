require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind prosper inflict person forget toss'; 
let testAccounts = [
"0xc78e5c7f78f78f45d58d3e92ddde9afdc419bebe4f0f9def4856556b666756ad",
"0x99ce2c134e28a463e7f99263d4d8125c458b6a03e91c083571218d03e16cce40",
"0x71419ee1a68a3da7616b61e26f95849a3e2211a5d434992734094d037d199872",
"0x2dc5c8db22c719d4b2e6c152e85f51c6890692ba0c8ae16a8dceaaedb6a2e0ee",
"0xd62d7d70bfed87a2edeac5a0bfcb97564743c35d1f978977bbbcf3499fb30841",
"0xf5648e6e8d3a48c257ca67117747c9c728fd08754368e5cb526d07f5f3ed47a8",
"0x4d7d01e26cf39483cd0dd1528bb1eeffc9b13c8e8d69a11543e1229cbe342d00",
"0x9e10f0781be1dc58383e7461030c9dc1af709c878448f9bfb72a84ccdcc3cbf9",
"0xf60b6661e35d3fe673871ff5a4fe07eea7f647ab2737fee71df6fb63199d1f1b",
"0xfdaaf7423745d160cb8e5c81829192da1c6292873fecc9e161fcb97d3f652b1b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


