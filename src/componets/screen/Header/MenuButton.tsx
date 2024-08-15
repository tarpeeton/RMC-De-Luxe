import { FC } from 'react'
import style from './header.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'

interface IMenuBUtton {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	open: boolean
}

const MenuButton: FC<IMenuBUtton> = ({ setIsOpen, open }) => {
	return (
		<div>
			<button className={style.BurgerMenu} onClick={() => setIsOpen(!open)}>
				<RxHamburgerMenu className={style.HamburgerMenu} />
			</button>
		</div>
	)
}

export default MenuButton