import { StyledBody } from "./style"
import { AuthContext } from "../../../contexts/Auth/AuthContext"
import { useContext, useEffect, useState } from "react"


const UserHome = () => {

    const auth = useContext(AuthContext)
    
    useEffect(()=>{
        console.log(auth.user)
    },[])

    return <StyledBody>
        {auth.user.isadm}
    </StyledBody>
}

export default UserHome