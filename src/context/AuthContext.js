import { useState, createContext } from "react";

const AuthContext = createContext();
const [dbUser, setDbUser] = useState(null);
const [authUser, setAuthUser] = useState(null);

const AuthContextProvider = ({ children }) => {
	return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
