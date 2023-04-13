import styled from 'styled-components'

export const Body = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Menu = styled.nav`
    select{
        width: 250px;
        height: 30px;
        text-align: center;
        font-size: 18px;
        color: darkgreen;
        border: none;
        border-bottom: 1px solid green;
        margin: 40px;
        outline: none;
        cursor: pointer;
        &:hover{
            color: yellowgreen;
            border-color: yellowgreen;
        }
    }
`;