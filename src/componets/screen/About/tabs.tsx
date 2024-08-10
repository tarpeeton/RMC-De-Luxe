import {FC , useState} from 'react';
import styles from './about.module.css'

const Tabs: FC = () => {
	const [activeTab, setActiveTab] = useState('rent');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
	return (
		<div className={styles.container}>
		<div className={styles.nav}>
			<button 
				className={`${styles.tab} ${activeTab === 'rent' ? styles.active : ''}`} 
				onClick={() => handleTabClick('rent')}
			>
				Аренда
			</button>
			<button 
				className={`${styles.tab} ${activeTab === 'sale' ? styles.active : ''}`} 
				onClick={() => handleTabClick('sale')}
			>
				Купля - продажа
			</button>
			<button 
				className={`${styles.tab} ${activeTab === 'management' ? styles.active : ''}`} 
				onClick={() => handleTabClick('management')}
			>
				Управление
			</button>
		</div>

		<div className={styles.content}>
			{activeTab === 'rent' && (
				<div>
					<p className={styles.tabsInfo}>Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды — от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности</p>
					<br/>
					<p  className={styles.tabsInfo}>Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков</p>
				</div>
			)}
			{activeTab === 'sale' && (
				<div>
					<p className={styles.tabsInfo}>Широкий выбор объектов: Мы предлагаем разнообразные варианты аренды — от квартир и домов до коммерческих помещений, удовлетворяющие любые потребности</p>
				</div>
			)}
			{activeTab === 'management' && (
				<div>
					
					<p  className={styles.tabsInfo}>Надежные арендаторы: Проведение тщательной проверки и отбора арендаторов для обеспечения стабильного дохода и минимизации рисков</p>
				</div>
			)}
		</div>
	</div>
	);
};

export default Tabs;