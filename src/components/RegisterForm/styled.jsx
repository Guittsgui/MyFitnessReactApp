import styled from 'styled-components'

export const StyledRForm = styled.form`
    border: 1px solid black;
    width: 500px;
    height: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(34,193,195);
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(220,253,45,0.9724264705882353) 100%); 
    gap: 40px;

    h2{
        color: white;
        font-size: 40px;
        border-bottom: 1px solid white;
        padding-bottom: 10px;
        text-shadow: 2px 2px 2px black;
    }

    button{
        width: 300px;
        height: 30px;
        border-radius: 15px;
        border-color: transparent;
        color: white;
        background-color: #aaf710;
        cursor: pointer;
        &:hover{
            background-color: yellowgreen;
        }
    }
`;