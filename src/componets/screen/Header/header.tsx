import { FC, useState } from 'react'
import style from './header.module.css'
import DropDownMenu from './Dropdown'


import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci"
import { CiHeart } from "react-icons/ci"
import { FaPhoneAlt } from "react-icons/fa"
import { MdNavigateBefore } from "react-icons/md"




const Header: FC = () => {

	const [isDown, setIsDown] = useState(false)


	return (
		<div className={style.Header}>
			<div className={style.HeaderContent}>
				<div className={style.Logo}>
					<div>
						<img src='https://ucarecdn.com/a6828876-c0b4-40b8-a8e5-61baf2951f3d/-/preview/26x61/' alt='Logo' />
					</div>
					<div className={style.LogoText}>
						<p className={style.LogoHeader}>Rmc De Luxe</p>
						<p className={style.LogoHeaderDescription}>real estate</p>
					</div>
				</div>
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
				<div className={style.HeaderLinksButtons}>
					<div className={style.HeaderLinkbutton}>
						<div>
							<button className={style.ButtonIcon}>

								<CiSearch className={style.customIcon} />
							</button>
						</div>
						<div>
							<button className={style.ButtonIcon}>
								<CiHeart className={style.customIcon} />
							</button>
						</div>
						<div>
							<button className={style.PhoneCustomLink}>
								<FaPhoneAlt className={style.CustomIconPhone} />
							</button>
						</div>
					</div>

					<div style={{ display: 'flex', marginLeft: '12px' }}>
						<div className={style.selectContainer}>
							<select className={style.customSelect}>
								<option value="ru">Ru</option>
								<option value="en">En</option>
								<option value="uz">Uz</option>
							</select>
							<MdNavigateBefore className={style.selectIcon} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header