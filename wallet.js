window.userAddress = null;
window.richAddress = null;
window.richPrivatekey = null;
window.onload = async () => {
    if (!window.ethereum){

        alert("You need install the MetaMask Wallet !");
    }
        window.userAddress = window.localStorage.getItem("userAddress");
        window.userAddress2 = window.localStorage.getItem("userAddress2");
    if (!window.userAddress){
        return false;
    }
        document.getElementById("userAddress").textContent = `${truncateAddress(window.userAddress)}`;
        document.getElementById("userAddress2").textContent =`${window.userAddress2}`;
       
    }
    

async function walletLogin(){ 
    if (window.ethereum){
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
        const account = accounts[0];
        window.userAddress = account;
        window.userAddress2 = account;
        window.localStorage.setItem("userAddress",truncateAddress(account));
        window.localStorage.setItem("userAddress2",account);
        document.getElementById("userAddress").textContent = `${truncateAddress(window.userAddress)}`;
        document.getElementById("userAddress2").textContent =`${window.userAddress2}`;

        console.log(document.getElementById("userAddress").textContent)
        console.log(document.getElementById("userAddress2").textContent)
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