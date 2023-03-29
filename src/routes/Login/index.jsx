import * as C from "./../Register/styled"
import { StyledButton } from "../../components/Button"
import { StyledInput } from "../../components/Input"
function Login() {
  return (
    <C.StyledBody>
      <C.StyledRegisterContainer>

        <C.StyledFormArea>
          <h2> Realize seu Login </h2>
          <StyledInput placeholder='Informe seu Email :'/>
          <StyledInput placeholder='Informe sua Senha :'/>
          <StyledButton> Login </StyledButton>
        </C.StyledFormArea>
        <C.StyledBanner>
          <div className='alignBanner'>
            <h1> Seja bem Vindo !</h1>
            <p> Aqui é o primeiro passo em busca de uma vida melhor e mais saudável. Um caminho sem Volta. Estamos felizes em ter você conosco.</p>
          </div>
        </C.StyledBanner>

      </C.StyledRegisterContainer>
    </C.StyledBody>
  )
}

export default Login