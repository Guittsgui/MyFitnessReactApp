import styled from 'styled-components'

export const StyledBody = styled.div`
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledTitle = styled.h1`
    font-size: 35px;
    border-bottom: 3px solid yellowgreen;
    text-align: center;
    width: 200px;
    margin: 40px auto;
    padding-bottom: 10px;
`;

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    margin-top: 50px
`;

export const StyledErrorMsg = styled.p`
    text-align: center;
    margin-top: 25px;
    color: #b92222;
    font-weight: bolder;
    letter-spacing: 2px;
`;