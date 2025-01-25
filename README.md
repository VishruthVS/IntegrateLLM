## Project Overview
This project is a Web3-based decentralized application (dApp) built to leverage both blockchain and artificial intelligence (AI). The primary objective is to facilitate the secure and immutable storage of AI-generated data on the Ethereum blockchain. Users will interact with an AI model via a front-end interface, where their prompts are processed, and the responses are then securely stored on-chain in an Ethereum smart contract. This approach ensures that AI-generated content, such as prompts and responses, is tamper-proof and backed by blockchain's immutability.

---

## **Live Demo**  
Check out the live version of the project:  
👉 [Model Flow 7007](https://model-flow-7007.vercel.app/)  

This demo showcases the implementation of ERC-7007, focusing on AI-generated content and its integration with blockchain technology.

---

## Technological Stack
### Blockchain and Smart Contracts:
- **Ethereum Blockchain**: The application utilizes the Ethereum blockchain to ensure decentralized data storage and transaction immutability. Smart contracts are written in Solidity, which is the standard language for developing on Ethereum. The contract facilitates the storage of tokenized data, such as AI-generated responses, securely on-chain.
  
- **Ethers.js**: This JavaScript library is used to interact with Ethereum from the back-end. It allows the application to connect with Ethereum nodes, send transactions, and call smart contract functions, such as storing the AI-generated data (token ID, prompt, response).

- **Smart Contract**: The smart contract defines a function, `addAigcData`, which accepts inputs such as a token ID, prompt data, AI-generated content, and proof (in bytes format). This data is then stored in the blockchain, ensuring that it is secure, transparent, and immutable.

### AI Model Integration:
- **Hugging Face API**: The project integrates with Hugging Face’s API to process natural language inputs using a pre-trained AI model, specifically DeepSeek-R1-Distill-Qwen-1.5B. This model is fine-tuned for tasks such as text generation or AI-driven content creation. The model generates responses based on a user-provided prompt, which is then used in conjunction with blockchain to store the processed data.

- **AI Process**: The back-end sends a prompt to Hugging Face’s API, retrieves the AI-generated response, and prepares it for blockchain storage by encoding it in byte format. This response is used in the smart contract transaction.

### Backend and Frontend:
- **Node.js & TypeScript**: The backend of the application is built using Node.js with TypeScript for type safety and modern JavaScript features. TypeScript enhances the development process by providing strong typing, which helps prevent bugs and errors.

- **Axios**: Axios is used to communicate with the Hugging Face API from the back-end. It sends HTTP requests, receives responses, and handles errors effectively.

- **React.js & Tailwind CSS**: The frontend is developed with React.js for building interactive user interfaces and Tailwind CSS for styling. This combination allows for a fast, responsive, and visually appealing UI. The front-end communicates with the backend to fetch AI responses and Ethereum transaction data, displaying it to the user in real-time.

## Data Flow:
1. **User Input**: A user submits a prompt via the front-end UI.
2. **AI Model Processing**: The backend sends the prompt to Hugging Face’s API, where the AI model processes the input and generates a response.
3. **Blockchain Interaction**: The backend uses Ethers.js to send the generated AI data and related information to an Ethereum smart contract. This interaction is done through the `addAigcData` function, which stores the tokenized data on the blockchain.
4. **Immutable Data Storage**: Once the transaction is confirmed, the data (including prompt and AI response) is securely stored on the blockchain, ensuring that the data is tamper-proof and permanently recorded.

## Core Features
- **AI-Driven Data Generation**: Users can provide prompts that are processed by a sophisticated AI model, which generates human-like responses. These responses can be related to various use cases, such as content creation, data analysis, or language translation.
  
- **Decentralized Data Storage**: All AI-generated responses are stored on the Ethereum blockchain, ensuring transparency, security, and immutability. This makes the data resistant to tampering and manipulation.

- **Real-Time Feedback**: Once the data is successfully stored on-chain, the user receives real-time feedback in the form of a transaction hash, providing them with a reference to the specific blockchain interaction.

- **Seamless User Interface**: The application offers an easy-to-use front-end built with React.js and styled with Tailwind CSS, enabling users to interact with the AI model and blockchain functionalities with minimal friction.

## Project Goals
- **Enhanced Security and Transparency**: By leveraging Ethereum’s decentralized architecture, the project ensures that AI-generated content is stored securely on-chain, accessible to anyone and verifiable.

- **AI Integration for Enhanced User Experience**: By integrating state-of-the-art AI models through the Hugging Face API, the project enhances user experience by enabling intelligent content generation based on user input.

- **Blockchain for Immutable Data**: Using Ethereum’s blockchain guarantees that data, once stored, cannot be altered or tampered with, ensuring trust and transparency for users and stakeholders.

- **Scalability**: The design of the system supports scalability, allowing more complex models, additional functionalities, and the possibility to expand across different blockchain networks.

## Use Cases
- **NFTs**: This project can be used in creating NFTs where the metadata (like text prompts and AI responses) is stored securely and immutably on the blockchain, adding value and verifiability to the NFT.
  
- **Decentralized Content Creation**: The application can serve as a platform for decentralized content creation, where creators interact with AI models to generate unique and authentic content, all of which is stored on-chain.

- **AI-Driven dApps**: This approach can be extended to other decentralized applications where AI is used for data processing and storage on the blockchain, creating a new class of applications in the Web3 ecosystem.

## Conclusion
This project brings together the power of Ethereum's blockchain and Hugging Face's AI models to create a decentralized, secure, and transparent system for storing and interacting with AI-generated data. The integration of AI with blockchain ensures that all data is not only intelligent but also immutable, offering new possibilities in content creation, verification, and decentralized applications.
