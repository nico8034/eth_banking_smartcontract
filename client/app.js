
const web3 = new Web3("http://127.0.0.1:8543")
const Bank = [
  {
    "inputs": [],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
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
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

let accounts;

async function getBlockNumber() {
  const latestBlockNumber = await web3.eth.getBlockNumber()
  console.log(latestBlockNumber)
  return latestBlockNumber
}

//getBlockNumber()

const createAccount = async () => {
  let accountNameElement = document.getElementById("accountName");
  let accountBalanceElement = document.getElementById("accountBalance");
  let account = await web3.eth.accounts.create("seed2");
  let balance = await web3.eth.getBalance(account.address)
  accountNameElement.innerHTML = account.address;
  accountBalanceElement.innerHTML = web3.utils.fromWei(balance, 'ether');
}

const helloWorld = () => {
  let myContract = web3.eth
  console.log(web3.eth.Contract)
}

const getAccounts = () => {
  accounts = web3.eth.getAccounts().then(console.log)
}

const getBalanceOfAccount = async () => {
  let addressInput = document.getElementById("addressInput").value;
  let balance = await web3.eth.getBalance(addressInput)
  document.getElementById("balanceForAddress").innerHTML = web3.utils.fromWei(balance, 'ether');
}

const deployedContract = async () => {
  let deployer = "0x1d43faC70f3471bC2f8aF3784F251bF738321616";
  let contractAddress = "0xB4e5953FF3BB7780d528B9CFE8C4D77691CF8f28";
  let contract = new web3.eth.Contract(Bank, contractAddress);
  let amount = web3.utils.toWei("1", 'ether');

  console.log(contract.methods);
  contract.methods.deposit({
    from: deployer,
    value: amount
  })
  contract.methods.balanceOf(deployer).call().then(console.log)

}


