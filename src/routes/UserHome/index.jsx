import { StyledBody } from "./style"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { useContext } from "react"


const UserHome = () => {

    const auth = useContext(AuthContext)

    return <StyledBody>

        <h1></h1>

    </StyledBody>
}

export default UserHome