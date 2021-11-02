import { Menu } from '@yuki_kurosawa/uikit'
import { languageList } from '../../config/localization/languages';
import menus from '../../context/menu'
import React from 'react';

const NaviMenu: React.FC<object> = ({children}) => {
 
    function noop(){

    }

    const divstyle : React.CSSProperties = {
        width:'95%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'2.5%',
    };

    

    return (
        <div>
            <Menu isDark={false} toggleTheme={noop} langs={languageList} setLang={noop} currentLang="EN" links={menus}>
                <div style={divstyle}>
                    {children}  
                </div>
		    </Menu>
        </div>
    )
};

export default NaviMenu;