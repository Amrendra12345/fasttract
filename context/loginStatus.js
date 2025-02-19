import { createContext, useContext, useState } from "react";
export const LoginContext = createContext(null);
export const useShowModel = ()=>{
    const  showModel  = useContext(LoginContext)
    return showModel
}

export const LoginContextProvider = (props)=>{
    const[loginModel, setLoginModel] = useState(false);
    return(
        <LoginContext.Provider value={{loginModel, setLoginModel}}>{props.children}</LoginContext.Provider>
        )
}