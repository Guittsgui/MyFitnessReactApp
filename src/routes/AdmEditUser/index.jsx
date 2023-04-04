import  * as S from './style'
import{MdFastfood} from 'react-icons/md'
import {CgGym} from 'react-icons/cg'
import {CiCircleRemove} from 'react-icons/ci'
import { Link, useParams } from 'react-router-dom'
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
                <Link to="/admallusers"> Voltar </Link>
                <div className="infoContainer">
                    <div>
                        <h3> Nome:</h3>
                        <p> {user.name} </p>
                    </div>

                    <div>  
                        <h3> Email:</h3>
                        <p> {user.email} </p>
                    </div>

                    <div>
                        <h3> Sexo: </h3>
                        <p> Feminino</p>
                    </div>

                    <div>
                        <h3> Altura: </h3>
                        <p> 1.70 m</p>
                    </div>  

                    <div>
                        <h3> Peso Atual: </h3>
                        <p> 70 kg</p>
                    </div>
                    
                    <div>
                        <h3> Objetivo: </h3>
                        <p> Emagrecimento </p>
                    </div>
                </div>

                <S.nav>
                    <button className='dieta'>Editar Dieta <MdFastfood size={30}/></button>
                    <button className='treino'>Editar Série <CgGym size={30}/></button>
                    <button className='remover'>Remover Usuário <CiCircleRemove size={30}/> </button>
                </S.nav>
        </S.container>
    </S.Body>
}  

export default AdmEditUser