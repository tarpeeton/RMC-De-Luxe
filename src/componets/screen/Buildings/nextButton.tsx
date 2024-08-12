import {FC} from 'react';
import styles from './bouildings.module.css'
import { GrFormNext } from "react-icons/gr";


interface INextButton  {
	onClick: () => void;
 }
const NextButton: FC<INextButton> = ({onClick}) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<GrFormNext  className={styles.button__icon}/>
		</button>
	);
};

export default NextButton;