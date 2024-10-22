import { FC } from 'react'
import styles from './footer.module.css'
import { NavLink } from 'react-router-dom'




const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.logo}>
				<div className={styles.logo__item}>
					<img src='https://ucarecdn.com/a6828876-c0b4-40b8-a8e5-61baf2951f3d/-/preview/26x61/' alt='De Luxe' />
					<div>
						<p className={styles.compony_name}>Rmc De Luxe</p>
						<span className={styles.compony_estet}>real estate</span>
					</div>
				</div>
				<div className={styles.social__links}>
					<NavLink className={styles.icon__link} to='uslugi'>
						<svg className={styles.icon__width} width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19.3333 0.625C23.2223 0.625 26.375 3.77767 26.375 7.66667V19.3333C26.375 23.2223 23.2223 26.375 19.3333 26.375H7.66667C3.77767 26.375 0.625 23.2223 0.625 19.3333L0.625 7.66667C0.625 3.77767 3.77767 0.625 7.66667 0.625L19.3333 0.625ZM19.3333 3.04167L7.66667 3.04167C5.11236 3.04167 3.04167 5.11236 3.04167 7.66667L3.04167 19.3333C3.04167 21.8877 5.11236 23.9583 7.66667 23.9583H19.3333C21.8877 23.9583 23.9583 21.8877 23.9583 19.3333V7.66667C23.9583 5.11236 21.8877 3.04167 19.3333 3.04167ZM13.5 7.91667C16.5835 7.91667 19.0833 10.4164 19.0833 13.5C19.0833 16.5835 16.5835 19.0833 13.5 19.0833C10.4164 19.0833 7.91667 16.5835 7.91667 13.5C7.91667 10.4164 10.4164 7.91667 13.5 7.91667ZM13.5 10.3333C11.7511 10.3333 10.3333 11.7511 10.3333 13.5C10.3333 15.2489 11.7511 16.6667 13.5 16.6667C15.2489 16.6667 16.6667 15.2489 16.6667 13.5C16.6667 11.7511 15.2489 10.3333 13.5 10.3333ZM20.0625 5.72917C20.7299 5.72917 21.2708 6.27016 21.2708 6.9375C21.2708 7.60484 20.7299 8.14583 20.0625 8.14583C19.3951 8.14583 18.8542 7.60484 18.8542 6.9375C18.8542 6.27016 19.3951 5.72917 20.0625 5.72917Z" fill="#333333" stroke="#F7F7F7" stroke-width="0.5" />
						</svg>

					</NavLink>
					<NavLink className={styles.icon__link} to='uslugi'>
						<svg className={styles.icon__width} width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2.00108 11.1918L2.00109 11.1918L26.939 0.69158C28.3442 0.099906 29.8507 1.28815 29.6025 2.79254L26.2937 22.8544C26.0016 24.6254 24.0594 25.6345 22.4415 24.7557C20.9588 23.9504 18.7623 22.7126 16.785 21.4206C15.7974 20.7752 14.8451 20.1039 14.0572 19.4559L14.0572 19.4559C13.5417 19.032 13.0423 18.5752 12.6491 18.1048L12.5836 18.0265L12.482 18.0164C11.023 17.8717 9.18743 17.3579 7.48585 16.7969C5.41682 16.1147 3.35186 15.2947 2.00105 14.7347C0.389752 14.0668 0.453767 11.8432 2.00108 11.1918ZM4.60388 12.718L4.03706 12.9566L4.60964 13.1811C5.70741 13.6115 6.97782 14.0847 8.24254 14.5018L8.24256 14.5018C9.8825 15.0424 11.3918 15.4461 12.4857 15.586L12.6074 15.6016L12.6942 15.5148L19.0208 9.18824L18.844 9.01147L19.0208 9.18824C19.4927 8.71635 20.2578 8.71635 20.7296 9.18824L20.9064 9.01147L20.7296 9.18824C21.2015 9.66009 21.2015 10.4252 20.7296 10.8971L14.953 16.6738L14.7717 16.8551L14.9575 17.0318C15.1341 17.1996 15.3447 17.3859 15.5921 17.5894L15.5921 17.5894C16.2854 18.1595 17.1574 18.777 18.1069 19.3976L18.1069 19.3976C19.9843 20.6242 22.0901 21.8138 23.5486 22.6069L23.8575 22.7749L23.9147 22.428L27.003 3.70253L27.0767 3.2557L26.6593 3.43144L4.60388 12.718Z" fill="#333333" stroke="#F7F7F7" stroke-width="0.5" />
						</svg>

					</NavLink>
					<NavLink className={styles.icon__link} to='uslugi'>
						<svg className={styles.icon__width} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.5859 11.7087L14.5859 11.7087C14.5212 11.6141 14.4555 11.517 14.389 11.4187L14.364 11.3817L14.3627 11.3799L13.8884 10.692C13.3918 9.99517 12.8268 9.3024 12.1246 8.79019C11.8992 8.6258 11.6122 8.60584 11.373 8.70836C10.0973 9.2551 9.02645 10.6348 9.07786 12.0319C9.07903 12.0638 9.08059 12.0977 9.08261 12.1336L9.10197 12.3816L9.13723 12.6739L9.19334 13.0123C9.43995 14.3157 10.1831 16.4281 12.3797 18.6248C14.5765 20.8215 16.6888 21.5646 17.9922 21.8111L18.3331 21.8677C18.3836 21.8748 18.4324 21.8812 18.4795 21.8869L18.7517 21.9138L18.9751 21.9267C20.3697 21.9767 21.7474 20.912 22.2931 19.6386C22.2931 19.6386 22.2931 19.6386 22.2931 19.6386L14.5859 11.7087ZM14.5859 11.7087C14.7865 12.002 14.7649 12.3908 14.5418 12.6581L14.4516 12.7488L13.12 13.7378L13.1199 13.7378M14.5859 11.7087L13.1199 13.7378M13.1199 13.7378C12.892 13.9071 12.8085 14.2224 12.952 14.4839L12.9521 14.484M13.1199 13.7378L12.9521 14.484M12.9521 14.484C13.2638 15.0511 13.8198 15.898 14.4631 16.5413C15.1067 17.185 15.992 17.7756 16.5946 18.1202C16.8222 18.2505 17.0954 18.207 17.2755 18.0426L17.2871 18.032M12.9521 14.484L17.2871 18.032M17.2871 18.032L17.2973 18.02M17.2871 18.032L17.2973 18.02M17.2973 18.02L17.3533 17.9543L17.3634 17.9425M17.2973 18.02L17.3634 17.9425M17.3634 17.9425L17.3719 17.9295M17.3634 17.9425L17.3719 17.9295M17.3719 17.9295L18.2434 16.602M17.3719 17.9295L18.2434 16.602M18.2434 16.602C18.499 16.2683 18.9714 16.1959 19.3158 16.434C19.3159 16.4341 19.316 16.4341 19.3161 16.4342L20.1048 16.984C20.1052 16.9842 20.1055 16.9845 20.1059 16.9848L18.2434 16.602ZM8.0898 27.7725L7.99682 27.7184L7.89367 27.7488L3.47206 29.0493C2.5906 29.3086 1.76678 28.5433 1.92095 27.6706L1.95564 27.5247L3.25425 23.1094L3.28533 23.0038L3.22833 22.9095C1.92052 20.747 1.16797 18.2106 1.16797 15.5018C1.16797 7.58571 7.58522 1.16846 15.5013 1.16846C23.4173 1.16846 29.8346 7.58571 29.8346 15.5018C29.8346 23.4178 23.4173 29.8351 15.5013 29.8351C12.9738 29.8351 10.5965 29.18 8.53296 28.0299L8.0898 27.7725ZM3.58464 15.5018C3.58464 17.8503 4.26273 20.0367 5.43336 21.8801C5.68938 22.2834 5.79829 22.7775 5.71369 23.2667L5.66122 23.4904L5.0191 25.6736L4.88978 26.1133L5.32948 25.984L7.51932 25.34C8.07742 25.1758 8.66003 25.2758 9.12296 25.5697C10.9665 26.7404 13.1528 27.4185 15.5013 27.4185C22.0827 27.4185 27.418 22.0832 27.418 15.5018C27.418 8.9204 22.0827 3.58512 15.5013 3.58512C8.91991 3.58512 3.58464 8.9204 3.58464 15.5018Z" fill="#333333" stroke="#F7F7F7" stroke-width="0.5" />
						</svg>

					</NavLink>
					<NavLink className={styles.icon__link} to='uslugi'>
						<svg className={styles.icon__width} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.7096 27.0782V27.3613L16.9906 27.3263C22.8692 26.5932 27.418 21.5789 27.418 15.5018C27.418 8.9204 22.0827 3.58512 15.5013 3.58512C8.91991 3.58512 3.58464 8.9204 3.58464 15.5018C3.58464 21.5789 8.13342 26.5932 14.012 27.3263L14.293 27.3613V27.0782V18.4185V18.1685H14.043H11.1263C10.459 18.1685 9.91797 17.6275 9.91797 16.9601C9.91797 16.2928 10.459 15.7518 11.1263 15.7518H14.043H14.293V15.5018V12.5851C14.293 10.307 16.1397 8.46012 18.418 8.46012H19.1471C19.8145 8.46012 20.3555 9.00112 20.3555 9.66846C20.3555 10.3358 19.8145 10.8768 19.1471 10.8768H18.418C17.4745 10.8768 16.7096 11.6416 16.7096 12.5851V15.5018V15.7518L16.9596 15.7518H19.8763C20.5437 15.7518 21.0846 16.2928 21.0846 16.9601C21.0846 17.6275 20.5437 18.1685 19.8763 18.1685H16.9596H16.7096V18.4185V27.0782ZM29.8346 15.5018C29.8346 23.4178 23.4173 29.8351 15.5013 29.8351C7.58522 29.8351 1.16797 23.4178 1.16797 15.5018C1.16797 7.58571 7.58522 1.16846 15.5013 1.16846C23.4173 1.16846 29.8346 7.58571 29.8346 15.5018Z" fill="#333333" stroke="#F7F7F7" stroke-width="0.5" />
						</svg>

					</NavLink>
				</div>
			</div>
			<div className={styles.divider} />
			<div className={styles.links}>


				<div className={styles.column__top}>
					<div className={styles.column}>
						<div className={styles.link__title}><span>Услуги</span></div>
						<div className={styles.pages}>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Купить
							</NavLink>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Арендовать
							</NavLink>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Продать
							</NavLink>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Оценить
							</NavLink>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.link__title}><span>Недвижимость</span></div>
						<div className={styles.pages}>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Квартиры
							</NavLink>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Новостройки
							</NavLink>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Дома и участки
							</NavLink>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Коммерческая
							</NavLink>
						</div>
					</div>
				</div>
				<div className={styles.column_bottom}>
					<div className={styles.column}>
						<div className={styles.link__title}><span>Компания</span></div>
						<div className={styles.pages}>
							<NavLink to='sdfsd' className={styles.pages__link}>
								О нас
							</NavLink>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Блог
							</NavLink>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Контакты
							</NavLink>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Связаться
							</NavLink>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.link__title}><span>Другое</span></div>
						<div className={styles.pages}>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Ипотечный калькулятор
							</NavLink>
							<NavLink to='sdfsd' className={styles.pages__link}>
								Инвестиции в недвижимость <br className={styles.tabletNone} /> в Дубае
							</NavLink>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.divider} />
			<div className={styles.copyrith}>
				<p>2024 © RMC De Luxe real estate LLC. Все права защищены </p>
				<img className={styles.agencyLogo} src='https://ucarecdn.com/61efb29b-7d8e-4eef-9c0e-9b8fef20a3a4/-/preview/1000x553/' alt='Result Agency Logo' />
			</div>
		</div>
	)
}

export default Footer