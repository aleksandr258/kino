import styles from './Paragraph.module.css';



function Paragraph (){
	return (
		<>
			<p className={styles['paragraph']}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</p>
		</>
	);
}

export default Paragraph;