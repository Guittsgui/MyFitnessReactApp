import styled from 'styled-components'


export const BannerOne = styled.section`   
        height: 700px;
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
`;
export const BannerTwo = styled.section`
    height: 700px;
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

export const BannerThree = styled.section`
    height: 700px;
    background-image: url('https://media.istockphoto.com/id/497407874/pt/foto/fundo-de-alimentos-saud%C3%A1veis.jpg?s=1024x1024&w=is&k=20&c=s0L77tKArhY51eAjQi1_gcttUdy36nBJXKim2mZUMhs=');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    color: white;
    
    h1{
        text-shadow: 2px 2px 2px black;
        font-size: 50px;
    }
   
   .box{
       background-color: #000000c8;
       height: 400px;
       width: 400px;
       border-radius: 20px;
       display: flex;
       justify-content: center;
       font-size: 25px;
       box-shadow: 2px 2px 2px black;
       color: white;

       ul{
           display: flex;
           flex-direction: column;
           justify-content: center;
           gap: 20px;
           text-align: left;
       }   
   }
   @media (max-width: 500px){
       height: 600px;
        h1{
            text-align: center;
            font-size: 38px;
        }
        .box{
            width: 350px;
        }
   }
`;

export const BannerFour = styled.section`
    .boxSpace{
        display: flex;
        gap: 20px;
    }
    height: 700px;
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

export const BannerFive = styled.section`
    color: white;
    height: 700px;
    background-image: url('https://guiadafarmacia.com.br/wp-content/uploads/2022/04/atividade-fisica.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width: 500px){
        align-items: center;
        padding: 10px;
    }
`;
export const StyledContainer = styled.div`
    color: black;
    width: 500px;
    background-color: #ffffffb0;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px black;
    margin-right: 80px;
    word-spacing: 7px;

    @media (max-width: 500px){
        margin-right: 0px;
    }
    
    h2{
        font-size: 35px;
        color: yellowgreen;
        text-shadow: 1px 1px 1px black;
    }

    button{
        width: 140px;
        height: 40px;
        border-radius: 15px;
        border-color: transparent;
        background-color:  #aaf80f ;
        color: white;
        letter-spacing: 2px;
        box-shadow: 2px 2px 2px #00000086;
        text-shadow: 1px 1px 1px black;
        cursor: pointer;
        &:hover{
            background-color: yellowgreen;
        }
    }
`;

export const BannerSix = styled.section`
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 35px;
    h2{
        font-size: 35px;
        letter-spacing: 2px;
        color: yellowgreen;
        text-shadow: 1px 1px 1px black;
        text-align: center;
    }
    .emailContainer{
        height: 500px;
        width: 700px;
        border: 3px solid yellowgreen;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 25px;
    }
    input{
        width: 350px;
        height: 30px;
        border-radius: 40px;
        border: 2px solid yellowgreen;
        text-align: center;
        outline: none;
    }
    textarea{
        height: 200px;
        width: 450px;
        text-align: justify;
        outline: none;
        border: 2px solid yellowgreen;
        padding: 10px;
    }
    button{
        width: 200px;
        height: 35px;
        border-radius: 10px;
        border: 2px solid yellowgreen;
        letter-spacing: 2px;
        cursor: pointer;
        &:hover{
            background-color: yellowgreen;
            color: white;
        }
    }
    p{
        color: red;
        font-weight: bolder;
        letter-spacing: 2px;
        font-size: 14px;
    }

`;


export const BannerEight = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;


    h1{
        font-size: 60px;
        border-bottom: 3px solid yellowgreen;
        margin: 40px 0;
    }
`;