import { FC } from 'react'
import styles from './investmen.module.css'
import Button from '../../ui/button'

const AboutInvestment: FC = () => {
	return (
		<div className={styles.Investmen}>
			<div className={styles.About}>
				<h3 className={styles.Title}>Инвестиции в недвижимость в Дубае</h3>
				<div>
				<p  className={styles.SubTitle}>Недвижимость в Дубае предоставляет отличные возможности для получения стабильного дохода и увеличения капитала</p>
				<br />
				<p  className={styles.SubTitle}>Полный цикл инвестиций: От анализа рынка и подбора объектов до управления инвестициями и их реализации.</p>
				<br />

				<p  className={styles.SubTitle}>Наши эксперты помогут вам на всех этапах инвестиционного процесса, обеспечивая высокое качество обслуживания и надежность.</p>
				<br />

				<p  className={styles.SubTitle}>Наши услуги включают управление вашей инвестиционной недвижимостью, обеспечивая её сохранность и стабильный доход. Мы берем на себя все аспекты управления, включая подбор и проверку арендаторов, техническое обслуживание, финансовую отчетность и юридическую поддержку.</p>
				</div>
				<Button label='Подробнее' />
			</div>
			<div className={styles.Images}>
				<div className={styles.ImagesRigth}>
				</div>
				<div className={styles.ImagesLeft}>
				</div>
			</div>
		</div>
	)
}

export default AboutInvestment