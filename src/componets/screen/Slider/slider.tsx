import {FC,} from 'react';
import './slider.css'
import Button from '../../ui/button'

import PrevNextController from './controller'



const SliderComponent: FC = () => {

 	return (
		<div  className='slider'>
			<div className='slider--content__bottom'>
			<div className='slider--header'>
				<h1 className='slider--header__title'>Найдите идеальное место для жизни</h1>
				<p className='slider--header__subtitle'>Откройте двери в новое будущее с нами</p>
				<Button label='Подробнее'/>
			</div>
			
			<PrevNextController />
		</div>
			</div>
	);
};

export default SliderComponent;