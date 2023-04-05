import * as S from './style'
import { api } from '../../api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {StyledButton} from './../../components/Button'
import {StyledInput} from '../../components/Input'


const AdmAddDiet = () => {

    const initial = {
        title: '',
        diet: ''
    }
    const {id} = useParams()
    const [user,setUser] = useState('')
    const [data, setData] = useState(initial)

 

    function handleChange(e){
        const {name, value} = e.target
        setData((prev)=>{
            const newData = {...prev,[name]: value}
            return newData
        })


    }


    function handleSubmit(){
        if(!data.title || !data.diet){
            alert('preencha os campos')
            return
        }

        const diet = {
            title: data.title,
            diet: data.diet,
            date: date
        }
        console.log(diet)
    }

    const date = new Date()
 

    useEffect(()=> {
        const loadUser = async () =>{
            const newUser = await api.getUserByID(id)
            setUser(newUser)
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
                value={data.title}
                onChange={handleChange}
                name="title"/>

                <textarea name="diet" placeholder='Digite aqui a Dieta.' 
                value={data.diet}
                 onChange={handleChange}/>

                <p> Dieta feita em : 0{date.getMonth() + 1} / {date.getFullYear()}</p>

                <StyledButton onClick={handleSubmit}> Salvar Dieta </StyledButton>

            </S.container>
    </S.Body>

}

export default AdmAddDiet