import styled from 'styled-components'



export const container = styled.div`
    height: 50px;
    width: 650px;
    background-color: ${(props) => (props.gender === 'male' ? "#bedbf3" : "#ffc5cf")};
    border: 1px solid black;
    margin: 20px 0px;
    border-radius: 15px;
    border: none;
    box-shadow: 2px 2px 2px #0000007a;
    display: flex;
    align-items: center;
    justify-content: space-between;
    letter-spacing: 1px;
    padding: 0px 45px;
    color: ${(props) => (props.gender === 'male' ? "darkblue" : "#b84054")};
    p{
        color: ${(props) => (props.gender === 'male' ? "darkblue" : "#b84054")};
    }

    a{
        color: ${(props) => (props.gender === 'male' ? "darkblue" : "#b84054")};
        cursor: pointer;
        &:hover{
            color: ${(props) => (props.gender === 'male' ? "#5ba7e6" : "#b8818a")};
        }
    }

    span{
        font-weight: bolder;
    }
`;

