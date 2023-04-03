import styled from 'styled-components'

export const StyledHeaderUser = styled.nav`
    height: 80px;
    background: rgb(27,36,0);
    background: linear-gradient(90deg, rgba(27,36,0,1) 0%, rgba(36,93,30,1) 35%, rgba(131,199,55,1) 100%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;

    a{
        text-decoration: none;
        color: white;
        &:hover{
            color: yellowgreen;
        }
    }
    .active{
        color: yellowgreen;
    }
`;