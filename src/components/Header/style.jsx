import styled from 'styled-components'

export const StyledHeader = styled.header`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        text-decoration: none;
        color: yellowgreen;
    }
    .logo{
        margin-left: 25px;
        a{
            font-size: 25px;
        }
    }
    nav{
        a{
            margin-right: 30px;
            font-size: 20px;
            border: 1px solid yellowgreen;
            padding: 10px;
            border-radius: 20px;

            &:hover{
                color: darkgreen;
                border-color: darkgreen;
            }
        }
    }
    .active{
        color: darkgreen;
        border-color: darkgreen;
    }

    @media (max-width: 500px){
        .logo{
            margin-left: 10px;
            a{
                font-size: 18px;
            }
        }

        nav{
            a{
                margin-right: 10px;
                font-size: 15px;
            }
        }

    }
`;

;