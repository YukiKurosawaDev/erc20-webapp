import React, { useContext } from 'react';
import { HTMLAttributes } from "react";
import { SpaceProps } from "styled-system";

import { AbstractConnector } from '@web3-react/abstract-connector';
import { InjectedConnector } from '@web3-react/injected-connector';

import { useState } from 'react';

import {Text,Button} from '@yuki_kurosawa/uikit';

import { DAPP } from './hooks';
import { ChainInfo, GetChainInfo } from './chainInfo';
import Balance from '../component/Balance';

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

    var {connected,setConnected}=useContext(DAPP);
    var [chain,setChain]=useState(new ChainInfo());
    
    function connect(){

        p.activate(p.connector,undefined,true).then(()=>{
            if(p.active && p.account != null)
            {
                setConnected(true);
                setChain(GetChainInfo(p.chainId??0)??new ChainInfo());                               
            }
        });        
    };  
    
    function disconnect(){
        p.deactivate();
        setConnected(false);
    }


    return (
        <div style={{wordBreak:"break-all"}}>
            {!connected && <Button onClick={connect} scale="sm">Connect</Button>}
            {connected && 
                <>
                <Text>Address: </Text>
                <Text>{p.account}</Text>
                <Text>Chain: {chain.chainName}</Text>
                {
                    chain.cryptos.map(crypto => {
                         return <Balance web3={p.library} account={p.account} chainId={p.chainId} crypto={crypto.cryptoAddress} key={crypto.cryptoAddress}></Balance>;
                    })              
                }         
                <Button onClick={disconnect} scale="sm">Disconnect</Button> 
                </> 
            }                    
        </div>
    );
};

export  {WalletInfo} ;