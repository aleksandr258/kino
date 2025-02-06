import Button from '../components/Button/Button';
import styles from './Input.module.css';




function Input({ icon, textValue, onInputChange }) {
	const iconCheck = icon ? <img src={icon} alt="search icon" className={styles['icon']} /> : null;
	return (
		<div className={styles['input-wrap']}>
			{iconCheck}
			<input
				type="text"
				className={styles['input']}
				onChange={onInputChange}
				placeholder={textValue}
			/>
			{/* <Button isInput={true}/> */}
		</div>
	);
}

export default Input;