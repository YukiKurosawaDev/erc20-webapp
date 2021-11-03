import Web3 from "web3";
import BigNumber from "bignumber.js";
import {Text} from "@yuki_kurosawa/uikit";
import { CHAIN_DEFAULT_ADDRESS, GetChainInfo } from "../context/chainInfo";
import { useState } from "react";
import ERC20 from "./ERC20";

const Balance:React.FC<{
    web3: Web3,
    account: string|null|undefined,
    chainId: number|undefined,
    crypto:string
}> = (props) => {
    const [balance, setBalance] = useState<string>("0");
    const { web3, account, chainId, crypto } = props;
    const chain=GetChainInfo(chainId??0);

    var currency=chain?.cryptos.find(c=>c.cryptoAddress===crypto);

    if(crypto===CHAIN_DEFAULT_ADDRESS){
        web3.eth.getBalance(account??"").then((s)=>{
            var unit=new BigNumber(10).pow(18);
            var _balance=new BigNumber(s).div(unit).toFixed(4); 
            setBalance(_balance);
        }); 
    }
    else
    {
        var erc20=new web3.eth.Contract(currency?.abi??ERC20,crypto);
        erc20.methods.decimals().call().then((decimals:any)=>{
            var unit=new BigNumber(10).pow(decimals);
            erc20.methods.balanceOf(account?.toString()).call().then((s: any)=>{
                var _balance=new BigNumber(s).div(unit).toFixed(4);; 
                setBalance(_balance);
            });
        });
    }

    return (
        <Text>{currency?.cryptoName}: {balance} {currency?.cryptoSymbol}</Text>
    )
}

export default Balance;