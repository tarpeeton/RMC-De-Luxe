import {FC} from 'react';
import styles from './about.module.css'
import PrevNextController from '../Slider/controller'
import Tabs from './tabs'


const AboutCompony: FC = () => {
	return (
		<div  className={styles.About}>
			<div className={styles.AboutCont}>
			<div className={styles.Info}>
				<div>
					<h2 className={styles.ComponyName}>О компании <br /><span>RMC DE LUXE</span></h2>
				</div>
				<div>
				<Tabs />
				</div>
			</div>
			<div className={styles.Image}>
				<div className={styles.ImageController}>
				<PrevNextController/>
				</div>
			</div>
			</div>
			
		</div>
	);
};

export default AboutCompony;