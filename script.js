// ВСТАВЬ сюда адрес развернутого контракта
const contractAddress = "0xd9145CCE52D386f254917e481eB44e9943F39138";


const contractAbi = [
{
"inputs": [
{ "internalType": "string", "name": "_message", "type": "string" }
],
"name": "setMessage",
"outputs": [],
"stateMutability": "nonpayable",
"type": "function"
},
{
"inputs": [],
"name": "getMessage",
"outputs": [
{ "internalType": "string", "name": "", "type": "string" }
],
"stateMutability": "view",
"type": "function"
}
];


if (window.ethereum) {
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();


const contract = new ethers.Contract(contractAddress, contractAbi, signer);


document.getElementById('setMessageButton').onclick = async () => {
const message = document.getElementById('messageInput').value;
await contract.setMessage(message);
alert('Сообщение установлено!');
};


document.getElementById('getMessageButton').onclick = async () => {
const message = await contract.getMessage();
document.getElementById('messageDisplay').innerText = message;
};
} else {
alert('Установите Metamask.');
}