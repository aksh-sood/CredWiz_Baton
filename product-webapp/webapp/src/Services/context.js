import { createContext ,useState} from "react";


export const UserContext = createContext();

export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    const value = {
        user,
        setUser,
        isLogin,
        setIsLogin
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}
export default UserContext;