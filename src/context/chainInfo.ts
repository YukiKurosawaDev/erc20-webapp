import {AbiItem} from 'web3-utils';
import { BEP20BUSD, BEP20USDT, BEP20WBNB } from '../component/BEP20';

class CryptoInfo{
    cryptoName: string="";
    cryptoAddress:string="";
    cryptoSymbol:string="";
    abi:AbiItem[]|undefined|null=null;
    donateOptions:string[]=[];
}

class ChainInfo{
    chainId: number=0;
    chainName: string="";
    chainExplorerUrl: string="";
    chainExplorerName:string="";
    cryptos: Array<CryptoInfo>=[];
}

const CHAIN_DEFAULT_ADDRESS:string="0x0000000000000000000000000000000000000000";

const ETH_MainNet: ChainInfo = {
    chainId : 1,
    chainName: "ETH MainNet",
    chainExplorerUrl: "https://etherscan.io/",
    chainExplorerName: "Etherscan",
    cryptos: [
        {
            cryptoName: "ETH",
            cryptoAddress: CHAIN_DEFAULT_ADDRESS,
            cryptoSymbol: "ETH",
            abi: undefined,
            donateOptions:["0.001","0.01","0.1","1"]
        },
        {
            cryptoName: "BUSD",
            cryptoAddress: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
            cryptoSymbol: "BUSD",
            abi: undefined,
            donateOptions:["4","40","400","4000"]
        },
        {
            cryptoName: "USDT",
            cryptoAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            cryptoSymbol: "USDT",
            abi: undefined,
            donateOptions:["4","40","400","4000"]
        }
    ]
}

const ETH_Rinkeby: ChainInfo = {
    chainId : 4,
    chainName: "ETH Rinkeby",
    chainExplorerUrl: "https://rinkeby.etherscan.io/",
    chainExplorerName: "Etherscan",
    cryptos: [
        {
            cryptoName: "ETH",
            cryptoAddress: CHAIN_DEFAULT_ADDRESS,
            cryptoSymbol: "ETH",
            abi: undefined,
            donateOptions:["0.001","0.01","0.1","1"]
        }
    ]
}

const BSC_MainNet: ChainInfo = {
    chainId : 56,
    chainName: "BSC MainNet",
    chainExplorerUrl: "https://bscscan.com/",
    chainExplorerName: "BscScan",
    cryptos: [
        {
            cryptoName: "BNB",
            cryptoAddress: CHAIN_DEFAULT_ADDRESS,
            cryptoSymbol: "BNB",
            abi: undefined,
            donateOptions:["0.001","0.01","0.1","1"]
        },
        {
            cryptoName: "WBNB",
            cryptoAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            cryptoSymbol: "WBNB",
            abi: BEP20WBNB,
            donateOptions:["0.001","0.01","0.1","1"]
            
        },
        {
            cryptoName: "BUSD",
            cryptoAddress: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            cryptoSymbol: "BUSD",
            abi: BEP20BUSD,
            donateOptions:["0.4","4","40","400"]
        },
        {
            cryptoName: "USDT",
            cryptoAddress: "0x55d398326f99059fF775485246999027B3197955",
            cryptoSymbol: "USDT",
            abi: BEP20USDT,
            donateOptions:["0.4","4","40","400"]
        }
    ]  
}

const BSC_TestNet: ChainInfo = {
    chainId : 97,
    chainName: "BSC TestNet",
    chainExplorerUrl: "https://testnet.bscscan.com/",
    chainExplorerName: "BscScan",
    cryptos: [
        {
            cryptoName: "BNB",
            cryptoAddress: CHAIN_DEFAULT_ADDRESS,
            cryptoSymbol: "BNB",
            abi: undefined,
            donateOptions:["0.001","0.01","0.1","1"]
        },
        {
            cryptoName: "USDT",
            cryptoAddress: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
            cryptoSymbol: "USDT",
            abi: BEP20USDT,
            donateOptions:["0.4","4","40","400"]
        }
    ]
}

const Chains: Array<ChainInfo> = [
    ETH_MainNet,
    ETH_Rinkeby,
    BSC_MainNet,
    BSC_TestNet
];

function GetChainInfo(chainId: number): ChainInfo|undefined{
    return Chains.find(c => c.chainId === chainId);
}

const DONATE_ADDRESS="0x000000007FD703013D6B3Ff60A2F274006B5e237";

export {CryptoInfo,ChainInfo,ETH_MainNet,ETH_Rinkeby,BSC_MainNet,BSC_TestNet,Chains,GetChainInfo,CHAIN_DEFAULT_ADDRESS,DONATE_ADDRESS};