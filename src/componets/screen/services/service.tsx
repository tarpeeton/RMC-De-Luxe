import { FC } from 'react'
import styles from './service.module.css'
import { IoCheckmark } from "react-icons/io5"
const Services: FC = () => {
	return (
		<div className={styles.Services}>
			<div className={styles.ServicesItem}>
				<div className={styles.ServiceTitle}>
					<h2 className={styles.Title}>Что входит в услугу управления недвижимостью</h2>
				</div>
				<div className={styles.advantages}>
					{/* LEFT */}
					<div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div>Проверка арендаторов (кредитная история, рекомендации)</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div>Подготовка и подписание договоров аренды</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div>Сбор арендной платы</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div>Обработка запросов и жалоб арендаторов</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div>Контроль соблюдения условий аренды</div>
						</div>
					</div>
					{/* RIGTH */}
					<div>
						<div className={styles.advantages__item}>
							<div>Icon</div>
							<div>Проверка арендаторов (кредитная история, рекомендации)</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services