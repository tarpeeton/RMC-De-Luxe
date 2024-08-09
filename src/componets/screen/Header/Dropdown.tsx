import {FC} from 'react';
import style from './header.module.css'
import { NavLink } from 'react-router-dom';

const DropDownMenu: FC = () => {
	return (
		<div className={style.dropMenu}>
			<div className={style.dropdownMenuItem}>
				<NavLink to='kupit'>Купить</NavLink>
			</div>
			<div className={style.dropdownMenuItem}>
				<NavLink to='kupit'>Арендовать</NavLink>
			</div>
			<div className={style.dropdownMenuItem}>
				<NavLink to='kupit'>Продать</NavLink>
			</div>
			<div className={style.dropdownMenuItem}>
				<NavLink to='kupit'>Оценка недвижимости</NavLink>
			</div>
	
		</div>
	);
};

export default DropDownMenu;