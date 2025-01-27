import { useState } from 'react';
import Button from './components/Button/Button';
import Tittle from './components/Tittle/Tittle';
import Paragraph from './components/Pargraph/Paragraph';
import Input from './Input/Input';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Card from './components/Card.jsx/Card';


function App() {
	const films = [
		{id: 1,name: 'Black Widow', src: 'blackWidow.svg', stars: '324'},
		{id: 2,name: 'Shang Chi', src: 'shangchi.svg', stars: '324'},
		{id: 3,name: 'Loki', src: 'loki.svg', stars: '324'},
		{id: 4,name: 'How I Met Your Mother', src: 'mother.svg', stars: '324'},
		{id: 5,name: 'Money Heist', src: 'money.svg', stars: '324'},
		{id: 6,name: 'Friends', src: 'friends.svg', stars: '324'},
		{id: 7,name: 'The Big Bang Theory', src: 'bigBang.svg', stars: '324'},
		{id: 8,name: 'Two And a Half Men', src: 'men.svg', stars: '324'}
		
	];
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
			<div className={styles['cards-menu']}>
				{films.map(e => (
					<Card 
						key={e.id}
						name={e.name}
						src={e.src}
						stars={e.stars}
					/>
				))}

			</div>
		</div>
			
		
	);
}

export default App;
