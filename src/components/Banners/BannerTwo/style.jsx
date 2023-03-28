import styled from "styled-components";

export const StyledBannerTwo = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        color: yellowgreen;
        font-size: 50px;
        letter-spacing: 1px;
        text-align: center;
        text-shadow: .5px .5px .5px black;
    }
    h3{
        font-size: 25px;
        margin-bottom: 50px;
        font-weight: 100;
        font-size: 20px;
    }
    .cards{
        display: flex;
        gap: 40px;

        h3{
            font-weight: bold;         
        }
    }

    @media (max-width: 800px){
        height: 900px;
        .cards{
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }

    }

    @media (max-width: 500px){
        height: 1300px;
        gap: 30px;
        h2{
            font-size: 35px;
        }
        .cards{
            flex-direction: column;
            gap: 30px;
        }
    }



`;

export const StyledCard = styled.div`
    height: 300px;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    p{
        font-size: 18px;
        color: black;
        text-align: center;
        margin-top: 10px;
    }
    h3{
        color: green;
        font-size: 25px;
        margin-bottom: 10px;
    }


    
`;
