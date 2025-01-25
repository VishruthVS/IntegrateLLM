import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/Sf54KEh8ZcLbSiXR-4Afyefwoc4pktOk");

const contractAddress = "0x61d916a92f737c91973e38A47FC3676823350CDd";

const abi = [ 
    {
        "type": "function",
        "name": "addAigcData",
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "prompt",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "aigcData",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "proof",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            {
                "name": "approved",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getAigcData",
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "prompt",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "aigcData",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "proof",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getApproved",
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "operator",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "ownerOf",
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "inputs": [
            {
                "name": "operator",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "approved",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "inputs": [
            {
                "name": "interfaceId",
                "type": "bytes4",
                "internalType": "bytes4"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "verify",
        "inputs": [
            {
                "name": "prompt",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "aigcData",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "proof",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [
            {
                "name": "success",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "AigcData",
        "inputs": [
            {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "prompt",
                "type": "bytes",
                "indexed": true,
                "internalType": "bytes"
            },
            {
                "name": "aigcData",
                "type": "bytes",
                "indexed": true,
                "internalType": "bytes"
            },
            {
                "name": "proof",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "approved",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ApprovalForAll",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "operator",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "approved",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "name": "from",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "to",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "tokenId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    }
];


const privateKey = "aca4592269f9c4c8dcae9831000be37ec9f2eb7d86a7cac6974ebaf1186f0ef5"; 
const wallet = new ethers.Wallet(privateKey, provider);

// Create a contract instance with signer
const contractWithSigner = new ethers.Contract(contractAddress, abi, wallet);

// Define a function to call the `balanceOf` method
async function getBalance(ownerAddress) {
  try {
    const balance = await contractWithSigner.balanceOf(ownerAddress);
    console.log(`Balance of address ${ownerAddress}: ${balance.toString()}`);
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
}

// Define a function to call the `addAigcData` method
async function addAigcData(tokenId, prompt, aigcData, proof) {
  try {
    // Convert prompt, aigcData, and proof to valid bytes
    const promptBytes = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(prompt));
    const aigcDataBytes = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(aigcData));
    const proofBytes = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(proof));

    const tx = await contractWithSigner.addAigcData(tokenId, promptBytes, aigcDataBytes, proofBytes);
    console.log(`Transaction sent: ${tx.hash}`);
    
    // Wait for the transaction to be mined
    const receipt = await tx.wait();
    console.log(`Transaction mined in block: ${receipt.blockNumber}`);
  } catch (error) {
    console.error("Error calling addAigcData:", error);
  }
}

const ownerAddress = "0xF297fb18353F3e5E5eAe07806F93316D3848e238"; 
getBalance(ownerAddress);

const tokenId = 1;
const prompt = "Hello World"; // Example prompt
const aigcData = "Some generated data"; // Example AIGC data
const proof = "Some proof data"; // Example proof
addAigcData(tokenId, prompt, aigcData, proof);                      
