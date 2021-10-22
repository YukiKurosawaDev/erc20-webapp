import React from 'react';
import NaviMenu from '../NaviMenu'
import {Text} from '@yuki_kurosawa/uikit';

const Home: React.FC = () => {
	    
    return (
        <div>
            <NaviMenu> 
            <Text fontSize="30px" bold>Welcome to Yuki Network!</Text>
                <Text>&nbsp;</Text>
                <Text fontSize="20px">
                    Yuki Network is a cross-chain decentralized network for YukiNet Ecosystem.<br/>
                    YukiNet has its own exchange which will be published later.<br/>
                </Text>  
		    </NaviMenu>
        </div>
    )
};

export default Home;