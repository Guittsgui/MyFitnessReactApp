import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: white;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        cursor: pointer;
        color: yellowgreen;
        
    }
    .logo {
        
        display: flex;
        align-items: center;
        height: 100px;
        padding-left: 40px;
        font-size: 20px;
        a{
            text-decoration: none;
        }
    }
    .menu{
        button{
            color: yellowgreen;
            background-color: white;
            width: 140px;
            height: 50px;
            margin-right: 30px;
            border: 2px solid yellowgreen;
            border-radius: 15px;
            cursor: pointer;
            &:hover{
                color: darkgreen;
                border-color: darkgreen;             
            }
        }
    }
    
    @media (max-width: 500px){
        .logo{
            font-size: 15px;
            padding-left: 20px;
        }

        .menu{
            button{
                width: 70px;
                height: 35px;
                margin-right: 15px;
            }

        }
    }
`;

;