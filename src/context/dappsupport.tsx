
import React from 'react';
import { HTMLAttributes } from "react";
import { SpaceProps } from "styled-system";

import { InjectedConnector } from '@web3-react/injected-connector';

import { DAPP } from './hooks';
import { GetChainInfo } from './chainInfo';
import ERC20Donate from '../component/ERC20Donate';

export interface DappSupportProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
    connector:InjectedConnector,
    library?: any,
    chainId?: number,
    account?: null | string
};

const DappSupport:React.FC<DappSupportProps> = (p) => {

    const {library,chainId,account} = p;
    var {connected}=React.useContext(DAPP);
    const chain=GetChainInfo(chainId??0);
        
    return (
        <div style={{padding:"3px"}}>
            {
                connected && 
                <>
                {
                    chain?.cryptos.map((crypto,index)=>{
                        return <div key={index}>
                            <ERC20Donate key={crypto.cryptoAddress+index.toString()} crypto={crypto} web3={library} account={account} chainId={chainId??0}></ERC20Donate><br/>
                            </div>
                    })
                }
                </>
            }                    
        </div>
    );
}

export {DappSupport}