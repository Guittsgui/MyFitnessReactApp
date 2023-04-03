import * as S from './style'
import { NavLink } from 'react-router-dom'

const HeaderUser = () => {

    return <S.StyledHeaderUser>
        <NavLink to="/imccalculator"> Meu IMC</NavLink>
        <NavLink to="/mydiet"> Minha Dieta</NavLink>
        <NavLink to="/myworkout"> Meu Treino </NavLink>
        <NavLink to="/foodblog"> Blog Receitas </NavLink>
        <NavLink to="/fitnessblog"> Blog Fitness </NavLink>
    </S.StyledHeaderUser>
}
export default HeaderUser