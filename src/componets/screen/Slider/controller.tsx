import {FC} from 'react';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";


const PrevNextController: FC = () => {
	return (
		<div className='slidercontroller'>
				<div className='slidercontroller--prev'>
					<GrFormPrevious className='slidercontroller--prev_icon'/>
					</div>
				<div className='slidercontroller--prev'>
					<GrFormNext className='slidercontroller--prev_icon'/>
					</div>
			</div>
	);
};

export default PrevNextController;