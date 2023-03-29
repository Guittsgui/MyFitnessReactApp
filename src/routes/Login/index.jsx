import * as C from './styled'
import { StyledFormContainer } from '../../components/FormContainer/styled'
import {StyledInput} from './../../components/Input'
import {StyledButton} from './../../components/Button'

function Login() {

  return (
    
    <C.StyledBody>
      <StyledFormContainer>
        <C.StyledTitle> 
          Login 
        </C.StyledTitle>
        <C.StyledForm>
          <StyledInput placeholder='Informe seu Email'></StyledInput>
          <StyledInput placeholder='Informe sua Senha'></StyledInput>
          <StyledButton> Login </StyledButton>
        </C.StyledForm>
        <C.StyledErrorMsg> Login inváido </C.StyledErrorMsg>
      </StyledFormContainer>

    </C.StyledBody>
  
  )
}

export default Login