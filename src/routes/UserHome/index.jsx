import { StyledBody } from "./style"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useContext, useState } from "react"


const UserHome = () => {

    const auth = useContext(AuthContext)
   

    return <StyledBody>
        {auth.user.isadm}
    </StyledBody>
}

export default UserHome