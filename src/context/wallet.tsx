import Web3 from 'web3';
import React, { useContext } from 'react';
import { HTMLAttributes } from "react";
import { SpaceProps } from "styled-system";

import { AbstractConnector } from '@web3-react/abstract-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

import { useState } from 'react';
import {BigNumber} from 'bignumber.js';

import {Text,Button} from '@yuki_kurosawa/uikit';

import ERC20 from '../component/ERC20';
import { DAPP } from './hooks';

export interface WalletInfoProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
    connector:InjectedConnector,
    library?: any,
    chainId?: number,
    account?: null | string,
    activate: (connector: AbstractConnector, onError?: (error: Error) => void, throwErrors?: boolean) => Promise<void>,
    deactivate: () => void,
    active:boolean
};



const WalletInfo:React.FC<WalletInfoProps> = (p) => {

    var [balance,setBalance]=useState<string>("");
    var {connected,setConnected}=useContext(DAPP);
    
    function connect(){

        p.activate(p.connector,undefined,true).then(()=>{
            if(p.active && p.account != null)
            {
                setConnected(true);
                var web3:Web3=p.library;         
                web3.eth.getBalance(p.account?.toString()).then((s)=>{
                    var _balance=new BigNumber(s).div(new BigNumber("1000000000000000000")).toFixed(4); 
                    var wei=([56,97].indexOf(p.chainId??1)>-1)?" BNB":" ETH"
                    setBalance(_balance+wei);
                });                
            }
        });        
    };  
    
    function disconnect(){
        p.deactivate();
        setBalance("");
        setConnected(false);
    }


    return (
        <div>
            {!connected && <Button onClick={connect}>Connect</Button>}
            {connected && 
                <>
                <Text>{p.account}</Text><br/>
                <Text>{balance}</Text>              
                <Button onClick={disconnect}>Disconnect</Button> 
                </> 
            }                    
        </div>
    );
};

export  {WalletInfo} ;