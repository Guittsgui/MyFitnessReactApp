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
    background-color: #f0f0f0;
    border-radius: 15px;
    box-shadow: 2px 2px 2px #00000075;
`;
export const header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const noDietContainer = styled.div`
    border: 2px solid green;
    padding: 20px;
    text-align: center;
    color: green;
    font-weight: bolder;
    letter-spacing: 1px;
    word-spacing: 2px;
`;