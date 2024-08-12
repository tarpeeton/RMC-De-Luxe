import {FC} from 'react';
import styles from './form.module.css'

import Button from '../../ui/button'

const FormCTA: FC = () => {
	return (
		<div className={styles.form}>
			<div className={styles.content}>
			<div className={styles.form__items}>
				<h2>Остались вопросы? Свяжитесь с нами</h2>
				<form className={styles.form__inputs}>
					<div>
					<label className={styles.label} htmlFor="name">ФИО <span className={styles.systemRed}>*</span></label>
					<input  className={styles.input} type="text" id="name" name="name" required />
					</div>
			
			<div> 
        <label className={styles.label} htmlFor="phone">Номер телефона <span className={styles.systemRed}>*</span></label>
        <input  className={styles.input} type="tel" id="phone" name="phone" required /></div>
			<div>  <label className={styles.label} htmlFor="email">E-mail</label>
			<input className={styles.input}  type="email" id="email" name="email" /></div>
			<div>
				 
			<label className={styles.label} htmlFor="question">Ваш вопрос</label>
        <input className={styles.input}  type="text" id="question" name="question" />
			</div>
       
        
      
       
				</form>
				<Button label='Отправить'/>
			</div>
			<div className={styles.formImage}>
			</div>
			</div>
		
		</div>
	);
};

export default FormCTA;