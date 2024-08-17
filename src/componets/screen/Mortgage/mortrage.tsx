import { FC } from 'react'
import styles from './mortgage.module.css'
import Button from '../../ui/button'
import { useInput } from '../../../Hooks/useInput'
import InputField from '../../ui/input'


const MortgageCalc: FC = () => {
	const priceInput = useInput()
	const downPaymentInput = useInput()
	const durationInYearsInput = useInput()
	const bidInput = useInput()

	return (
		<div className={styles.mortgage}>
			<div className={styles.title}>Рассчитайте ипотеку</div>
			<div className={styles.calculator}>
				<div className={styles.result}>
					<div className={styles.inputs}>
						<form className={styles.form}>
							<InputField
								label="Стоимость недвижимости (у.е.)"
								placeholder="Введите стоимость"
								inputProps={priceInput}
							/>
							<InputField
								label="Первоначальный взнос (у.е.)"
								placeholder="Введите размер взноса"
								inputProps={downPaymentInput}
							/>
							<InputField
								label="Срок в годах"
								placeholder="Введите срок"
								inputProps={durationInYearsInput}
							/>
							<InputField
								label="Ставка (%)"
								placeholder="Введите размер ставки"
								inputProps={bidInput}
							/>
						</form>
					</div>
					<div className={styles.mobile__button}>
						<Button label="Рассчитать" />
					</div>

					<div className={styles.seperator} />
					<div className={styles.info}>
						<InfoItem title="Ежемесячный платеж" subtitle="4 410 у.е." />
						<InfoItem title="Сумма кредита" subtitle="200 000 у.е." />
						<InfoItem title="Процентная ставка" subtitle="24%" />
						<InfoItem title="Дата последнего платежа" subtitle="28 июля 2034 г" />
					</div>
				</div>
				<div className={styles.desktop__button}>
					<Button label="Рассчитать" />
				</div>
			</div>
		</div>
	)
}

const InfoItem: FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
	<div className={styles.info__item}>
		<p className={styles.info__item__title}>{title}</p>
		<span className={styles.info__item__subtitle}>{subtitle}</span>
	</div>
)

export default MortgageCalc
