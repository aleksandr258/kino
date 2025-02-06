
import styles from './Button.module.css';
import cn from 'classnames';


function Button ({isInput, text, onClick}){
	return (
		<>
			<button onClick={onClick} className={cn(styles['button'],{[styles['input-btn']]: isInput})}>{text}</button>
		</>
	);
}

export default Button;