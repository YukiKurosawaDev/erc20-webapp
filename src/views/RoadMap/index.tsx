import React from 'react';
import NaviMenu from '../NaviMenu'
import {Text} from '@yuki_kurosawa/uikit';

const Info: React.FC = () => {
	  
    return (
        <div>
           <NaviMenu> 
                <Text fontSize="25px" bold>Road Map</Text>
                <Text>&nbsp;</Text>
                <Text>
                    October, 2021 <br/>
                    |&nbsp;&nbsp; First Announce YukiNet <br/>
                    November, 2021 <br/>
                    |&nbsp;&nbsp; DApp "Donate" published <br/>
                    |&nbsp;&nbsp; WhitePaper 1.0 published <br/>
                    December, 2021 <br/>
                    |&nbsp;&nbsp; DApp "Donate" rebranded as "YukiNet Donate" <br/>
                    |&nbsp;&nbsp; DApp "YukiNet Donate" Upgraded to version 0.5 with cross-chain feature <br/>
                    |&nbsp;&nbsp; WhitePaper 1.1 published <br/>
                    February, 2022 <br/>
                    |&nbsp;&nbsp; DApp "YukiNet Donate" Upgraded to version 0.6 with cross-chain feature <br/>
                    |&nbsp;&nbsp; WhitePaper 1.2 published <br/>
                    |&nbsp;&nbsp; Update Chain Information <br/>
                    Q1, 2022 (Planned) <br/>
                    |&nbsp;&nbsp; Main Token Contract will be deployed to BNB Smart Chain at March 16, 2022 <br/>
                    |&nbsp;&nbsp; Private IDO will be launched at March 16,2022 <br/>
                    Q2, 2022 (Planned) <br/>
                    |&nbsp;&nbsp; Publish ICO will be launched at April 7, 2022<br/>
                    |&nbsp;&nbsp; Public Presale will be launched at April 25, 2022 <br/>
                    Q3, 2022 (Planned) <br/>
                    |&nbsp;&nbsp; DApp "YukiNet Swap" will be deployed to BSC TestNet at July 15, 2022 <br/>
                    |&nbsp;&nbsp; DApp "YukiNet Swap" will be deployed to BSC MainNet at Aug 15, 2022 <br/>                    
                    |&nbsp;&nbsp; DApp "YukiNet LaunchPad" will be deployed to BSC TestNet at Sep 1, 2022 <br/>
                    |&nbsp;&nbsp; DApp "YukiNet LaunchPad" will be deployed to BSC MainNet at Sep 30, 2022 <br/>
                    Q4, 2022 (Planned) <br/>
                    |&nbsp;&nbsp; Main Token Contract will be deployed to Ethereum Chain at Dec 31, 2022 <br/>
                    Q1, 2023 (Planned) <br/>
                    |&nbsp;&nbsp; All the DApps will be deployed to Ethereum Chain at Mar 1, 2023 <br/>
                </Text>
		   </NaviMenu>
        </div>
    )
};

export default Info;