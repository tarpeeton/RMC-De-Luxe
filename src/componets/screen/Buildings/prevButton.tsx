import {FC} from 'react';
import { GrFormPrevious } from "react-icons/gr";
import styles from './bouildings.module.css'

interface IPrevButton  {
	onClick: () => void;
 }

const PrevButton: FC<IPrevButton> = ({onClick}) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<GrFormPrevious  className={styles.button__icon}/>
		</button>
	);
};

export default PrevButton;