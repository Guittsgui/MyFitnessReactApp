import * as C from './styled'
import { StyledFormContainer } from '../../components/FormContainer/styled'
import {StyledInput} from './../../components/Input'
import {StyledButton} from './../../components/Button'
import {useState} from 'react'
import {isEmailValid} from './../../utils/isEmailValid'

function Login() {

  const [error, setError] = useState('')
  const [ data, setData] = useState({
    email: '',
    password: ''
  })

  function handleChange(e){
    setError('')
    const {value, name} = e.target
    setData((prev)=> {
      const  newData = {...prev, [name]: value}
      return newData
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!isEmailValid(data.email)){
      setError('Informe um Email válido')
    }
  }

  return (
    
    <C.StyledBody>
      <StyledFormContainer>
        <C.StyledTitle> 
          Login 
        </C.StyledTitle>
        <C.StyledForm>
          <StyledInput placeholder='Informe seu Email' 
            name='email' type='email'
            value={data.email} onChange={handleChange}/>
          <StyledInput placeholder='Informe sua Senha'
            name='password' type='password'
            value={data.password} onChange={handleChange}/>
          <StyledButton onClick={handleSubmit} disabled={!data.email || !data.password}> Login </StyledButton>
        </C.StyledForm>
        <C.StyledErrorMsg> {error} </C.StyledErrorMsg>
      </StyledFormContainer>

    </C.StyledBody>
  
  )
}

export default Login