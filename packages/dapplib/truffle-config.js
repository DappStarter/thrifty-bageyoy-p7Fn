require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note maze coconut grace slice tattoo gas'; 
let testAccounts = [
"0x01d4d3ef4d671a9489b55f1a104bd7bce33061285441409fe8d8ed89e94427f3",
"0xfca964cb9a5f34af427994ebe3aaa54c8f6f9c95ada39aeef3658e6e6cf2f802",
"0xa17b848adabbb84ed202c7a54de7ef50cfce6d9514b252c8d4b67ab2756a3f9e",
"0x7bb8b60b7b2db477537aadb5913316c312375a39bd7fdb65baf18874c7662201",
"0xf25c5231fc965fb2a6719cbc98e3395685609bca5f814309ebc31c78812a40fd",
"0xd9245c06b4d616c63b44a309dda364701fdd54bd2d98d378b0049eaacbb5f7cb",
"0xc65bba43d6d89e0aea2a27809e8a7b56157c8f64b7dec0a311757382863aaacb",
"0xeab67703ee127904928800c83532c43fa3c9f8e43c0712f0d43b48ced566a01f",
"0xc760dc85e24c82b05d1f9a886fa6dd3abc76b79301a719d8345ef69fbb5c8a64",
"0x7e67c7b53c1a6c830ea6f508e53cddadfc3f192f88574e6da60e6cefde94c45c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

