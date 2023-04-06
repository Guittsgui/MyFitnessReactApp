import styled from 'styled-components'

export const StyledHeaderUser = styled.nav`
    height: 50px;
    background: rgb(43,162,93);
    background: radial-gradient(circle, rgba(43,162,93,1) 0%, rgba(17,60,5,1) 100%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 25px;
    box-shadow: 2px 2px 2px #00000083;


    a{
        text-decoration: none;
        color: white;
        &:hover{
            color: #dafa99;
            border-bottom: 1px solid yellowgreen;
            padding-bottom: 2px;
        }
    }
    .active{
        color: #dafa99;
        border-bottom: 1px solid yellowgreen;
        padding-bottom: 2px;
    }
`;