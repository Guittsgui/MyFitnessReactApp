import styled from 'styled-components'

export const Body = styled.div`
    min-height: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`;

export const Nav = styled.nav`
    width: 500px;
    height: 100px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #00000090;
    background-color: lightgreen;
    margin: 40px 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    h3{
        color: #585858;
    }
`;

export const searchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    button{
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
        &:hover{
            color: darkgreen;
        }
    
    }
`;

export const filterContainer = styled.div`
    display: flex;
    ul{
        display: flex;
        align-items: center;
        gap: 50px;
        list-style: none;
    }

`;


