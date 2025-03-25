import { useContext } from 'react';
import styles from './Header.module.css';
import { UserContext } from '../context/user.context';



function Header(){
	const {currentUser, setUser } = useContext(UserContext);
	const handleLogout = (event) => {
		event.preventDefault();
		setUser({...currentUser, isLogined: false});
	};
	console.log(currentUser);
	const userCheck = currentUser?.isLogined ? 
		<>
			<li><a href="" className={styles['link-button']}>{currentUser.name}</a></li>
			<li><a href="" onClick={handleLogout} className={styles['link-button']}>Выйти</a></li>;
		</> : 
		<li><a href="" className={styles['link-button']}>Войти <img src="Login.svg" alt="" /></a></li>;
	return (
		<div className={styles['header-wrap']}>
			<button className={styles['fav-button']}>
				<img src="notes.svg" alt="favorite button" />
			</button>
			<ul className={styles['button-list']}>
				<li><a href="" className={styles['link-button']}>Поиск фильмов</a></li>
				<li><a href="" className={styles['link-button']}>Мои фильмы</a></li>
				{userCheck}
				
			</ul>

		</div>
	);
}

export default Header;