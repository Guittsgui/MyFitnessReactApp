import styled from 'styled-components'

export const Body = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        margin-bottom: 20px;
    }
    button{
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3px;
        font-size: 14px;
        cursor: pointer;
        color: white;
    }
`;

export const container = styled.div`
    height: 550px;
    width: 700px;
    background-color: #d9ffd9;
    box-shadow: 2px 2px 2px #00000084;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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