import * as C from "./../Register/styled"
import { StyledButton } from "../../components/Button"
import { StyledInput } from "../../components/Input"
import {useState} from 'react'
import { isEmailValid } from "../../utils/isEmailValid"
function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleChangeEmail(e){
    setEmail(e.target.value)
  }
  function handleChangePass(e){
    setPassword(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log(isEmailValid(email))
    
    alert(`O usuário ${email} com senha ${password} tentou logar`)
  }

  return (
    <C.StyledBody>
      <C.StyledRegisterContainer>

        <C.StyledFormArea>
          <h2> Realize seu Login </h2>
          <StyledInput placeholder='Informe seu Email :' type="email" value={email} onChange={handleChangeEmail}/>
          <StyledInput placeholder='Informe sua Senha :' type="password" value={password} onChange={handleChangePass}/>
          <StyledButton onClick={handleSubmit}> Login </StyledButton>
        </C.StyledFormArea>
        <C.StyledBanner>
          <div className='alignBanner'>
            <h1> É bom lhe ver !</h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio et, nulla dolores repellendus inventore veritatis tenetur perferendis doloremque quisquam assumenda quam odio officia id minima pariatur possimus deleniti perspiciatis qui.</p>
          </div>
        </C.StyledBanner>

      </C.StyledRegisterContainer>
    </C.StyledBody>
  )
}

export default Login