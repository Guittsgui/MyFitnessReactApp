import styled from 'styled-components'

export const Body = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

    a{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        cursor: pointer;
        color: red;
        text-decoration: none;
        &:hover{
            color: #ff8b8b;
        }
        }
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
    a{
        padding: 5px;
        color: white;
        width: 150px;
    }

    .dieta{
        background-color: #0c5c0c;
        &:hover{
            background-color: #3fb93f;
            color: white;
        }
    }
    .treino{
        background-color: #279191;
        &:hover{
            background-color: #24f3f3;
            color: white;
        }
    }
    .remover{
        background-color: #742020;
        &:hover{
            background-color: #cc0d0d;
            color: white;
        }
    }

`;