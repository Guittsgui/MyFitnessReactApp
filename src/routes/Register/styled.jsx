import styled from 'styled-components'


export const StyledBody = styled.div`
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledRegisterContainer = styled.div`
    height: 600px;
    width: 900px;
    display: flex;
    box-shadow: 3px 3px 3px #00000050;

`;

export const StyledFormArea = styled.form`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    h2{
        font-size: 30px;
        border-bottom: 3px solid yellowgreen;
        margin-bottom: 30px;
    }
    
`;

export const StyledBanner = styled.div`
    flex:1 ;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(220,253,45,0.9724264705882353) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    text-shadow: 1px 1px 1px black;
    gap: 20px;
    box-sizing: border-box;
    text-align: center;
   
`;

