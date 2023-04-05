import * as C from './styled'
import { StyledFormContainer } from '../../../components/FormContainer/styled'
import {StyledInput} from './../../../components/Input'
import {StyledButton} from './../../../components/Button'
import {useState} from 'react'
import {isEmailValid} from './../../../utils/isEmailValid'
import {api} from './../../../api'
import { useNavigate } from 'react-router-dom'




function Register() {

const navigate = useNavigate()
const [aceptMsg, setAceptMsg] = useState('')
const [erroMsg, setErroMsg] = useState('')
const [fieldsData, setFieldsData ] = useState({
  fullname: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: ''
})

function handleChange(e){
  const { name, value} = e.target
  setFieldsData((prev) => {
    const newData = {...prev, [name]: value}
    return newData
  })
  setErroMsg('')
}

function handleSubmit(e){
  (e.preventDefault())
  const splited = fieldsData.fullname.split(" ")
  if (splited.length === 1){
    setErroMsg('Nome Inválido')
    return
  }
  if(!isEmailValid(fieldsData.email)){
    setErroMsg('Informe um Email Válido')
    return
  }
  if(fieldsData.password.length < 6){
    setErroMsg('Senha mínima de 06 dígitos')
  }
  if(fieldsData.password != fieldsData.confirmPassword){
    setErroMsg('Senhas não Compatíveis')
    return
  }

  async function createUser(){
    try{
      const [json,response] = await api.addNewUser(fieldsData)
      if(response.status === 201){
        setAceptMsg(json.msg)
      }else{
        setErroMsg(json.msg)
      }
    }catch{
    }
  }
  createUser()
}


  function countPercent(){
    let percent = 0
    const ammountAdded = 20
    if(fieldsData.fullname){
      percent += ammountAdded
    }
    if(fieldsData.email) percent += ammountAdded
    if(fieldsData.password) percent += ammountAdded
    if(fieldsData.confirmPassword) percent += ammountAdded
    if(fieldsData.gender) percent += ammountAdded
    return percent
  }



  return (
     <C.StyledBody>
       <StyledFormContainer>
          {!aceptMsg &&
          <>
            <C.StyledPercentContainer>
            <p> Progresso: {countPercent()} %</p>
            <div className="percentArea">
              <div className="percent" style={{width: `${countPercent()}%`}}>     
              </div>
            </div>
          </C.StyledPercentContainer>
          <C.StyledTitle> 
            Register 
          </C.StyledTitle>
          <C.StyledForm>
            <StyledInput type="text" placeholder='Infome Seu Nome Completo:' 
            value={fieldsData.fullname} name="fullname"
            onChange={handleChange}/>
            
            <StyledInput type="email" placeholder='Infome Seu Email:'
             value={fieldsData.email} name="email"
             onChange={handleChange}/>

            <StyledInput type="password" placeholder='Informe Sua Senha:'
             value={fieldsData.password} name="password"
             onChange={handleChange}/>

            <StyledInput type="password" placeholder='Repita sua Senha:'
             value={fieldsData.confirmPassword} name="confirmPassword"
             onChange={handleChange}/>
            
            <div>
              <span>Homem</span> <input type="radio" name='gender' value="male" onChange={handleChange}/> 

              <span>Mulher</span> <input type="radio" name='gender' value="female" onChange={handleChange}/>  
            </div>
             
            <StyledButton onClick={handleSubmit} disabled={countPercent() != 100}>
               Registre-se 
            </StyledButton>
          </C.StyledForm>
          {erroMsg && <C.StyledErrorMsg> {erroMsg} </C.StyledErrorMsg>}        
          </>        
          }
          {aceptMsg && 
            <>
              <C.userCreatedMsg>
                <h1>{aceptMsg}</h1>
              </C.userCreatedMsg>
            </>
          }
       </StyledFormContainer>
     </C.StyledBody>
  )
}

export default Register