import Web3 from 'web3';
import React from 'react';
import { HTMLAttributes } from "react";
import { SpaceProps } from "styled-system";

import { InjectedConnector } from '@web3-react/injected-connector';

import {BigNumber} from 'bignumber.js';

import {Text,Button} from '@yuki_kurosawa/uikit';

import ERC20 from '../component/ERC20';
import { DAPP } from './hooks';

export interface DappSupportProps extends SpaceProps, HTMLAttributes<HTMLDivElement> {
    connector:InjectedConnector,
    library?: any,
    chainId?: number,
    account?: null | string
};

const DappSupport:React.FC<DappSupportProps> = (p) => {

    var {connected}=React.useContext(DAPP);
        
    return (
        <div>
            {
                connected && 
                <>
                <Text>{p.account}</Text>
                </>
            }                    
        </div>
    );
}

export {DappSupport}