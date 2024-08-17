import { FC } from 'react'
import styles from './responsiveMenu.module.css'

import MenuButton from './MenuButton'
import Button from '../../ui/button'
import { MdNavigateBefore } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

interface Imenu {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	setIsDown: React.Dispatch<React.SetStateAction<boolean>>
	open: boolean
	isDown: boolean
}

const MenuItem: FC<Imenu> = ({ setIsOpen, open, setIsDown, isDown }) => {
	return (
		<div className={styles.Menu}>
			<div className={styles.MenuActions}>
				<div className={styles.MenuAction__flex__end}>
					<div className={styles.SelectLanguage__item}>
						<div className={styles.selectContainer}>
							<select className={styles.customSelect}>
								<option value="ru">Ru</option>
								<option value="en">En</option>
								<option value="uz">Uz</option>
							</select>
							<MdNavigateBefore className={styles.selectIcon} />
						</div>
					</div>
					<div className={styles.BurgerMenuItem}>
					<MenuButton setIsOpen={setIsOpen} open={open} />

					</div>
				</div>
			</div>
			<div className={styles.NavLinks_mobile_items}>
				<div className={styles.HeaderLinks}>
					<div>
						<button
							className={`${styles.DropDownButton} ${isDown ? styles.active : ''}`}
							onClick={() => setIsDown(!isDown)}
						>
							Услуги
							<MdNavigateBefore
								className={`${styles.DropDownButtonIcon} ${isDown ? styles.DropDownButtonIcon : ''}`}
							/>
						</button>
						{isDown && <div className={styles.dropMenu}>
							<div className={styles.dropdownMenuItem}>
								<NavLink to='kupit'>Купить</NavLink>
							</div>
							<div className={styles.dropdownMenuItem}>
								<NavLink to='kupit'>Арендовать</NavLink>
							</div>
							<div className={styles.dropdownMenuItem}>
								<NavLink to='kupit'>Продать</NavLink>
							</div>
							<div className={styles.dropdownMenuItem}>
								<NavLink to='kupit'>Оценка недвижимости</NavLink>
							</div>
						</div>}
					</div>
					<div>
						<NavLink className={styles.someLinks} to='onas1'>
							О нас
						</NavLink>
					</div>
					<div>
						<NavLink className={styles.someLinks} to='onas2'>
							Блог
						</NavLink>
					</div>
					<div>
						<NavLink className={styles.someLinks} to='onas3'>
							Контакты
						</NavLink>
					</div>
				</div>
			</div>
			<div className={styles.ButtonQuestions}>
				<Button label='Задать вопрос' />
			</div>
		</div>
	)
}

export default MenuItem