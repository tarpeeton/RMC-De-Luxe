import {FC,} from 'react';
import './slider.css'
import Button from '../../ui/button'

import PrevNextController from './controller'



const SliderComponent: FC = () => {

 	return (
		<div  className='slider'>
			<div className='slider--content__bottom'>
			<div className='slider--header'>
				<div className='slider__header-col'>
				<h1 className='slider--header__title'>Найдите идеальное место для жизни</h1>
				<p className='slider--header__subtitle'>Откройте двери в новое будущее с нами</p>
				</div>
				<div className='customButtonSlider'>
				<Button label='Подробнее'/>
				</div>
			</div>
			<PrevNextController />
		</div>
			</div>
	);
};

export default SliderComponent;