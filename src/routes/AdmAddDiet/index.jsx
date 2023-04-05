import * as S from './style'
import { api } from '../../api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {StyledButton} from './../../components/Button'
import {StyledInput} from '../../components/Input'
import { Link } from 'react-router-dom'



const AdmAddDiet = () => {
    const [counter,setCounter] = useState(0)
    const initial = {
        title: '',
        diet: '',
        dateExpires: ''
    }

    const [acceptMsg, setAcceptMsg] = useState('')
    const {id} = useParams()
    const [user,setUser] = useState('')
    const [data, setData] = useState(initial)

    function handleChange(e){
        const {name, value} = e.target
        setData((prev)=>{
            const newData = {...prev,[name]: value}
            return newData
        })
        setCounter(data.diet.length)
    }

    async function handleSubmit(){
        if(!data.title || !data.diet){
            alert('preencha os campos')
            return
        }
        const diet = {
            title: data.title,
            diet: data.diet,
            dateExpires: data.dateExpires,
            userId: user.id
        }    
        const {msg} = await api.addNewDiet(diet)
        setAcceptMsg(msg)
    }
    useEffect(()=> {
        const loadUser = async () =>{
            const newUser = await api.getUserByID(id)
            setUser(newUser)
        }
        loadUser()    
    },[])

    return <S.Body>
            <S.container>
                {!acceptMsg &&               
                <>
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
                    onChange={handleChange}
                    maxLength="1000"/>
                    <small> {counter} / 1000 caracteres.</small>             
                    <div className='datacontainer'>
                        <p> {user.name} deve seguir a dieta até:  </p>
                        <input className='datefield' 
                        type="date" 
                        name='dateExpires' 
                        value={data.dateExpires} 
                        onChange={handleChange}/>
                    </div>
                    <StyledButton onClick={handleSubmit}> Salvar Dieta </StyledButton>                
                </>               
                }
                {acceptMsg && 
                <S.acceptBox> 
                    <h2>{acceptMsg} </h2>
                    <Link to='/admallusers'> Clique Aqui para Voltar </Link>
                </S.acceptBox>
                }
            </S.container>
    </S.Body>
}

export default AdmAddDiet