import * as S from './style'
import {StyledInput} from './../../components/Input'
import UserBox from './../../components/UserBox'
import { useEffect , useState} from 'react'
import {api} from './../../api'


const AdmAllUsers = () => {
    const [name, setName] = useState('')
    const [listUsers , setListUsers] = useState([])
    let filterList = listUsers.filter((user) => user.name.includes(name))

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
                onChange={(e)=>setName(e.target.value)}/>
            </S.searchContainer>
        </S.Nav>

        <S.usersContainer>
            {filterList.map((user)=> (
                <UserBox key={user.id} user={user}/>
            ))}
        </S.usersContainer>
    </S.Body>

}

export default AdmAllUsers