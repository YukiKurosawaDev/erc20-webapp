import React from 'react';
import NaviMenu from '../NaviMenu'
import {Link, Text} from '@yuki_kurosawa/uikit';

const Home: React.FC = () => {
	  
    return (
        <div>
           <NaviMenu>  
               <Text fontSize="30px" bold>Contact Us</Text>
                <Text fontSize="20px">
                    If you have any questions or ideas for this project, send them to us with the methods below. <br/>
                    <br/>
                    <br/>
                    <Link href="https://t.me/Yuki_Network_Com">Telegram Community (International)</Link> 
                    <Link href="https://t.me/Yuki_Kurosawa">Telegram Community Admin (International)</Link> 
                    <Link href="https://twitter.com/YukiKurosawaDev">Twitter Direct Message (@YukiKurosawaDev)</Link>
                    <br/>
                    <br/>
                    <Link href="mailto:lovelive.kotori.jp@gmail.com">lovelive.kotori.jp@gmail.com (Japanese Only, Japan [JPN])</Link>
                    <Link href="mailto:yuki.kurosawa.dev.hk@gmail.com">yuki.kurosawa.dev.hk@gmail.com (Traditional Chinese and English Only, Hong Kong [HKSAR,PRC])</Link>
                    <Link href="mailto:yuki.kurosawa.dev.tw@gmail.com">yuki.kurosawa.dev.tw@gmail.com (Traditional Chinese Only, Taiwan [ROC])</Link>
                </Text>       
		   </NaviMenu>
        </div>
    )
};

export default Home;