import styled from 'styled-components'

export const StyledBannerFour = styled.div`

    .boxSpace{
        display: flex;
        gap: 20px;
    }
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        color: yellowgreen;
        font-size: 50px;
        text-shadow: 1px 1px 1px black;
        margin-bottom: 20px;
        text-align: center;
    }
    p{
        text-align: center;
        margin-bottom: 50px;
    }

    @media (max-width: 500px){
        height: 1200px;

        .boxSpace{
            flex-direction: column;
        }
        h1{
            font-size: 35px;
        }
    }
`;

export const StyledBoxFour = styled.div`
    height: 300px;
    width: 300px;
    border: .5px solid black;
    text-align: center;
   
    .imgBox{
        height: 200px;
        margin-bottom: 10px;

        img{
            height: 200px;
            width: 298px;
        }
    }
    h2{
        font-size: 20px;
        margin-bottom: 10px;
        padding: 2.5px; 
        font-weight: 300;
    }
    h3{
        font-weight: 100;
        margin-bottom: 10px;
        color: darkgreen;
    }

`;