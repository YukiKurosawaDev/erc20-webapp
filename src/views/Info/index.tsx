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
                    Token Name: Yuki Network Token <br/>
                    Token Symbol: YUKI <br/>
                    Decimals: 3 <br/>
                    Chain: Binance Smart Chain <br/>
                    Initial Supply: 100,000 <br/>
                    Maximum Supply: 1,000,000 <br/>
                    Contract Address: &lt;Wait for publish&gt;
                </Text> 
                <hr/>   
                <Text>
                    Token Name: Yuki Network Token <br/>
                    Token Symbol: YUKI <br/>
                    Decimals: 3 <br/>
                    Chain: Ethereum Chain <br/>
                    Initial Supply: 100,000 <br/>
                    Maximum Supply: 1,000,000 <br/>
                    Contract Address: &lt;Wait for publish&gt;
                </Text>  
                <hr/>
                <Text fontSize="25px" bold>IDO and ICO Policy</Text>
                <Text>&nbsp;</Text>
                <Text>
                Private IDO <br/>
                Entry Phrase: Organization and Community only <br/>
                Price: 0.001 BNB per YUKI <br/>
                Minimum Unit: 1 YUKI <br/>
                Minimum Entry: 1 YUKI per address <br/>
                Maximum Entry: 1000 YUKI per address <br/>
                Entry Fee: 1% or 0.01 BNB per entry (choose the higher one) <br/>
                BNB-Back Fee: 10% per entry <br/>
                Lock Period: 10 Months after liquid pool initialized <br/>
                Release Period: 10% for each month <br/>
                <br/>
                Public ICO <br/>
                Entry Phrase: Everyone <br/>
                Price: 0.001 BNB per YUKI <br/>
                Minimum Unit: 10 YUKI <br/>
                Minimum Entry: 1 YUKI per address <br/>
                Maximum Entry: 5000 YUKI per address <br/>
                Entry Fee: 1.5% or 0.015 BNB per entry (choose the higher one) <br/>
                BNB-Back Fee: 20% per entry <br/>
                Lock Period: 5 Months after liquid pool initialized <br/>
                Release Period: 20% for each month <br/>
                <br/>
                Public Presale <br/>
                Entry Phrase: Everyone <br/>
                Price: 0.001 BNB per YUKI <br/>
                Minimum Unit: 1 YUKI <br/>
                Minimum Entry: 1 YUKI per address <br/>
                Maximum Entry: 1000 YUKI per address <br/>
                Entry Fee: None <br/>
                BNB-Back Fee: 20% per entry <br/> 
                (Presale Platform charges when you click the “Emergency Withdraw” Button) <br/>
                Lock Period: 10 seconds after liquid pool initialized <br/>
                Release Period: 100% when liquid pool initialized <br/>
                (Click “Claim Token” to get all your tokens from presale platform) <br/>
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