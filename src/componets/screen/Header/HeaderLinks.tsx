import { FC } from 'react'
import style from './header.module.css'
import { MdNavigateBefore } from 'react-icons/md'
import DropDownMenu from './Dropdown'
import { NavLink } from 'react-router-dom'

interface ILinks {
	setIsDown: React.Dispatch<React.SetStateAction<boolean>>
	isDown: boolean
}


const HeaderLinks: FC<ILinks> = ({ setIsDown, isDown }) => {

	return (
		<div className={style.HeaderLinks}>
			<div>
				<button
					className={`${style.DropDownButton} ${isDown ? style.active : ''}`}
					onClick={() => setIsDown(!isDown)}
				>
					Услуги
					<MdNavigateBefore
						className={`${style.DropDownButtonIcon} ${isDown ? style.DropDownButtonIcon : ''}`}
					/>
				</button>
				{isDown && <DropDownMenu />}
			</div>
			<div>
				<NavLink className={style.someLinks} to='onas1'>
					О нас
				</NavLink>
			</div>
			<div>
				<NavLink className={style.someLinks} to='onas2'>
					Блог
				</NavLink>
			</div>
			<div>
				<NavLink className={style.someLinks} to='onas3'>
					Контакты
				</NavLink>
			</div>
		</div>
	)
}

export default HeaderLinks