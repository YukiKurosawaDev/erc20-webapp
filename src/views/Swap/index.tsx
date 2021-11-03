import { useWeb3React } from '@web3-react/core'
import React, { useState } from 'react';
import NaviMenu from '../NaviMenu';

import {Card,CardBody,/*CardFooter,*/CardHeader} from '@yuki_kurosawa/uikit';
import {WalletInfo} from '../../context/wallet';
import {DAPP, injected, useEagerConnect,useInactiveListener} from '../../context/hooks';
import { DappSupport } from '../../context/dappsupport';

const Home: React.FC = () => {
    
    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = React.useState<any>();
    

    React.useEffect(() => {
        var connector=injected;

        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector]);

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect()

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector)

    /*

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
        var data=usdt.methods.transfer(account?.toString(),'1000000000000000000');
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
        var data=usdt.methods.approve('0x0ff64DEB206Dd1B147b48DA4C2ace73FaBBcc690','1000000000000000000');
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
    */
	
    const { activate, account, library, chainId, deactivate,active } = useWeb3React();
    const [connected,setConnected]=useState(false);
    //const account="0x0000000000000000000000000000000000000000";

    return (
        <div>
           <NaviMenu>
               <DAPP.Provider value={{connected,setConnected}}>
                    <Card style={{ marginLeft:"auto", marginRight:"auto", marginBottom:"10px", width: "95%" }}>
                        <CardHeader variant="blue">
                            Wallet Info
                        </CardHeader>
                        <CardBody style={{/*height:"200px"*/}}>  
                            <WalletInfo connector={injected} activate={activate} 
                            account={account} library={library} chainId={chainId} deactivate={deactivate} active={active}>
                            </WalletInfo>
                        </CardBody>
                    </Card>
                    <Card style={{ marginLeft:"auto", marginRight:"auto", marginBottom:"10px", width: "90%", display:"none" }}>
                        <CardHeader variant="blue">
                            Exchange
                        </CardHeader>
                        <CardBody style={{height:"100px"}}>
                            Under Construction
                        </CardBody>
                    </Card>
                    <Card style={{ marginLeft:"auto", marginRight:"auto", marginBottom:"10px", width: "95%" }}>
                        <CardHeader variant="blue">
                            Support This Project
                        </CardHeader>
                        <CardBody style={{height:"500px"}}>
                            {/* <button onClick={send}>SendBNB</button><br/>   
                            <button onClick={sendu}>SendUSDT</button><br/>     
                            <button onClick={approve}>ApproveUSDT</button><br/>   */}
                            <DappSupport connector={injected} account={account} chainId={chainId} library={library}>                                
                            </DappSupport>
                        </CardBody>
                    </Card>       
                </DAPP.Provider>    
		   </NaviMenu>
        </div>
    )
};

export default Home;