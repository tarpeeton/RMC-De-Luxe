import { FC } from 'react'
import styles from './choose.module.css'

const ChooseUs: FC = () => {
	return (
		<div className={styles.Choose}>
			<div className={styles.choose__title}><p>Почему выбирают нас</p></div>
			<div className={styles.choose__cards}>
				<div className={styles.choose__card__text}>
					<div className={styles.choose__card__text__item }>
						<div className={styles.title}>Опыт и профессионализм</div>
						<div className={styles.subtitle}>
						Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг
						</div>
					</div>
				</div>
				{/* Image */}
				<div className={styles.choose__card__image}>
					<img src='https://ucarecdn.com/57745b06-810f-4faf-a705-480a5ebe6d5d/-/preview/960x640/' alt='Image'/>
				</div>
				<div className={styles.choose__card__text}>
					<div className={styles.choose__card__text__item }>
						<div className={styles.title}>Прозрачность и доверие</div>
						<div className={styles.subtitle}>
						Обеспечение полной прозрачности всех операций и предоставление отчетов. Работа основана на принципах честности и доверия, что подтверждается отзывами
						</div>
					</div>
				</div>
				{/* Image */}
				<div className={styles.choose__card__image}>
					<img src='https://ucarecdn.com/532a99b8-bb3b-4e44-89be-216c40e8df9f/-/preview/793x1000/' alt='Image'/>
				</div>
				{/* TEXT */}
				<div className={styles.choose__card__text}>
					<div className={styles.choose__card__text__item }>
						<div className={styles.title}>Высокий уровень обслуживания</div>
						<div className={styles.subtitle}>
						Мы всегда на связи, чтобы помочь вам в любое время
						</div>
					</div>
				</div>
				{/* IMAGE */}
				<div className={styles.choose__card__image}>
					<img src='https://ucarecdn.com/2225cb92-c28d-493b-b162-559d344af04b/-/preview/1000x667/' alt='Image'/>
				</div>
				{/* TEXT */}
				<div className={styles.choose__card__text}>
					<div className={styles.choose__card__text__item }>
						<div className={styles.title}>Индивидуальный подход</div>
						<div className={styles.subtitle}>
						Мы разрабатываем персонализированные решения, учитывая уникальные потребности каждого клиента
						</div>
					</div>
				</div>
				{/* IMAGE */}
				<div className={styles.choose__card__image}>
					<img src='https://ucarecdn.com/fd356bf5-2939-4068-a468-fe643ba2a83c/-/preview/960x637/' alt='Image'/>
				</div>

				{/* TEXt */}
				<div className={styles.choose__card__text}>
					<div className={styles.choose__card__text__item }>
						<div className={styles.title}>Комплексное обслуживание</div>
						<div className={styles.subtitle}>
						Полный спектр услуг, включающий аренду, куплю-продажу, управление и инвестиции в недвижимость.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChooseUs