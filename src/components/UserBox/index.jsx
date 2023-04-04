import * as S from './style'
import {CgGym} from 'react-icons/cg'
import{AiFillEdit} from 'react-icons/ai'
import {FaMale,FaFemale} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const UserBox = ({user}) =>{
    return <S.container gender={user.gender}>

    {user.gender === 'male' ? <FaMale size={30}/> : <FaFemale size={30}/>}    
    <p> <span>Nome: </span>{user.name} </p>
    <Link to={`/admedituser/${user.id}`}> <AiFillEdit size={30}/></Link>

    </S.container>
}

export default UserBox