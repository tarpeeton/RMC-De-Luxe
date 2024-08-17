import {FC} from 'react'
import { useInput } from '../../Hooks/useInput';
import styles from '../screen/Mortgage/mortgage.module.css'


interface IFields {
	label: string ,
	placeholder: string,
	inputProps: ReturnType<typeof useInput>
}


const InputField: FC<IFields> = ({ label, placeholder, inputProps }) => {
    const { value, isActive, hasError, handleFocus, handleBlur, handleChange } = inputProps;

    return (
        <div className={styles.input__item}>
            <div className={styles.input__item_fiels}>
            <label className={`${styles.label} ${isActive ? styles.Labelactive : ''}  ${hasError ? styles.errorLabel : ''}`}>{label}</label>
            <input
                className={`${styles.input} ${isActive ? styles.active : ''} ${hasError ? styles.errorInput : ''}`}
                placeholder={placeholder}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            </div>
            {hasError && <span className={styles.isError}>Это поле обязательно</span>}
        </div>
    );
};

export default InputField