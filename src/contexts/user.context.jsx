import { createContext, useState } from 'react';

// actual value we want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

// provider--component wraps around other components to pass along context
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
