import { StyledBody } from "./style"
import { AuthContext } from "../../../contexts/Auth/AuthContext"
import { useContext, useEffect, useState } from "react"
import * as S from './style'


const UserHome = () => {

    const auth = useContext(AuthContext)
    
    return <StyledBody>
        <S.HeaderContainer>
            <S.InfoContainer>

            </S.InfoContainer>
            <S.TitleContainer>
                <h1> Olá, seja bem vindo(a)</h1>
                <h2> {auth.user.name}</h2>
            </S.TitleContainer>
            <S.ProfileContainer>

            </S.ProfileContainer>
        </S.HeaderContainer>
    </StyledBody>
}

export default UserHome