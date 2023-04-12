import styled from 'styled-components'

export const PostContainer = styled.div `
    min-height: 150px;
    width: 700px;
    background-color: #e7e5e5;
    border-radius: 10px;
    box-shadow: 2px 2px 2px #00000075;
    display: flex;
    margin-bottom: 20px;

    .leftSide{
        flex:1;
        background-image: url('https://www.kaisan.com.br/media/blog/post/5_dicas_de_como_ser_uma_pessoa_fitness.jpg');
        background-position: center;
        background-size: cover;
        
    }
    .rightSide{
        flex:1.5;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        p{
            letter-spacing: 2px;
            color: darkblue;
            font-weight: bolder;
            cursor: pointer;
            &:hover{
                color: blue;
            }
        }
    }
`;