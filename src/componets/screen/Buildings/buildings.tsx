import {FC} from 'react';
import styles from './bouildings.module.css'
import Button from '../../ui/button'
import PrevNextController from '../Slider/controller'
import { CiHeart } from "react-icons/ci";
const Buildings: FC = () => {
	return (
		<section className={styles.Buildings}>
			<div className={styles.HeadingArrow}>
				<h2>Новостройки</h2>
				<PrevNextController/>
			</div>
			<div className={styles.Cards}>
				<div className={styles.CardItem}>
					<div>
					<CiHeart className={styles.Like} />
					</div>
					<div className={styles.Image}>
						<img className={styles.ImageToLeft} src='https://ucarecdn.com/2faeeb1a-df49-4cf2-b7a7-b66fcd53e8a0/-/preview/1000x562/' alt='example image'/>
					</div>
					<div className={styles.name__price}>
						<div className={styles.name}>Safa One</div>
						<div className={styles.price}>от $1 900 000</div>
					</div>
				</div>
				<div className={styles.CardItem}>
					<div>
					<CiHeart className={styles.Like} />
					</div>
					<div className={styles.Image}>
						<img className={styles.imageScale} src='https://ucarecdn.com/a5f93bd7-f266-4c55-865b-2259361a4f2d/-/preview/1000x561/' alt='example image'/>
					</div>
					<div className={styles.name__price}>
						<div className={styles.name}>Safa Two</div>
						<div className={styles.price}>от $399 000</div>
					</div>
				</div>
				<div className={styles.CardItem}>
					<div>
					<CiHeart className={styles.Like} />
					</div>
					<div className={styles.Image}>
						<img className={styles.imageScale} src='https://ucarecdn.com/25b8931a-aa8e-46d4-b005-6d8cb2073f2f/-/preview/1000x814/' alt='example image'/>
					</div>
					<div className={styles.name__price}>
						<div className={styles.name}>Peninsula Two</div>
						<div className={styles.price}>от $245 000</div>
					</div>
				</div>
				<div className={styles.CardItem}>
					<div>
					<CiHeart className={styles.Like} />
					</div>
					<div className={styles.Image}>
						<img className={styles.imageScale} src='https://ucarecdn.com/5aeefa13-ba99-4064-94fd-8d98394d30c2/-/preview/933x1000/' alt='example image'/>
					</div>
					<div className={styles.name__price}>
						<div className={styles.name}>Marina Vista</div>
						<div className={styles.price}>от $612 000</div>
					</div>
				</div>
			</div>
			<div className={styles.ButtonArea}>
				<Button label='Смотреть все'/>
			</div>
		</section>
	);
};

export default Buildings;