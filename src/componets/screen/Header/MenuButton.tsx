import { FC } from 'react'
import style from './header.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from "react-icons/io";


interface IMenuBUtton {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	open: boolean
}

const MenuButton: FC<IMenuBUtton> = ({ setIsOpen, open }) => {
	return (
		<div >
			<button className={style.BurgerMenu} onClick={() => setIsOpen(!open)}>
				{open ? <IoMdClose className={style.HamburgerMenu} />: <RxHamburgerMenu className={style.HamburgerMenu} />}
				
			</button>
		</div>
	)
}

export default MenuButton