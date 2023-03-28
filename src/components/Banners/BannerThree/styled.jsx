import styled from 'styled-components'

export const StyledBannerThree = styled.div`
    height: 600px;
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

