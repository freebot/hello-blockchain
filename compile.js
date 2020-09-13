const path = require('path');
const fs = require('fs');
const solc = require('solc');

const helloPath = path.resolve(__dirname, 'contracts', 'Hello.sol');
const source = fs.readFileSync(helloPath, 'UTF-8');

var input = {
    language: 'Solidity',
    sources: {
        'Hello.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 

console.log('compiling contract');
    let compiledContract = JSON.parse(solc.compile(JSON.stringify(input)));
    console.log('Contract Compiled');
    for (let contractName in compiledContract.contracts['Hello.sol']) {
        console.log(contractName , compiledContract.contracts['Hello.sol'][contractName].abi);      
        let abi = compiledContract.contracts['Hello.sol'][contractName].abi;
        fs.writeFileSync(`./contracts/bin/${contractName}_abi.json` , JSON.stringify(abi));
        return compiledContract.contracts['Hello.sol'][contractName];
    }
