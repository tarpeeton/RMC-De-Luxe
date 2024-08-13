import { FC } from 'react'
import styles from './blog.module.css'
import Button from '../../ui/button'
import { NavLink } from 'react-router-dom'
import { GrFormNext } from "react-icons/gr"
import { LuEye } from "react-icons/lu"
const Blog: FC = () => {
	return (
		<section className={styles.blog}>
			<div className={styles.heading_content}>
				<div><h2 className={styles.title}>Блог</h2></div>

				<div className={styles.blog__content}>
					<div className={styles.blog__content__item}>
						<div className={styles.image__date}>
							<img className={styles.image} src='https://ucarecdn.com/0b3cf8b4-d81e-411d-a1ad-c57c4e32e812/-/preview/1000x654/' alt='blog Image' />
							<div className={styles.date}>31.07.2024</div>
							<div className={styles.views}>
								<LuEye className={styles.views__icon} />
								<span className={styles.views__number}>899</span>
							</div>
						</div>
						<div className={styles.content__title}>
							<p>Тенденции и прогнозы рынка недвижимости на 2024 год</p>
						</div>
						<div className={styles.Link}>
							<NavLink to="blog[1]">
								Подробнее
							</NavLink>
							<GrFormNext className={styles.icon} />
						</div>
					</div>
					<div className={styles.blog__content__item}>
						<div className={styles.image__date}>
							<img className={styles.image} src='https://ucarecdn.com/29f3f81a-0b99-4138-9df6-540cca9ffbfc/-/preview/1000x666/' alt='blog Image' />
							<div className={styles.date}>31.07.2024</div>
							<div className={styles.views}>
								<LuEye className={styles.views__icon} />
								<span className={styles.views__number}>899</span>
							</div>
						</div>
						<div className={styles.content__title}>
							<p>Лучшие районы для инвестиций в недвижимость</p>
						</div>
						<div className={styles.Link}>
							<NavLink to="blog[1]">
								Подробнее
							</NavLink>
							<GrFormNext className={styles.icon} />
						</div>
					</div>
					<div className={styles.blog__content__item}>
						<div className={styles.image__date}>
							<img className={styles.image} src='https://ucarecdn.com/a67409ef-fab5-46e1-98a9-c104ab9eaab8/-/preview/666x1000/' alt='blog Image' />
							<div className={styles.date}>31.07.2024</div>
							<div className={styles.views}>
								<LuEye className={styles.views__icon} />
								<span className={styles.views__number}>899</span>
							</div>
						</div>
						<div className={styles.content__title}>
							<p>Топ-10 новых <br />
								жилых комплексов</p>
						</div>
						<div className={styles.Link}>
							<NavLink to="blog[1]">
								Подробнее
							</NavLink>
							<GrFormNext className={styles.icon} />
						</div>
					</div>


				</div>
			</div>

			<div className={styles.link__button}>
				<Button label='Все статьи' />
			</div>
		</section>
	)
}

export default Blog