import { useState } from 'react';
import Button from './components/Button/Button';
import Tittle from './components/Tittle/Tittle';
import Paragraph from './components/Pargraph/Paragraph';
import Input from './Input/Input';
import styles from './App.module.css';
import Header from './components/Header/Header';


function App() {
	const [count, setCount] = useState(0);

	return (
	
		<div className={styles['main-wrap']}>
			<Header></Header>
			<Tittle></Tittle>
			<Paragraph></Paragraph>   
			<Input textValue='Введите название' icon={'find.svg'}/>
			<Button></Button>
		</div>
			
		
	);
}

export default App;
