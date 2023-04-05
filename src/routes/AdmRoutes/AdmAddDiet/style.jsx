import styled from 'styled-components'

export const Body = styled.div`
    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const container = styled.div`
    min-height: 650px;
    width: 500px;
    background-color: #e6e6e6;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #0000007f;
    margin: 20px;
    padding: 10px;
    h2{
        color: green;
    }
    p{
        margin-bottom: 20px;
    }
    textarea{
        width: 380px;
        height: 400px;
        outline: none;
        padding: 10px;
        margin-top: 20px;
        border-radius: 15px;
    }
    small{
        margin-bottom: 20px;
    }
    .datacontainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        gap: 10px;
        p{
            margin-bottom: 0px;
        }
        color: darkgreen;
        font-weight: bolder;
    }

    .datefield{
        width: 250px;
        text-align: center;
        height: 30px;
        border-radius: 15px;
        border-color: transparent;
        outline: none;
        color: darkgreen;
        font-weight: bolder;
        letter-spacing: 2px;
    }
`;

export const header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        font-size: 20px;
    }
    margin: 20px 0px;
`;

export const acceptBox = styled.div`
    color: green;
    font-weight: bolder;
    margin-top: 49%;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    h2{
        border-bottom: 1px solid green;
        padding-bottom: 5px;
    }
    a{
        color: yellowgreen;
        text-decoration: none;
        text-align: center;
        font-size: 20px;
        border: 2px solid yellowgreen;
        padding: 10px;
        &:hover{
            color: #c7eb7f;
            border-color:#c7eb7f;
        }
    }
`;