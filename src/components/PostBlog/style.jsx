import styled from 'styled-components'


export const PostContainer = styled.div `
    min-height: 150px;
    width: 700px;
    background: rgb(161,255,201);
    background: radial-gradient(circle, rgba(161,255,201,1) 0%, rgba(255,255,255,1) 100%);
    box-shadow: 2px 2px 2px #00000075;
    display: flex;
    margin-bottom: 20px;

    .leftSide{
        width: 250px;
        background-image: url('${(props) => (props.url)}');
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
            color: darkgreen;
            font-weight: bolder;
            cursor: pointer;
            &:hover{
                color: #2dbe2d;
            }
        }
    }
`;