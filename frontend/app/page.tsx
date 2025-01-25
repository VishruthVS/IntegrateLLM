'use client';

import { useState } from 'react';
import axios from 'axios';
import { ethers, toUtf8Bytes } from 'ethers';

const HF_API_URL = "https://api-inference.huggingface.co/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B/v1/chat/completions";
const HF_API_KEY = process.env.NEXT_PUBLIC_HF_API_KEY; 
const CONTRACT_ADDRESS = "0x61d916a92f737c91973e38A47FC3676823350CDd"; 
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY; 
const ABI = [ 
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

export default function Page() {
    const [tokenId, setTokenId] = useState<number | string>('');
    const [prompt, setPrompt] = useState('');
    const [status, setStatus] = useState('');
    const [aigcData, setAigcData] = useState<string>(''); 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Processing...');
        setAigcData(''); 

        try {
            // Query Hugging Face API
            const requestBody = {
                model: "deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
                ],
                max_tokens: 500,
                stream: false
            };

            const hfResponse = await axios.post(HF_API_URL, requestBody, {
                headers: {
                    Authorization: `Bearer ${HF_API_KEY}`,
                    "Content-Type": "application/json"
                }
            });

            const responseContent = hfResponse.data.choices[0].message.content;
            setAigcData(responseContent); 
            console.log("LLM Model Response:", responseContent); 
            // Connect to Ethereum
            const provider = new ethers.JsonRpcProvider(
                "https://eth-sepolia.g.alchemy.com/v2/Sf54KEh8ZcLbSiXR-4Afyefwoc4pktOk"
            );
            
            const wallet = new ethers.Wallet(PRIVATE_KEY as string, provider);
            const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

            
            const promptBytes = toUtf8Bytes(prompt);
            const aigcDataBytes = toUtf8Bytes(responseContent);
            const proofBytes = toUtf8Bytes("sample_proof");

           
            const tx = await contract.addAigcData(tokenId, promptBytes, aigcDataBytes, proofBytes);
            await tx.wait();

           
            console.log(`Transaction Hash: ${tx.hash}`);
            console.log(`Stored Data: Token ID: ${tokenId}, Prompt: ${prompt}, AI Response: ${responseContent}`);

            setStatus(`Data stored on-chain with tx: ${tx.hash}`);
        } catch (error:unknown) {
          if (axios.isAxiosError(error)) {
            
            console.error("Axios Error:", error.response?.data || error.message);
        } else if (error instanceof Error) {
            
            console.error("General Error:", error.message);
        } else {
           
            console.error("Unexpected Error:", error);
        }
            setStatus("Error occurred while processing the data.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-center mb-4">AI-Generated Data Storage</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="tokenId" className="block text-sm font-medium text-gray-700">Token ID</label>
                        <input
                            id="tokenId"
                            type="number"
                            value={tokenId}
                            onChange={(e) => setTokenId(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <div>
                        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">Prompt</label>
                        <textarea
                            id="prompt"
                            rows={4}
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Submit Data
                    </button>
                </form>

                {status && <div className="mt-4 text-center text-sm text-gray-500">{status}</div>}
                
                {aigcData && (
                    <div className="mt-4 text-center text-sm text-gray-700">
                        <h2 className="font-semibold">AI-Generated Response:</h2>
                        <p>{aigcData}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
