import { useState } from 'react';
import Button from './components/Button/Button';
import Tittle from './components/Tittle/Tittle';
import Paragraph from './components/Pargraph/Paragraph';
import Input from './Input/Input';
import styles from './App.module.css';
import Header from './components/Header/Header';


function App() {
	const [count, setCount] = useState(0);
	const [inputValue, setInputValue] = useState('');

	return (
	
		<div className={styles['main-wrap']}>
			<Header></Header>
			<Tittle></Tittle>
			<Paragraph></Paragraph>   
			<Input
				icon="find.svg"
				textValue={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</div>
			
		
	);
}

export default App;
