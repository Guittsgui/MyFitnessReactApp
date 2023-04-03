import { StyledBody } from "./style"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useContext, useState } from "react"


const UserHome = () => {

    const auth = useContext(AuthContext)
   
    function changeLoginName(){

        auth.setUser((prev) => {
            const newUser = {...prev, name: "tobias"}
            return newUser
            
        })
    }

    return <StyledBody>
        {auth.user.name}
        <button onClick={changeLoginName}> change name</button>
    </StyledBody>
}

export default UserHome