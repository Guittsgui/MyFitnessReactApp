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
            <h1> É bom lhe ver !</h1>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio et, nulla dolores repellendus inventore veritatis tenetur perferendis doloremque quisquam assumenda quam odio officia id minima pariatur possimus deleniti perspiciatis qui.</p>
          </div>
        </C.StyledBanner>

      </C.StyledRegisterContainer>
    </C.StyledBody>
  )
}

export default Login