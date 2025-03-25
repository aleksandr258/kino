import { createContext, useEffect, useState} from 'react';
import { useLocalStorage } from '../../hooks/use-localStorage.hook';


export const UserContext = createContext([{
	name: 'vasya',
	isLogined: false
}]);

export const UserContextProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState();
	const [ allUsers, setUserStorage] = useLocalStorage('users', [{ name: 'vas', isLogined: false }]);
	
	const setUser = (userData) => {
		setCurrentUser(userData);
	};

	useEffect(() => {
		if (currentUser?.isLogined) {
			setUserStorage((prevData) => {
				const newData = Array.isArray(prevData) ? [...prevData] : [];
				if (newData.length > 0) newData[newData.length - 1].isLogined = false;
				newData.push({...currentUser});
				return newData;
			});
		}
	}, [currentUser]);

	const logoutUser = () => setCurrentUser({...currentUser, isLogined: false});

	return (
		<UserContext.Provider value = { {currentUser, setUser, logoutUser}}>
			{children}
		</UserContext.Provider>
	);
}; 