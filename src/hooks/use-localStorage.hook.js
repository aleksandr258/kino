import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue){
	const [data, setData] = useState(() => {
		const savedData = JSON.parse(localStorage.getItem(key));
		return savedData ? savedData :  initialValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(data));
		console.log(JSON.parse(localStorage.getItem(key)));
	}, [key, data]);
	
	const saveData = (newData) => {
		setData(newData);
	};

	// const saveData = (newData) => {
	// 	setData(newData);
	// };
	return [data, saveData];
}