import * as S from './style'
import {StyledInput} from './../../components/Input'
import {StyledButton} from './../../components/Button'
import { useState } from 'react'
import { calculaImc } from '../../utils/imcData'

const ImcCalculator = () => {

    const init = {
        height: '',
        weight: ''
    }
    const [data,setData] = useState(init)

    function handleChange(e){
        const {name,value} = e.target
        setData((prev) => {
            const newData = {...data, [name]: value}
            return newData
        })
    }
    function handleSubmit(){
        const imc =  calculaImc(data.height, data.weight)
        console.log(imc)
    }

    return <S.Body>
        <S.container>
            <S.leftSide>
                <S.textContainer>
                    <h2> O que é o IMC </h2>
                    <p> O IMC é um cálculo simples que permite medir se alguém está ou não com o peso ideal. Ele aponta se o peso está adequado ou se está abaixo ou acima do peso.</p>
                </S.textContainer>
                <StyledInput placeholder='Informe seu Peso. Ex: 50 kg'
                value={data.peso}
                onChange={handleChange}
                name="weight"
                type="number"/>

                <StyledInput placeholder='Informe sua Altura. Ex: 1.8'
                value={data.altura}
                onChange={handleChange}
                name="height"
                type="number"/>

                <StyledButton onClick={handleSubmit}> Calcular </StyledButton>
            </S.leftSide>
            <S.rightSide>

            </S.rightSide>
        </S.container>
    </S.Body>
}

export default ImcCalculator