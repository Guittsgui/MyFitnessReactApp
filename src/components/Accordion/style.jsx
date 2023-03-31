import styled from 'styled-components'

export const StyledAccord = styled.div`
    color: white;
    .container{
        width: 700px;
        margin-bottom: 30px;
        box-shadow: 2px 2px 2px #0000007d;
    }
    .titleBox{
        background-color: yellowgreen;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;

        text-shadow: 1px 1px 1px #00000067;
        cursor: pointer;
        &:hover{
            background-color: #b3ce7e;
        }
    }
    .bodyBox{
        background-color: #ebe9e9;
        padding: 20px;
        color: black;
        text-align: center;
        
    }

    @media (max-width: 500px){
        .container{
            width: 370px;
            margin: 15px;
        }

        .titleBox{
            height: 50px;

            h2{
                font-size: 15px;
                text-align: center;
            }
        }
    }
`;
