import {AuthContext} from "./AuthContext"
import { useState } from "react"
import { api } from "../../api"

export const AuthContextProvider = ({children}) =>{

    const [user, setUser] = useState()
    const vodka = "smirnoff"


    const signIn = async (loginData) =>{
        const json = await api.validateUserLogin(loginData)
        const {token,hasUser} = json
        if( token && hasUser){
            setUser(hasUser)
            return true
        }else{
            return false
        }
    }

    const signOut = () => {
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{vodka, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}