import * as S from './style'
import {StyledInput} from './../../components/Input'
import {AiOutlineSearch} from 'react-icons/ai'
import UserBox from './../../components/UserBox'
const AdmAllUsers = () => {

    return <S.Body>
        <S.Nav>
            <h3> Search Bar : </h3>
            <S.searchContainer>
                <StyledInput placeholder='Informe o nome do Aluno: '/>
                <button> <AiOutlineSearch size={30}/> </button>
            </S.searchContainer>
        </S.Nav>
        <UserBox>
                
        </UserBox>
    </S.Body>

}

export default AdmAllUsers