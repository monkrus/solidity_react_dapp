 // #8

/*
const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/ea9dd948eceb46c888515813a41924ce')

// ******************Please use 2 lines above with  one `option` at the same time ***********

// average gas price in wei for the last few blocks
// option 1
  web3.eth.getGasPrice().then((result) => {
  console.log(web3.utils.fromWei(result, 'ether'))
  })

//access to hashing function
//option 2
console.log(web3.utils.sha3('Sergei'))
// keccack256 can be used instead of sha3

//underscore.js library example
const _ = web3.utils._

_.each({key1: 'value', key2: 'value2'}, (value,key)  => {
  console.log(key)
})
*/



// #7
// we are using web3 library

const Web3 = require('web3')

// new connection through infura, instance of web3
const web3 = new Web3('https://mainnet.infura.io/v3/ea9dd948eceb46c888515813a41924ce')

// ******************Please use 2 lines above with  one `option` at the same time ***********





 //option 1 -get block number

 web3.eth.getBlockNumber().then(console.log)
 
 // option 2-get latest block
web3.eth.getBlock('latest').then(console.log) 

// option 3-get hash

web3.eth.getBlock('latest').then((block) => {
console.log(block.hash) } )

//option 4- get latest block hash /block number
web3.eth.getBlock('latest').then((block) => {
   blockHash: block.hash,
   blockNumber : block.number
 })
 


// option 5 - specify block OR hash
web3.eth.getBlock(5855085).then((block) => {
 console.log({
 blockHash: block.hash,
 blockNumber : block.number
  })
  })


// option 6 - get 10 latest blocks
web3.eth.getBlockNumber().then((latest) => {

web3.eth.getBlock(latest- i).then((block) => {
console.log(block.number)
 })
 }


//option 7 -amount of transaction in the block
 
  web3.eth.getBlockNumber().then(async (block) => {
  const txCount = await web3.eth.getBlockTransactionCount(block);
  console.log(txCount);
  });





 /*// #6
// we are using web3 library
const Web3 = require('web3')

// new connection through infura, instance of web3
const web3 = new Web3('https://mainnet.infura.io/v3/ea9dd948eceb46c888515813a41924ce')

// OMG token ABI from https://etherscan.io/address/0xd26114cd6EE289AccF82350c8d8487fedB8A0C07#code
const abi = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_releaseTime","type":"uint256"}],"name":"mintTimelocked","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]


// OMG  token contract address from  https://etherscan.io/address/0xd26114cd6EE289AccF82350c8d8487fedB8A0C07
const address = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07'

//connection to a smart contract
const contract =  new web3.eth.Contract(abi, address)



contract.getPastEvents(
    'Transfer', 
    {
    fromBlock: 5858000, 
    toBlock: 'latest'
    },
    (err, events) => {console.log(events.length) }
)



const Tx = require("ethereumjs-tx").Transaction
//???PRIVATE_KEY_1 ='99E497A1987B1176467978D60050D45C98F9E14B3A965ADDDB3227820AEB07CF'
//const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'})
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/ea9dd948eceb46c888515813a41924ce')

const account1 = '0x0a7b85d5933FBdE8Bd917C05aF4b0fBd8B601401'
const privateKey1 = Buffer.from(process.env. 'hex')


// Deploy the contract
web3.eth.getTransactionCount(account1, (err, txCount) => {
  const data = '0x60806040526040518060400160405280600a81526020017f4441707020546f6b656e000000000000000000000000000000000000000000008152506000908051906020019061004f929190610116565b506040518060400160405280600481526020017f44415050000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b929190610116565b506040518060400160405280600f81526020017f4441707020546f6b656e2076312e300000000000000000000000000000000000815250600290805190602001906100e7929190610116565b506012600360006101000a81548160ff021916908360ff16021790555034801561011057600080fd5b506101bb565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061015757805160ff1916838001178555610185565b82800160010185558215610185579182015b82811115610184578251825591602001919060010190610169565b5b5090506101929190610196565b5090565b6101b891905b808211156101b457600081600090555060010161019c565b5090565b90565b610c30806101ca6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80635a3b7e42116100715780635a3b7e421461025f57806370a08231146102e257806395d89b411461033a578063a1b9d824146103bd578063a9059cbb146103eb578063dd62ed3e14610451576100a9565b806306fdde03146100ae578063095ea7b31461013157806318160ddd1461019757806323b872dd146101b5578063313ce5671461023b575b600080fd5b6100b66104c9565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100f65780820151818401526020810190506100db565b50505050905090810190601f1680156101235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61017d6004803603604081101561014757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610567565b604051808215151515815260200191505060405180910390f35b61019f610659565b6040518082815260200191505060405180910390f35b610221600480360360608110156101cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061065f565b604051808215151515815260200191505060405180910390f35b6102436108ca565b604051808260ff1660ff16815260200191505060405180910390f35b6102676108dd565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102a757808201518184015260208101905061028c565b50505050905090810190601f1680156102d45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610324600480360360208110156102f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061097b565b6040518082815260200191505060405180910390f35b610342610993565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610382578082015181840152602081019050610367565b50505050905090810190601f1680156103af5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103e9600480360360208110156103d357600080fd5b8101908080359060200190929190505050610a31565b005b6104376004803603604081101561040157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a7f565b604051808215151515815260200191505060405180910390f35b6104b36004803603604081101561046757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bd6565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561055f5780601f106105345761010080835404028352916020019161055f565b820191906000526020600020905b81548152906001019060200180831161054257829003601f168201915b505050505081565b600081600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60045481565b6000600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156106ad57600080fd5b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561073657600080fd5b81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555081600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600360009054906101000a900460ff1681565b60028054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109735780601f1061094857610100808354040283529160200191610973565b820191906000526020600020905b81548152906001019060200180831161095657829003601f168201915b505050505081565b60056020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a295780601f106109fe57610100808354040283529160200191610a29565b820191906000526020600020905b815481529060010190602001808311610a0c57829003601f168201915b505050505081565b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508060048190555050565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610acd57600080fd5b81600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600660205281600052604060002060205280600052604060002060009150915050548156fea265627a7a7231582012690ef9d34417c2d0d6e3e3348d90ddebdfdd218f1044c8b6265d9d5443d6aa64736f6c634300050b0032'
  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(1000000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: data
  }

  const tx = new Tx(txObject)
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('err:', err, 'txHash:', txHash)
    // Use this txHash to find the contract on Etherscan!
  })
})
*/

/* //#5

const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/YOUR_INFURA_API_KEY')

const account1 = '' // Your account address 1
const account2 = '' // Your account address 2

const privateKey1 = Buffer.from('YOUR_PRIVATE_KEY_1', 'hex')
const privateKey2 = Buffer.from('YOUR_PRIVATE_KEY_2', 'hex')

// Read the deployed contract - get the addresss from Etherscan
const contractAddress = '0xd03696B53924972b9903eB17Ac5033928Be7D3Bc'
const contractABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]

const contract = new web3.eth.Contract(abi, contractAddress)

// Transfer some tokens
web3.eth.getTransactionCount(account1, (err, txCount) => {

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    to: contractAddress,
    data: contract.methods.transfer(account2, 1000).encodeABI()
  }

  const tx = new Tx(txObject)
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('err:', err, 'txHash:', txHash)
    // Use this txHash to find the contract on Etherscan!
  })
})

// Check Token balance for account1
contract.methods.balanceOf(account1).call((err, balance) => {
  console.log({ err, balance })
})

// Check Token balance for account2
contract.methods.balanceOf(account2).call((err, balance) => {
  console.log({ err, balance })
})

*/