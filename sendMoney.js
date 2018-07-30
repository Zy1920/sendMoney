const Web3=require("web3");
const HDWalletProvider=require("truffle-hdwallet-provider");
const mnemonic = "gas north excuse ancient addict shaft marble awful panther edge bundle hill";
const provider=new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/b5193966085f4ae0a469a7a77215b0ba");
const web3=new Web3(provider);

sendMoney=async()=>{
    const accounts=await new web3.eth.getAccounts();
    const balance=await new web3.eth.getBalance(accounts[0]);
    console.log(balance);

    const str ="郭大大是个小可爱！~~~";
    let data = Buffer.from(str).toString('hex');
    data = '0x'+data;

    await web3.eth.sendTransaction({
        from:accounts[0],
        to:"0x405239e8881E2AeC234716F32E71d718D5072c6E",
        value: '1000000000000000000',
        data:data,
    })

    const balance1=await new web3.eth.getBalance(accounts[0]);
    console.log(balance1)
}

sendMoney()
