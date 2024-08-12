import {FC , useRef} from 'react';
import styles from './bouildings.module.css'
import Button from '../../ui/button'

import { BuildingsData } from '../../../data/bouildings';
import Carousel ,{CarouselHandle} from '../../ui/carousel'
import NextButton from './nextButton'
import PrevButton from './prevButton'

const Buildings: FC = () => {
	const carouselRef = useRef<CarouselHandle>(null);
	return (
		<section className={styles.Buildings}>
			<div className={styles.HeadingArrow}>
				<h2>Новостройки</h2>
				<div className={styles.ButtonController}>
				<PrevButton onClick={() => carouselRef.current?.prevSlide()} />
          <NextButton onClick={() => carouselRef.current?.nextSlide()} />
				</div>
			</div>
			<div className={styles.Cards}>
			<Carousel  ref={carouselRef} cards={BuildingsData} />
			</div>
			<div className={styles.ButtonArea}>
				<Button label='Смотреть все'/>
			</div>
		</section>
	);
};

export default Buildings;