const contractAddress = '0x70760eC2422FFF4b10C1b750f1564B319C17a5E2'; // Replace with your deployed contract address
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_goodie",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_noOfItems",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_cost",
				"type": "uint256"
			}
		],
		"name": "addItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_goodie",
				"type": "string"
			}
		],
		"name": "buyGoodie",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_goodie",
				"type": "string"
			}
		],
		"name": "checkCost",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_goodie",
				"type": "string"
			}
		],
		"name": "checkGoodie",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] ;

let provider;
let signer;
let contract;

async function connect() {
    if (window.ethereum) {
        try {
            // Request account access if needed
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log(`Connected account: ${accounts[0]}`);
            // Initialize ethers provider and signer
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            // Create a connection to the smart contract
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            alert('Wallet connected');
        } catch (error) {
            console.error(error);
            alert('Failed to connect wallet');
        }
    } else {
        alert('No wallet found');
    }
}

// Function to add an item
async function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemQuantity = document.getElementById('itemQuantity').value;
    const itemCost = document.getElementById('itemCost').value;

    try {
        await contract.addItem(itemName, itemQuantity, itemCost);
		
        alert('Item added successfully!');
    } catch (error) {
        console.error('Error adding item:', error);
        alert('Error adding item. Check console for details.');
    }
}

// Function to buy a goodie
async function buyGoodie() {
    const goodieName = document.getElementById('goodieName').value;

    try {
        const tx = await contract.buyGoodie(goodieName);
        await tx.wait();
        const result = await contract.checkGoodie(goodieName);
        document.getElementById('buyGoodieResult').innerText = `Purchase complete, thank you! No. of items left: ${result}`;
    } catch (error) {
        console.error('Error buying goodie:', error);
        document.getElementById('buyGoodieResult').innerText = 'Error buying goodie. Check console for details.';
    }
}

// Function to check goodie quantity
async function checkGoodie() {
    const goodieName = document.getElementById('checkGoodieName').value;

    try {
        const result = await contract.checkGoodie(goodieName);
        document.getElementById('checkGoodieQuantity').innerText = `Number of items left: ${result}`;
    } catch (error) {
        console.error('Error checking goodie:', error);
        document.getElementById('checkGoodieQuantity').innerText = 'Error checking goodie';
    }
}

async function checkCost(){
	const goodieCost = document.getElementById('checkCostName').value;
	try{
		const price = await contract.checkCost(goodieCost);
		document.getElementById('checkGoodieCost').innerText =`Cost of goodie is: ${price}`
	} catch(error){
		console.log('error checking price',error);
	}
}
