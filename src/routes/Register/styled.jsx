import styled from 'styled-components'


export const StyledBody = styled.div`
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px
`;

export const StyledPercentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 0px auto;
    margin-top: 40px;
    .percentArea{
        height: 10px;
        width: 400px;
        border: 1px solid black;
    }
    .percent{
        height: 8px;
        background-color: yellowgreen;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 35px;
    border-bottom: 3px solid yellowgreen;
    text-align: center;
    width: 200px;
    margin: 40px auto;
    padding-bottom: 10px;
`;

export const StyledErrorMsg = styled.p`
    text-align: center;
    margin-top: 25px;
    color: #b92222;
    font-weight: bolder;
    letter-spacing: 2px;
`;



