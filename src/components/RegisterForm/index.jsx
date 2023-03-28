import { StyledRForm } from "./styled"
import { StyledInput } from "../input"

const RegisterForm = () =>{

    return <StyledRForm>
        <h2> Seja bem vindo </h2>
        <StyledInput type={"text"} placeholder="Informe seu Nome: "/>
        <StyledInput type={"email"} placeholder="Informe seu Email: "/>
        <StyledInput type={"password"} placeholder="Informe sua Senha: "/>
        <StyledInput type={"password"} placeholder="Repita sua Senha: "/>
        <button> Registrar </button>
        

    </StyledRForm>
}
export default RegisterForm