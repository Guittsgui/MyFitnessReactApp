import * as S from './style'
import {StyledInput} from './../../components/Input'
import {AiOutlineSearch} from 'react-icons/ai'
import UserBox from './../../components/UserBox'
import { useEffect , useState} from 'react'
import {api} from './../../api'


const AdmAllUsers = () => {
    const [name, setName] = useState('')
    const [listUsers , setListUsers] = useState([])

    function handleSearch(e){
        setName(e.target.value)
    }

    useEffect(()=>{
        const loadUsers = async () => {
            const list = await api.getAllUsers()
            setListUsers(list)
        }
        loadUsers()
    },[])


    return <S.Body>
        <S.Nav>
            <h3> Search Bar : </h3>
            <S.searchContainer>
                <StyledInput placeholder='Informe o nome do Aluno: ' 
                value={name} 
                onChange={handleSearch}/>
                <button> <AiOutlineSearch size={30}/> </button>
            </S.searchContainer>
        </S.Nav>

        <S.usersContainer>
            { listUsers.map((user)=> (
                <UserBox user={user} key={user.id}/>
            ))}
        </S.usersContainer>
    </S.Body>

}

export default AdmAllUsers