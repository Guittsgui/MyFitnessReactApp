import styled from "styled-components";

export const StyledBannerOne = styled.div`
    
    .banner{
        height: 600px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-shadow: 3px 3px 3px black;
        gap: 40px;
        letter-spacing: 3px;
        text-align: center;
        font-weight: bolder;
        background-image: url('https://images.creativemarket.com/0.1.0/ps/7756675/1820/1213/m1/fpnw/wm1/d9xadh26gbufqy2wdye0eic3lpyz49ibhzrjfqmy4xqwebpjiox1plwtsiqhsjtc-.jpg?1581597619&s=95133beba70aa517244b3b92183c236a');
        background-position: center;
        background-size: cover;
        h1{
            font-size: 60px;
            border-bottom: 2px solid white;
            padding-bottom: 10px;
            margin-top: 200px;
        }
        h2{
            font-size: 40px;
        }
        h3{
            font-size: 30px;
        }
        ul{
            display: flex;
            gap: 40px;
            font-size: 20px;
            color: greenyellow;
            text-shadow: 4px 4px 4px black;
        }
        ul li{
            text-align: center;
        }



        @media (max-width: 750px){
            height: 700px;
            ul{
                width: 400px;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;  
            }
            h3{
                margin-bottom: 30px;
            }
        }

        @media (max-width: 500px) {
            height: 800px;

            ul{
           width: 300px;
           flex-wrap: wrap;
           display: flex;
           align-items: center;
           justify-content: center;          
        }
        }


    }
`;



