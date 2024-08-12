import { FC } from 'react'
import styles from './mortgage.module.css'
import Button from '../../ui/button'

const MortgageCalc: FC = () => {
	return (
		<div className={styles.mortgage}>
			<div className={styles.title}>Рассчитайте ипотеку</div>
			<div className={styles.calculator}>
				<div className={styles.result}>
					<div className={styles.inputs}>
						<form className={styles.form}>

							<div className={styles.input__item}>
								<label className={styles.label}>Стоимость недвижимости (у.е.)</label>
								<input className={styles.input} placeholder='Введите стоимость' />
							</div>


							<div className={styles.input__item}>
								<label className={styles.label}>Первоначальный взнос (у.е.)</label>
								<input className={styles.input} placeholder='Введите размер взноса' />
							</div>

							<div className={styles.input__item}>	<label className={styles.label}>Срок в годах</label>
								<input className={styles.input} placeholder='Введите срок' />
							</div>

							<div className={styles.input__item}>
								<label className={styles.label}>Ставка (%)</label>
								<input className={styles.input} placeholder='Введите размер ставки' />

							</div>


						</form>
					</div>
					<div className={styles.seperator}/>
					<div className={styles.info}>
						<div className={styles.info__item}>
							<p className={styles.info__item__title}>Ежемесячный платеж</p>
							<span className={styles.info__item__subtitle}>4 410 у.е.</span>
						</div>
						<div className={styles.info__item}>
							<p className={styles.info__item__title}>Сумма кредита</p>
							<span className={styles.info__item__subtitle}>200 000 у.е.</span>
						</div>
						<div className={styles.info__item}>
							<p className={styles.info__item__title}>Процентная ставка</p>
							<span className={styles.info__item__subtitle}>24%</span>
						</div>
						<div className={styles.info__item}>
							<p className={styles.info__item__title}>Дата последнего платежа</p>
							<span className={styles.info__item__subtitle}>28 июля 2034 г</span>
						</div>
					</div>
				</div>
				<div>
					<Button label='Рассчитать' />
				</div>
			</div>
		</div>
	)
}

export default MortgageCalc