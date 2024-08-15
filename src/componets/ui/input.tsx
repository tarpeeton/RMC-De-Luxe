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
            <label className={`${styles.label} ${isActive ? styles.Labelactive : ''}`}>{label}</label>
            <input
                className={`${styles.input} ${isActive ? styles.active : ''}`}
                placeholder={placeholder}
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {hasError && <span className={styles.isError}>Это поле обязательно</span>}
        </div>
    );
};

export default InputField