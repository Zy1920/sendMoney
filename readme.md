### 使用nodejs和web3开发以太坊水龙头



```
const Web3=require("web3");
const HDWalletProvider=require("truffle-hdwallet-provider");
const mnemonic = "gas north excuse ancient addict shaft marble awful panther edge bundle hill";
const provider=new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/b5193966085f4ae0a469a7a77215b0ba");
const web3=new Web3(provider);
const express=require("express");
const app=express();


app.get("/send/:address",async (req,res)=>{
    console.log("开始转账了！~~~")
    const address=req.params.address;
    const accounts=await new web3.eth.getAccounts();
    try {
        const trans=await new web3.eth.sendTransaction({
            from: accounts[0],
            to: address,
            value: '10000000000000000'
        })
        console.log(trans);
        res.send("转账成功，0.01以太币请接收！~~~")
    } catch (e) {
        res.send("转账失败，请重新检查转账账户是否正确！~~~")
    }

})

const server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
```