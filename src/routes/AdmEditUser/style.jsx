import styled from 'styled-components'

export const Body = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button{
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        font-size: 14px;
        cursor: pointer;
        color: white;
    }
    a{
        color: red;
        text-decoration: none;
        letter-spacing: 2px;
        &:hover{
            color: #f3a6a6;
        }
    }
`;

export const container = styled.div`
    height: 550px;
    width: 700px;
    background-color: #f0f0f0;
    box-shadow: 2px 2px 2px #00000084;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    .infoContainer{
        display: flex;
        flex-direction: column;
        gap: 20px;
        div{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 40px;
            border: 1px solid black;
            padding: 10px;
        }
    }
`;

export const nav = styled.div`
    display: flex;
    gap: 20px;

    .dieta{
        background-color: #0c5c0c;
        &:hover{
            background-color: #3fb93f;
        }
    }
    .treino{
        background-color: #279191;
        &:hover{
            background-color: #24f3f3;
        }
    }
    .remover{
        background-color: #742020;
        &:hover{
            background-color: #cc0d0d;
        }
    }

`;