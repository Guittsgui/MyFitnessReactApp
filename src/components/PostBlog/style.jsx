import styled from 'styled-components'


export const PostContainer = styled.div `
    min-height: 150px;
    width: 800px;
    background-color: #eeeeee;
    box-shadow: 2px 2px 2px #00000075;
    display: flex;
    margin-bottom: 30px;
    text-align: center;

    .leftSide{
        width: 300px;
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
        h2{
            color: grey;
        }
        h1{
            color: #015501;
        }
        small{
            font-size: 12px;
            font-weight: bolder;
            letter-spacing: 2px;
        }
        div{
            width: 100%;
            text-align: end;
            padding-right: 20px;
        }
    }
`;