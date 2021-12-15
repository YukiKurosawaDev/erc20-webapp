import React from 'react';
import NaviMenu from '../NaviMenu'
import {Text,Link} from '@yuki_kurosawa/uikit';

const Info: React.FC = () => {
	  
    return (
        <div>
           <NaviMenu> 
                <Link href="/WhitePaper.pdf">White Paper (Full Version)</Link><br/>
                <Text fontSize="25px" bold>Token Information</Text>
                <Text>&nbsp;</Text>
                <Text>
                    Token Name: Yuki Network Token B <br/>
                    Token Symbol: YUKI <br/>
                    Decimals: 3 <br/>
                    Chain: Binance Smart Chain <br/>
                    Initial Supply: 100,000 <br/>
                    Maximum Supply: 1,000,000 <br/>
                    ICO Price: 0.001 BNB Each <br/>
                    List Price: 0.001 BNB Each <br/>
                    Contract Address: &lt;Wait for publish&gt;
                </Text> 
                <hr/>   
                <Text>
                    Token Name: Yuki Network Token E <br/>
                    Token Symbol: YUKI <br/>
                    Decimals: 3 <br/>
                    Chain: Ethereum Chain <br/>
                    Initial Supply: 100,000 <br/>
                    Maximum Supply: 1,000,000 <br/>
                    ICO Price: 0.001 ETH Each <br/>
                    List Price: 0.001 ETH Each <br/>
                    Contract Address: &lt;Wait for publish&gt;
                </Text>  
                <hr/>
                <Text fontSize="25px" bold>How to make a cross-chain transfer</Text>
                <Text>&nbsp;</Text>
                <Text>
                    1. Just buy some ETH with YUKI, use cross-chain bridge to transfer your ETH, and buy YUKI with ETH. <br/>
                    2. We will publish YukiNet Bridge to simplify the process later. <br/>
                </Text>
		   </NaviMenu>
        </div>
    )
};

export default Info;