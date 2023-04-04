import styled from 'styled-components'

export const container = styled.div`
    height: 50px;
    width: 650px;
    background-color: #ceface;
    border: 1px solid black;
    margin: 10px 0px;
    border-radius: 15px;
    border: none;
    box-shadow: 2px 2px 2px #0000007a;
    display: flex;
    align-items: center;
    justify-content: space-around;
 

    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:hover{
            color: darkgreen;
        }
    }
`;

