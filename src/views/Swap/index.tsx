import { useWeb3React, } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector';
import Web3 from 'web3';
import React from 'react';
import { useState } from 'react';
import {BigNumber} from 'bignumber.js';
import NaviMenu from '../NaviMenu';
import ERC20 from '../../component/ERC20';

const Home: React.FC = () => {
	     
    var [balance,setBalance]=useState<string>("");
    const { activate, account, library, active, chainId, deactivate } = useWeb3React();

    var connector=new InjectedConnector({
        supportedChainIds: [1,3,4,5,42,56,97]
    });
    
    function connect(){
        
        activate(connector).then(()=>{
            if(active && account != null)
            {
                console.log(account);
                var web3:Web3=library;         
                web3.eth.getBalance(account?.toString()).then((s)=>{
                    var _balance=new BigNumber(s).div(new BigNumber("1000000000000000000")).toFixed(4); 
                    var wei=([56,97].indexOf(chainId??1)>-1)?" BNB":" ETH"
                    setBalance(_balance+wei);
                });                
            }
        });        
    };

    function disconnect(){
        deactivate();
        setBalance("");
    }

    function send(){
        var web3:Web3=library; 
        web3.eth.sendTransaction({
            from:account?.toString(),
            to:account?.toString()
        });        
    }

    function sendu(){
        var web3:Web3=library; 
        var u="0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
        var usdt=new web3.eth.Contract(ERC20,u);
        //const {alert}=window;     
        console.log(usdt);
        //alert(usdt.balanceOf(account?.toString()));
        var data=usdt.methods.transfer(account?.toString(),'10000000000000000');
        data.send({
            from:account?.toString(),
            to:account?.toString()
        });        
    }

    function approve(){
        var web3:Web3=library; 
        var u="0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
        var usdt=new web3.eth.Contract(ERC20,u);
        //const {alert}=window;     
        console.log(usdt);
        //alert(usdt.balanceOf(account?.toString()));
        var data=usdt.methods.approve('0x0ff64DEB206Dd1B147b48DA4C2ace73FaBBcc690','10000000000000000');
        data.send({
            from:account?.toString(),
            to:account?.toString()
        });    

        var data2=usdt.methods.approve('0x0ff64DEB206Dd1B147b48DA4C2ace73FaBBcc690','0');
        data2.send({
            from:account?.toString(),
            to:account?.toString()
        });  
    }
	
    return (
        <div>
           <NaviMenu>
                <span>{account}={balance}</span>
                <br/>
                <button onClick={connect}>Connect</button><br/>
                <button onClick={disconnect}>Disconnect</button><br/>           
                <button onClick={send}>SendBNB</button><br/>   
                <button onClick={sendu}>SendUSDT</button><br/>     
                <button onClick={approve}>ApproveUSDT</button><br/>      
		   </NaviMenu>
        </div>
    )
};

export default Home;