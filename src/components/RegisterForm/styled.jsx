import styled from 'styled-components'

export const StyledRForm = styled.form`
    border: 1px solid black;
    width: 500px;
    height: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000000b7;
    gap: 40px;


    button{
        width: 300px;
        height: 30px;
        border-radius: 15px;
        border-color: transparent;
        color: white;
        background-color: yellowgreen;
        cursor: pointer;
        &:hover{
            background-color: #b5ce84;
        }
    }
`;