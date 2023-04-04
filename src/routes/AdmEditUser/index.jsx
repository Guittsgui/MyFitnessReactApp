import  * as S from './style'
import{MdFastfood} from 'react-icons/md'
import {CgGym} from 'react-icons/cg'
import {CiCircleRemove} from 'react-icons/ci'
import { useParams } from 'react-router-dom'
import { useEffect , useState} from 'react'
import { api } from '../../api'

const AdmEditUser = () => {
    const {id} = useParams()
    const [user,setUser] = useState('')

    useEffect(()=> {
        const loadUser = async () =>{
            const userById = await api.getUserByID(id)
            setUser(userById)
        }
        loadUser()    
    },[])


    return <S.Body>
        <S.container>
       
                <h2> Nome:</h2>
                <p> {user.name} </p>
                <h2> Email:</h2>
                <p> {user.email} </p>
                <h2> Sexo: </h2>
                <p> Feminino</p>
                <h2> Altura: </h2>
                <p> 1.70 m</p>
                <h2> Peso Atual: </h2>
                <p> 70 kg</p>
                <h2> Objetivo: </h2>
                <p> Emagrecimento </p>

                <S.nav>
                    <button className='dieta'>Editar Dieta <MdFastfood size={30}/></button>
                    <button className='treino'>Editar Série <CgGym size={30}/></button>
                    <button className='remover'>Remover Usuário <CiCircleRemove size={30}/> </button>
                </S.nav>
        </S.container>
    </S.Body>
}  

export default AdmEditUser