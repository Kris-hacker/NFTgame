window.userAddress = null;
window.richAddress = null;
window.richPrivatekey = null;
window.onload = async () => {
if (!window.ethereum){

    alert("You need install the MetaMask Wallet !");
}
    window.userAddress = window.localStorage.getItem("userAddress");
if (!window.userAddress){
    return false;
}
    document.getElementById("userAddress").textContent= `${window.userAddress}`;
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
    console.log(account)
  
}

async function walletLogin(){ 
    if (window.ethereum){
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        window.userAddress = truncateAddress(account);
        window.localStorage.setItem("userAddress",truncateAddress(account));
        document.getElementById("userAddress").textContent = `${window.userAddress}`;
        console.log(document.getElementById("userAddress").value)
        //getBalance();
    } else{
        alert("No Web3's wallet extension detected.");
    }
}

function truncateAddress(address) {
    if (!address) {
      return "";
    }
    return `${address.substr(0, 5)}...${address.substr(
      address.length - 5,
      address.length
    )}`;
}

async function logout() { 
    alert("Bye bye~~");
    window.userAddress = null; 
    window.localStorage.removeItem("userAddress");
    document.getElementById( "userAddress" ).textContent = "Connect Wallet";
  //  document.getElementById( "userBalance" ).value = "";
}