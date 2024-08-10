import {FC} from 'react';
import './css/customs.css'
interface Props {
	label: string;
 }

const Button: FC<Props> = ({ label }) => {
	return (
		<button className='customButton'>
			{label}
		</button>
	);
};

export default Button;
