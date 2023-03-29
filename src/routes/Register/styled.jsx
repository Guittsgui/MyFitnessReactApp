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

    @media (max-width: 500px){
        width: 400px;
    }

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
        padding: 10px;
    }
    .container{
        height: 10px;
        width: 350px;
        border: 1px solid black;
    }
    .percent{
        background-color: yellowgreen;
        height: 8px;
    }
    
`;

export const StyledBanner = styled.div`
    flex:1 ;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(220,253,45,0.9724264705882353) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: 1px 1px 1px black;
    gap: 20px;
    box-sizing: border-box;
    text-align: center;
    h1{
        font-size: 35px;
        border-bottom: 1px solid white;
        padding: 10px;
    }
    

    .alignBanner{
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    @media (max-width: 500px){
        display: none;
    }
`;

