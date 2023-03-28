import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 200px;
    background-color: black;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ul{
        display: flex;
        gap: 40px;
    }
    li{
        list-style: none;
        cursor: pointer;
        margin-bottom: 30px;
    }
    small{
        letter-spacing: 2px;
        margin-bottom: 5px;
    }

    @media (max-width: 500px){
        small{
            font-size: 10px;
        }
    }

`;