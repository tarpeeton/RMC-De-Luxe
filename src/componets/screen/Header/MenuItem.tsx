import {FC} from 'react';
import styles from './responsiveMenu.module.css'


import SelectLanguage from './language'
import MenuButton from './MenuButton'
import HeaderLinks from './HeaderLinks'
import Button from '../../ui/button'

interface Imenu {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setIsDown: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean
	isDown: boolean
}




const MenuItem: FC<Imenu> = ({setIsOpen , open , setIsDown , isDown}) => {
  return (
	<div className={styles.Menu}>
			<div className={styles.MenuActions}>
				<div className={styles.MenuAction__flex__end}>
					<SelectLanguage />
					<MenuButton setIsOpen={setIsOpen} open={open}/>
				</div>
			</div>
			<div style={{display: 'block'}}>
				<HeaderLinks  setIsDown={setIsDown} isDown={isDown}/>
			</div>
			<div>
				<Button  label='Задать вопрос'/>
			</div>
	</div>
  );
};

export default MenuItem;