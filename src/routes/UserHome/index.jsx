import { StyledBody } from "./style"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useContext } from "react"
import { AuthContextProvider } from "../../contexts/Auth/AuthContextProvider"

const UserHome = () => {

    const auth = useContext(AuthContext)

    return <StyledBody>

        <h1> Olá Usuário {auth.user.name} </h1>

    </StyledBody>
}

export default UserHome