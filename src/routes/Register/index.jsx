import React from 'react'
import * as C from './styled'
import { StyledInput } from '../../components/Input'
import { StyledButton } from './../../components/Button'
import { useState } from 'react'



function Register() {

  const [data, setData] = useState({
    fullname:'',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState(false)
 
  function handleChangeInput(e){ 
    const {name, value} = e.target
    setData((prev) => {
      const newData = {...prev, [name]: value}
      return newData;
    })
  }

  function calculateProgress(){
    let value = 0
    const amountToAdd = 25

    if (data.fullname){
      value += amountToAdd
    }
    if (data.email){
      value += amountToAdd
    }
    if (data.password){
      value += amountToAdd
    }
    if (data.confirmPassword){
      value += amountToAdd
    }
    return value
  }

  function handleSubmit(e){
      e.preventDefault()
  }

  return (
    <C.StyledBody>
      <C.StyledRegisterContainer>
        <C.StyledBanner>
          <div className='alignBanner'>
            <h1> Seja bem Vindo !</h1>
            <p> Aqui é o primeiro passo em busca de uma vida melhor e mais saudável. Um caminho sem Volta. Estamos felizes em ter você conosco. Daqui para frente transformaremos seu estilo de vida completamenet.</p>
          </div>
        </C.StyledBanner>

        <C.StyledFormArea>
          <p> Processo: {calculateProgress()} %</p>
          <div className="container">
            <div className="percent" style={{width:`${calculateProgress()}%`}}>
            </div>
          </div>
          <h2> Registre-se </h2>

          <StyledInput placeholder='Informe seu Nome :' type="text" name='fullname' value={data.fullname} onChange={handleChangeInput} autoComplete="off"/>

          <StyledInput placeholder='Informe seu Email :' name='email' type="email" value={data.email} onChange={handleChangeInput} autoComplete="off"/>

          <StyledInput placeholder='Informe sua Senha :'name='password' type="password" value={data.password} onChange={handleChangeInput} autoComplete="off"/>

          <StyledInput placeholder='Repita sua Senha :' name='confirmPassword' type="password" 
          value={data.confirmPassword} onChange={handleChangeInput} autoComplete="off"/>

          <StyledButton onClick={handleSubmit}> Registrar </StyledButton>
        </C.StyledFormArea>

      </C.StyledRegisterContainer>
    </C.StyledBody>

  )
}

export default Register