import { useContext, useState } from 'react';
import Input from '../../Input/Input';
import Tittle from '../Tittle/Tittle';
import styles from './LoginForm.module.css';
import Button from '../Button/Button';
import { UserContext } from '../context/user.context';


function LoginForm(){
	const { setUser } = useContext(UserContext);
	const [userName, setUserName] = useState('Ваше имя');
	const handleInputChange = (e) => {
		e.preventDefault();
		setUserName(e.target.value);
	};

	const isValidName = (name) => name.trim().length > 0;

	const handleLogin = () => {
		console.log(isValidName(userName));
		if (isValidName(userName)){
			console.log(userName);
			setUser({name: userName, isLogined: true});
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