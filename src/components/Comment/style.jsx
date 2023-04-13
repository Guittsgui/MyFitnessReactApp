import styled from 'styled-components'

export const Container = styled.div`

    min-height: 100px;
    width: 700px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px #00000075;
    background-color: #f1efef;
    display: flex;
    padding: 5px;
    font-style: italic;
    color: #686868;
    margin-bottom: 20px;
    

    .leftside{
        flex: 1;
        background-color: blue;
        height: 100px; 
        margin-top: 10px;
    }
    .rightside{
        flex:3;

        h3{
            font-size: 18px;
            font-weight: bold;
        }
        .info{
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        .comment{
            background-color: white;
            padding: 5px;
            min-height: 50px;
            h3{
                text-align: center;
            }
            border-radius: 10px;
            width: 85%;
            margin: 10px auto;
            font-size: 14px;
            text-indent: 15px;
        }
        .name{
            display: flex;
            gap: 5px;
            align-items: center;
            justify-content: center;
        }
        button{
            border: none;
            color: #9b0000;
            cursor: pointer;
            margin-right: 20px;
            &:hover{
                color: red;
            }
        }
        .remove{
            display: flex;
            justify-content: end;
        }
    }

`;