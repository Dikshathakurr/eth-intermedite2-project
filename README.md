# Message System
The Quickbuy Solidity contract manages items with quantities and costs, allowing users to add new items, check availability and prices, and purchase items decrementing available quantities. In a frontend application, JavaScript with Web3.js can connect to the contract, display item details, and enable user interactions like buying and adding new items.

# Description
Smart contract part:

This Solidity smart contract, Quickbuy, manages different items (goodies) with quantities and costs. Users can add items with specific quantities and costs using the addItem function. The buyGoodie function allows purchasing items, decrementing their available quantity, and providing feedback on the transaction status. Functions checkGoodie and checkCost enable users to view the current quantity and cost of items respectively.

Front end part:

index.html and styles.css is used to create and design the structure and look of the front end and script.js is used for the logic purpose.HTML and ethers.js are used together to create a user-friendly interface for interacting with Ethereum blockchain applications. HTML provides the structure and input fields for users to input data (like item details), while ethers.js handles the connection to Ethereum, allowing the frontend to send transactions (like adding items or buying goods) securely and retrieve data (like item quantities and costs) from smart contracts deployed on the blockchain. This combination enables seamless integration between blockchain functionality and user interaction, making decentralized applications accessible and intuitive.

# Getting Started
# Executing program
To run this program, First create a directory , switch to that directory and open it in vs code.

1. Run npm i, this will install the dependencies.
2. Run npx hardhat node this will create a local blockchain. from the provided private keys copy anyone and import in metamask.
3.  Open new terminal and run npx hardhat run --network localhost scripts/deploy.js . This will compile and deploy the contract on hardhat node. contract address will be printed in the terminal, copy and paste that address in contractAddress value in src\script.js file.
4.  Naviage to ../artifacts/contracts/MessageSystem.sol/MessageSystem.json file and copy the abi address which looks like :

"abi": [
  {.....}
 ]
 
and paste this for the value of contractABI.

5) Now open index.html.
   
6) In metamask set network to localhost
   
7) click connect wallet now you can interact with UI add/remove member as hod/faculity, send messages. And at last can check the designation of member in integer form(in console) by providing its address.

# Authors

Diksha Thakur

# License

This MyToken is licensed under the MIT License
