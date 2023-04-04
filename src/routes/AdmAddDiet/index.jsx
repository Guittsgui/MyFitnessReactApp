import * as S from './style'
import { api } from '../../api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {StyledButton} from './../../components/Button'
import {StyledInput} from '../../components/Input'


const AdmAddDiet = () => {
    const {id} = useParams()
    const [user,setUser] = useState('')
    const [data, setData] = useState('')

    function handleChange(e){
        setData(e.target.value)
    }
    function handleSubmit(){
        console.log(data)
    }

    useEffect(()=> {
        const loadUser = async () =>{
            const newUser = await api.getUserByID(id)
            setUser(newUser)
            console.log(newUser)
        }
        loadUser()    
    },[])



    return <S.Body>
            <S.container>
                <S.header>
                    <h2> Nome do cliente: </h2>
                    <p> {user.name}</p>
                </S.header>
                <StyledInput placeholder='Título da Dieta Ex: Dieta Emagrecimento'
                value={data}
                onChange={handleChange}/>
                <textarea placeholder='Digite aqui a Dieta.' value={data} onChange={handleChange}/>
                <StyledButton onClick={handleSubmit}> Salvar Dieta </StyledButton>

            </S.container>
    </S.Body>

}

export default AdmAddDiet