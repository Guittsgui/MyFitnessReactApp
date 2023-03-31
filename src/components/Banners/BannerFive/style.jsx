import styled from 'styled-components'


export const StyledBannerFive = styled.div`

    color: white;
    height: 600px;
    background-image: url('https://guiadafarmacia.com.br/wp-content/uploads/2022/04/atividade-fisica.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width: 500px){
        align-items: center;
        padding: 10px;
    }
`;

export const StyledContainer = styled.div`
    color: black;
    width: 500px;
    background-color: #ffffffb0;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px black;
    margin-right: 80px;
    word-spacing: 7px;

    @media (max-width: 500px){
        margin-right: 0px;
    }
    
    h2{
        font-size: 35px;
        color: yellowgreen;
        text-shadow: 1px 1px 1px black;
    }

    button{
        width: 100px;
        height: 40px;
        border-radius: 15px;
        border-color: transparent;
        background-color:  #aaf80f ;
        color: white;
        letter-spacing: 2px;
        box-shadow: 2px 2px 2px #00000086;
        text-shadow: 1px 1px 1px black;
        cursor: pointer;
        &:hover{
            background-color: yellowgreen;
        }
    }
`;