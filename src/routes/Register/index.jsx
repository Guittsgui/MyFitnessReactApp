import * as C from './styled'
import { StyledFormContainer } from '../../components/FormContainer/styled'
import {StyledInput} from './../../components/Input'
import {StyledButton} from './../../components/Button'

function Register() {

  return (
     <C.StyledBody>
       <StyledFormContainer>
          <C.StyledPercentContainer>
            <p> Progresso: 0 %</p>
            <div className="percentArea">
              <div className="percent">     
              </div>
            </div>
          </C.StyledPercentContainer>
          <C.StyledTitle> 
            Register 
          </C.StyledTitle>
          <C.StyledForm>
            <StyledInput type="text" placeholder='Infome Seu Nome Completo:'/>
            <StyledInput type="email" placeholder='Infome Seu Email:'/>
            <StyledInput type="password" placeholder='Informe Sua Senha:'/>
            <StyledInput type="password" placeholder='Repita sua Senha:'/>
            <StyledButton> Registre-se </StyledButton>
          </C.StyledForm>
          <C.StyledErrorMsg> Informe sua Senha </C.StyledErrorMsg>
       </StyledFormContainer>
     </C.StyledBody>
  )
}

export default Register