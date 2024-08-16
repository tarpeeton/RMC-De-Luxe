import { FC } from 'react'
import styles from './service.module.css'
import { IoCheckmark } from "react-icons/io5"
const Services: FC = () => {
	return (
		<div className={styles.Services}>
			<div className={styles.ServicesItem}>
				<div className={styles.ServiceTitle}>
					<h2 className={styles.Title}>Что входит в услугу <br/> управления недвижимостью</h2>
				</div>
				<div className={styles.advantages}>
					{/* LEFT */}
					<div className={styles.advantages__first}>
						<div className={styles.advantages__item}>
							<div className={styles.advantages_checkmar_info}>
							<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div className={styles.Info}>Проверка арендаторов (кредитная  история, рекомендации)</div>
							</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages_checkmar_info}>
							<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div className={styles.Info}>Подготовка и подписание договоров аренды</div>
							</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages_checkmar_info}>
							<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div className={styles.Info}>Сбор арендной платы</div>
							</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages_checkmar_info}>
							<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div className={styles.Info}>Обработка запросов и жалоб арендаторов</div>
							</div>
						</div>
						<div className={styles.advantages__item}>
							<div className={styles.advantages_checkmar_info}>
							<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div className={styles.Info}>Контроль соблюдения условий аренды</div>
							</div>
						</div>
					</div>
					{/* RIGTH */}
					<div className={styles.advantages__first}>
					<div className={styles.advantages__itemLast}>
						<div className={styles.advantages_checkmar_info}>
						<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div className={styles.Info}>Регулярное техническое обслуживание</div>
						</div>
							
						</div>
					<div className={styles.advantages__itemLast}>
						<div className={styles.advantages_checkmar_info}>
						<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div className={styles.Info}>Организация и проведение ремонтных работ</div>
						</div>
							
						</div>
					<div className={styles.advantages__itemLast}>
						<div className={styles.advantages_checkmar_info}>
						<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div className={styles.Info}>Контроль за состоянием недвижимости</div>
						</div>
							
						</div>
					<div className={styles.advantages__itemLast}>
						<div className={styles.advantages_checkmar_info}>
						<div className={styles.advantages__icon}>
								<IoCheckmark className={styles.icon}/>
							</div>
							<div className={styles.Info}>Подбор надежных арендаторов</div>
						</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services