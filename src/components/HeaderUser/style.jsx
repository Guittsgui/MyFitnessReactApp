import styled from 'styled-components'

export const StyledHeaderUser = styled.nav`
    height: 80px;
    background: rgb(43,162,93);
    background: radial-gradient(circle, rgba(43,162,93,1) 0%, rgba(17,60,5,1) 100%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;

    a{
        text-decoration: none;
        color: white;
        &:hover{
            color: yellowgreen;
            border-bottom: 2px solid yellowgreen;
            padding-bottom: 10px;
        }
    }
    .active{
        color: yellowgreen;
        border-bottom: 2px solid yellowgreen;
        padding-bottom: 10px;
    }
`;