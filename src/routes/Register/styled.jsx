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
    font-size: 15px;
    color: #aaa9a9;
    .percentArea{
        height: 10px;
        width: 400px;
        border: 1px solid #aaa9a9;
        
    }
    .percent{
        height: 8px;
        background-color: yellowgreen;
    }
    
    @media (max-width: 500px){
        width: 300px;
        font-size: 12px;

        .percentArea{
            width: 280px;
        }
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

export const userCreatedMsg = styled.div`
    color: Green ;
    height: 50px;
    padding: 10px;
    text-align: center;
    margin-top: 40%;
    h1{
        font-size: 27px;
        border-bottom: 3px solid green;
        padding-bottom: 5px;
        margin-bottom: 15px;
    }
    p{
        margin-bottom: 20px;
    }
    span{
        font-size: 50px;
        color: yellowgreen;
        text-shadow: 2px 2px 2px black;
    }
    
`;



