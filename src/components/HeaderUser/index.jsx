import * as S from './style'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'

const HeaderUser = () => {
    const auth = useContext(AuthContext)
    return <S.StyledHeaderUser>
        {auth.user.isadm === 0 && 
            <>
                <NavLink to="/imccalculator"> Meu IMC</NavLink>
                <NavLink to="/mydiet"> Minha Dieta</NavLink>
                <NavLink to="/myworkout"> Meu Treino </NavLink>
                <NavLink to="/foodblog"> Blog Receitas </NavLink>
                <NavLink to="/fitnessblog"> Blog Fitness </NavLink>
            </>
        }
        {auth.user.isadm === 1 &&
            <>
                <NavLink to="/admallusers"> Buscar Alunos </NavLink>
                <NavLink> + Blog Fitness </NavLink>
                <NavLink> + Blog Receita </NavLink>
                <NavLink>  Prog Mensal</NavLink>
            </>
        }

    </S.StyledHeaderUser>
}
export default HeaderUser