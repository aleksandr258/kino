import styles from './Tittle.module.css';



function Tittle({value}){
	return (
		<>
			<h1 className={styles['tittle']}>{value}</h1>
		</>
	);
}

export default Tittle;