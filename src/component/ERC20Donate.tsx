import Web3 from "web3";
import BigNumber from "bignumber.js";
import {Button, useModal} from "@yuki_kurosawa/uikit";
import { CHAIN_DEFAULT_ADDRESS, CryptoInfo, DONATE_ADDRESS } from "../context/chainInfo";
import { useEffect, useState } from "react";
import ERC20 from "./ERC20";
import { TxError, TxProcessing, TxSuccess } from "./Alerts";



const ERC20Donate:React.FC<{
    web3: Web3,
    account: string|null|undefined,
    crypto:CryptoInfo,
    chainId:number,
}> = (props) => {
    const [unit, setUnit] = useState<BigNumber>(new BigNumber("0"));
    const {crypto,web3,account} = props;

    const [showTx] = useModal(<TxSuccess title="Thank You!" chainId={props.chainId}></TxSuccess>, true);
    const [showProcess,hideProcess] = useModal(<TxProcessing title="" size={128}></TxProcessing>, true);
    const [showFail] = useModal(<TxError title="" chainId={props.chainId}></TxError>, true);

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
    },[crypto?.abi, crypto.cryptoAddress, web3]);

    const donate=(amount:BigNumber)=>{
        showProcess();
        if(crypto.cryptoAddress===CHAIN_DEFAULT_ADDRESS){
            web3.eth.estimateGas({
                from:account?.toString(),
                to:DONATE_ADDRESS
            }).then(q=>{
                console.log(q);
                web3.eth.sendTransaction({
                    from:account?.toString(),
                    to:DONATE_ADDRESS,
                    value:amount.toString(),
                    gas:q
                }).then((q:any)=>{
                    var tx=q.transactionHash;   
                    localStorage.setItem("hash",tx);
                    hideProcess();
                    (()=>{showTx();})();            
                }).catch((e)=>{
                    hideProcess();
                    if(e){
                        localStorage.setItem("message",e.message);
                        showFail();
                    }
                });   
            }).catch((e:any)=>{
                hideProcess();
                if(e){
                    localStorage.setItem("message",e.message);
                    showFail();
                }
            }); 
        }
        else
        {     
            showProcess();
            var erc20=new web3.eth.Contract(crypto?.abi??ERC20,crypto.cryptoAddress);
            var data=erc20.methods.transfer(DONATE_ADDRESS,amount.toString());
            data.estimateGas({
                from:account?.toString(),
                to:crypto.cryptoAddress
            }).then((q:any)=>{
                console.log(q);
                data.send({
                    from:account?.toString(),
                    to:crypto.cryptoAddress,
                    gas:q
                }).then((q:any)=>{
                    var tx=q.transactionHash;   
                    localStorage.setItem("hash",tx);
                    hideProcess();
                    (()=>{showTx();})();          
                }).catch((e:any)=>{
                    hideProcess();
                    if(e){
                        localStorage.setItem("message",e.message);
                        showFail();
                    }
                });  
            }).catch((e:any)=>{
                hideProcess();
                if(e){
                    localStorage.setItem("message",e.message);
                    showFail();
                }
            }); ;
            
        }

    
    }

    return (
        <>
            {
                crypto.donateOptions.map((option,index)=>{
                    return <Button key={index.toString()+crypto.cryptoSymbol} onClick={donate.bind(this,new BigNumber(option).multipliedBy(unit))} 
                    scale="sm" width="48%" marginBottom="10px" marginRight="5px">
                        {new BigNumber(option).toFixed(3)} {crypto.cryptoSymbol}
                    </Button>
                })
            }
        </>
    )
}

export default ERC20Donate;