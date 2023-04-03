import {AuthContext} from "./AuthContext"
import { useState } from "react"
import { api } from "../../api"

export const AuthContextProvider = ({children}) =>{

    const [user, setUser] = useState(null)

    const signIn = async (loginData) =>{
        const json = await api.validateUserLogin(loginData)
        const {token,hasUser} = json
        if( token && hasUser){
            setUser(hasUser)
            return true
        }
        return false    
    }

    const signOut = () => {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, setUser, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}