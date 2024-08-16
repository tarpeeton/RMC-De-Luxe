import { FC, useState } from 'react'
import style from './header.module.css'

import { CiSearch } from "react-icons/ci"
import { CiHeart } from "react-icons/ci"
import { FaPhoneAlt } from "react-icons/fa"
import SelectLanguage from './language'
import HeaderLinks from './HeaderLinks'
import MenuButton from './MenuButton'
import MenuItem from './MenuItem'


const Header: FC = () => {
	const [isDown, setIsDown] = useState(false)
	const [open , setIsOpen] = useState(false)
	console.log(open)
	
	return (
		<div className={style.Header}>
			<div className={style.HeaderContent}>
				<div className={style.Logo}>
					<div>
						<img className={style.logoPicture} src='https://ucarecdn.com/a6828876-c0b4-40b8-a8e5-61baf2951f3d/-/preview/26x61/' alt='Logo' />
					</div>
					<div className={style.LogoText}>
						<p className={style.LogoHeader}>Rmc De Luxe</p>
						<p className={style.LogoHeaderDescription}>real estate</p>
					</div>
				</div>
				<HeaderLinks setIsDown={setIsDown} isDown={isDown}  />
				{
					open && <MenuItem setIsDown={setIsDown} open={open} setIsOpen={setIsOpen} isDown={isDown}/>
				}
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
						<MenuButton setIsOpen={setIsOpen} open={open}/>
					</div>
					<SelectLanguage/>
				</div>
			</div>
		</div>
	)
}

export default Header