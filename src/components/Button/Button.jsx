
import styles from './Button.module.css';
import cn from 'classnames';


function Button ({isInput}){
	return (
		<>
			<button className={cn(styles['button'], {[styles['input-btn']]: isInput})}>Искать</button>
		</>
	);
}

export default Button;