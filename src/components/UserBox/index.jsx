import * as S from './style'
import {CgGym} from 'react-icons/cg'
import{AiFillEdit} from 'react-icons/ai'

const UserBox = ({user}) =>{
    return <S.container>
        
    <p> <span>Nome: </span>{user.name} </p>
    <button> <AiFillEdit size={30}/> </button>

    </S.container>
}

export default UserBox