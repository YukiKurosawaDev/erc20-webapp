import { Menu } from '@yuki_kurosawa/uikit'
import { languageList } from '../../config/localization/languages';
import menus from '../../context/menu'

const Home: React.FC = () => {
	
	function noop(){
	}
	
    return (
        <div>
           <Menu isDark={false} toggleTheme={noop} langs={languageList} setLang={noop} currentLang="EN" links={menus}>
		   </Menu>
        </div>
    )
};

export default Home;