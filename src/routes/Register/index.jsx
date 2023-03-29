import React from 'react'
import * as C from './styled'
import { StyledInput } from '../../components/Input'
import { StyledButton } from './../../components/Button'

function Register() {
  return (
    <C.StyledBody>
      <C.StyledRegisterContainer>
        <C.StyledBanner>
          <h1> Seja bem Vindo !</h1>
          <p> Aqui é o primeiro passo em busca de uma vida melhor e mais saudável.</p>
          <p> Um caminho sem Volta.</p>
        </C.StyledBanner>
        <C.StyledFormArea>
          <h2> Registre-se </h2>
          <StyledInput placeholder='Informe seu Nome :'/>
          <StyledInput placeholder='Informe seu Email :'/>
          <StyledInput placeholder='Informe sua Senha :'/>
          <StyledInput placeholder='Repita sua Senha :'/>
          <StyledButton> Registrar </StyledButton>
        </C.StyledFormArea>

      </C.StyledRegisterContainer>
    </C.StyledBody>

  )
}

export default Register