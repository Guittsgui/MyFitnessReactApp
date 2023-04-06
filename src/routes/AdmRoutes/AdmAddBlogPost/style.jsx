import styled from 'styled-components'

export const Body = styled.div`
    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const container = styled.div`
    min-height: 500px;
    width: 500px;
    background-color: #e4e3e3;
    border-radius: 15px;
    box-shadow: 2px 2px 2px #0000006c;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
    gap: 25px;

    textarea{
        width: 400px;
        height: 400px;
        padding: 10px;
        outline: none;
    }
    select{
        width: 250px;
        height: 25px;
        border-radius: 10px;
        text-align: center;
        outline: none;
    }
    p{
        text-align: center;
        margin-bottom: 5px;
    }
    div{
        display: flex;
        flex-direction: column;
    }
    .danger{
        color: red;
        font-weight: bold;
    }
`;
export const acceptMsg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: green;
    h2{
        border-bottom: 1px solid green;
        padding: 5px;
    }
    a{
        color: yellowgreen;
        text-decoration: none;
        font-size: 20px;
        border: 1px solid yellowgreen;
        padding: 15px;
        &:hover{
            color: #d7ff88;
            border-color: #d7ff88;
        }
        
    }
    
`;