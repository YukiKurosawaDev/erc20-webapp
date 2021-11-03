import Web3 from "web3";
import BigNumber from "bignumber.js";
import {Button} from "@yuki_kurosawa/uikit";
import { CHAIN_DEFAULT_ADDRESS, CryptoInfo, DONATE_ADDRESS } from "../context/chainInfo";
import { useEffect, useState } from "react";
import ERC20 from "./ERC20";

const ERC20Donate:React.FC<{
    web3: Web3,
    account: string|null|undefined,
    crypto:CryptoInfo
}> = (props) => {
    const [unit, setUnit] = useState<BigNumber>(new BigNumber("0"));
    const {crypto,web3,account} = props;

    useEffect(() => {
    if(crypto.cryptoAddress===CHAIN_DEFAULT_ADDRESS){
        var _unit=new BigNumber(10).pow(18);
        setUnit(_unit);
    }
    else{
        var erc20=new web3.eth.Contract(crypto?.abi??ERC20,crypto.cryptoAddress);
        erc20.methods.decimals().call().then((decimals:any)=>{
            var _unit=new BigNumber(10).pow(decimals);
            setUnit(_unit);
        });
    }
    },[crypto, web3.eth.Contract]);

    function donate(amount:BigNumber){

        if(crypto.cryptoAddress===CHAIN_DEFAULT_ADDRESS){
            web3.eth.sendTransaction({
                from:account?.toString(),
                to:DONATE_ADDRESS,
                value:amount.toString()
            });    
        }
        else
        {     
            var erc20=new web3.eth.Contract(crypto?.abi??ERC20,crypto.cryptoAddress);
            var data=erc20.methods.transfer(account?.toString(),amount);
            data.send({
                from:account?.toString(),
                to:DONATE_ADDRESS
            }); 
        }

    
    }

    return (
        <>
            {
                crypto.donateOptions.map((option,index)=>{
                    return <Button key={index.toString()+crypto.cryptoSymbol} onClick={()=>{donate(new BigNumber(option).multipliedBy(unit))}} 
                    scale="sm" width="48%" marginBottom="10px" marginRight="5px">
                        {new BigNumber(option).toFixed(3)} {crypto.cryptoSymbol}
                    </Button>
                })
            }
        </>
    )
}

export default ERC20Donate;