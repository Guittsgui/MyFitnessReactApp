import styled from 'styled-components'

export const StyledButton = styled.button`
    width: 300px;
    height: 30px;
    outline: none;
    border-radius: 20px;
    border: 1px solid black;
    cursor: pointer; 
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(220,253,45,0.9724264705882353) 100%);
    color: white;
    letter-spacing: 2px;
    margin-top: 60px;
    
    &:hover{
        background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(220,253,45,0.40800070028011204) 100%);
    }
    &:disabled{
        background: linear-gradient(0deg, rgba(106,106,106,1) 0%, rgba(149,149,149,0.40800070028011204) 100%);
        cursor: inherit;
    }




`;