import { useState, createContext, useEffect, useContext } from "react";
import { DataStore, Auth } from "aws-amplify";
import { User } from "../models";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [dbUser, setDbUser] = useState(null);
	const [authUser, setAuthUser] = useState(null);
	const sub = authUser?.attributes?.sub;
	useEffect(() => {
		Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser);
	}, []);

	useEffect(() => {
		DataStore.query(User, (user) => user.sub("eq", sub)).then((users) =>
			setDbUser(users[0])
		);
	}, [sub]);

	return (
		<AuthContext.Provider value={{ dbUser, authUser, sub, setDbUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
