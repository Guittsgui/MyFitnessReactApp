import styled from 'styled-components'

export const Body = styled.div`
    min-height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Container = styled.div`
    width: 500px;
    min-height: 300px;
    background-color: #f5f4f4;
    box-shadow: 2px 2px 2px #00000075;
    border-radius: 10px;
    margin: 20px;
`;
export const TitleContainer = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    background-image: url('${(props) => (props.url)}');
    background-position: center;
    background-size: cover;
    height: 200px;
    width: 96%;
    margin: 0 auto 40px auto;

`;

export const ContentContainer = styled.div`
    width: 400px;
    background-color: aliceblue;
    margin: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 2px 2px 2px #00000075;
`;