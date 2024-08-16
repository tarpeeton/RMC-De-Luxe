import { FC } from 'react'
import styles from './investmen.module.css'
import Button from '../../ui/button'

const AboutInvestment: FC = () => {
	return (
		<div className={styles.Investmen}>
			<div className={styles.About}>
				<div className={styles.About__items}>
				<h3 className={styles.Title}>Инвестиции в <br /> недвижимость в Дубае</h3>
				<div className={styles.subtitle__gap_col}>
					<p className={styles.SubTitle}>Недвижимость в Дубае предоставляет отличные возможности для получения стабильного дохода и увеличения капитала</p>
					<p className={styles.SubTitle}>Полный цикл инвестиций: От анализа рынка и подбора объектов до управления инвестициями и их реализации.</p>

					<p className={styles.SubTitle}>Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая высокое качество обслуживания и надежность.</p>

					<p className={styles.SubTitle}>Наши услуги включают управление вашей инвестиционной недвижимостью, обеспечивая её сохранность и стабильный доход. Мы берем на себя все аспекты управления, включая подбор и проверку арендаторов, техническое обслуживание, финансовую отчетность и юридическую поддержку.</p>
				</div>
				<div className={styles.Images}>
						<div className={styles.Image__cont}>
						<div className={styles.ImagesRigth}>
						</div>
						<div className={styles.ImagesLeft}>
						</div>
						</div>
						
					</div>
				</div>
				

				<Button label='Подробнее' />
			</div>

		</div>
	)
}

export default AboutInvestment