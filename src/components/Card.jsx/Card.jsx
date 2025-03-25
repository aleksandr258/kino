import styles from './Card.module.css';
import cn from 'classnames';


function Card ({name, src, stars}){
	return (
		<div className={styles['card-wrap']}>
			<img src={src} alt="" className={styles['kino-img']} />
			<div className={styles['stars-overlay']}>
				<img src="star.svg" alt="stars" />
				{stars}
			</div>
			<h3 className={styles['kino-name']}>{name}</h3>
			<button className={styles['add-fav']}>
				<img src="Like.svg" alt="" className={styles['like-icon']}/>
				
				В избранное</button>
		</div>

	);
}

export default Card;