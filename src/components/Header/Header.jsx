import styles from './Header.module.css';



function Header(){
	return (
		<div className={styles['header-wrap']}>
			<button className={styles['fav-button']}>
				<img src="notes.svg" alt="favorite button" />
			</button>
			<ul className={styles['button-list']}>
				<li><a href="" className={styles['link-button']}>Поиск фильмов</a></li>
				<li><a href="" className={styles['link-button']}>Мои фильмы</a></li>
				<li><a href="" className={styles['link-button']}>Войти <img src="Login.svg" alt="" /></a></li>
			</ul>

		</div>
	);
}

export default Header;