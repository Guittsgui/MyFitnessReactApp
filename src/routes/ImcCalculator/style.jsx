import styled from 'styled-components'

export const Body = styled.div`
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const container = styled.div`
    width: 800px;
    height: 500px;
    display: flex;
    box-shadow: 2px 2px 2px #00000099;
`;

export const textContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: darkgray;
    word-spacing: 3px;
    h2{
        margin-bottom: 15px;
        border-bottom: 1px solid darkgray;
        padding-bottom: 5px;
    }  
`;

export const leftSide = styled.div`
    background-color: #d6ffd6;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    padding: 20px;
`;

export const rightSide = styled.div`
    flex: 1;
    background-color: #f5f4f4;
    padding: 20px;
`;