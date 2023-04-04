import styled from 'styled-components'

export const Body = styled.div`
    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const container = styled.div`
    min-height: 700px;
    width: 500px;
    background-color: #e6e6e6;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    box-shadow: 2px 2px 2px #0000007f;

    textarea{
        width: 380px;
        height: 400px;
        outline: none;
        padding: 10px;
        margin: 20px;
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