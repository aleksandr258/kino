import Button from '../components/Button/Button';
import styles from './Input.module.css';




function Input({ icon, textValue }) {
	return (
		<div className={styles['input-wrap']}>
			<img src={icon} alt="search icon" className={styles['icon']} />
			<input
				type="text"
				className={styles['input']}
				value={textValue}
				onChange={() => {}}
				placeholder="Введите название"
			/>
			<Button isInput={true}/>
		</div>
	);
}

export default Input;