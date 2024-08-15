import {FC} from 'react';
import style from './header.module.css'
import { MdNavigateBefore } from 'react-icons/md'

const SelectLanguage: FC = () => {
  return (
	<div className={style.SelectLanguage__item}>
						<div className={style.selectContainer}>
							<select className={style.customSelect}>
								<option value="ru">Ru</option>
								<option value="en">En</option>
								<option value="uz">Uz</option>
							</select>
							<MdNavigateBefore className={style.selectIcon} />
						</div>
					</div>
  );
};

export default SelectLanguage;