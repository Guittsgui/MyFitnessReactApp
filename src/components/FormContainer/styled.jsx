import styled from 'styled-components'

export const StyledFormContainer = styled.div`
    height: 550px;
    width: 500px;
    background-color: #f7f7f7;
    border-radius: 15px;
    box-shadow: 3px 3px 3px #00000083;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px){
        width: 350px;
    }
`;