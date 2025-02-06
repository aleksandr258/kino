import { useRef, useState } from 'react';
import Input from '../../Input/Input';
import Tittle from '../Tittle/Tittle';
import styles from './LoginForm.module.css';
import Button from '../Button/Button';



function LoginForm({addUser, logoutUser}){
	// const userName = useRef();

	const [userName, setUserName] = useState('Ваше имя');
	const handleInputChange = (e) => {
		e.preventDefault();
		setUserName(e.target.value);
	};

	const isValidName = (name) => name.trim().length > 0;

	const handleLogin = () => {
		console.log(isValidName(userName));
		if (isValidName(userName)){
			addUser(userName);
		}else{
			console.log(isValidName(userName));
		}
	};

	

	return (
		<div className={styles['login-wrap']}>
			<Tittle
				value={'Вход'}
			/>
			<Input
				icon={false}
				textValue={userName}
				onInputChange={handleInputChange}
			/>
			<Button
			  isInput={true}
				text={'Войти в профиль'}
				onClick={handleLogin}
			/>
		</div>
	);
}

export default LoginForm;