import styles from './Input.module.css';



function Input({icon, textValue}){
	return (
		<div className={styles['input-wrap']}>
			<img src={icon} alt="search icon" />
			<input type="text" className={styles['input']} value={textValue} />
		</div>
	);
}

export default Input;