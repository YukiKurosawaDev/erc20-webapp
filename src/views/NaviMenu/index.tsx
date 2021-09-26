import { Menu } from '@yuki_kurosawa/uikit'
import { languageList } from '../../config/localization/languages';
import menus from '../../context/menu'
import React from 'react';

const NaviMenu: React.FC<object> = ({children}) => {
 
    function noop(){

    }

    return (
        <div>
           <Menu isDark={false} toggleTheme={noop} langs={languageList} setLang={noop} currentLang="EN" links={menus}>
                {children}  
		   </Menu>
        </div>
    )
};

export default NaviMenu;