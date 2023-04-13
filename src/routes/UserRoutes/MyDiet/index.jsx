import * as S from './style'
import {useState, useEffect} from 'react'
import {api} from './../../../api'
import { useContext } from 'react'
import {AuthContext} from './../../../contexts/Auth/AuthContext'

const MyDiet = () => {

    const auth = useContext(AuthContext)
    const [diet, setDiet] = useState([])

    useEffect(()=>{
        console.log(auth.user.id)
        async function loadDiet(){
        const dietList = await api.getDietByUserId(auth.user.id)
        setDiet(dietList[0])
        }
        loadDiet()

    },[])


    return <S.Body>
        
        {diet &&
                <S.container>
                <S.header>
                    <h2> Minha Dieta Atual:  </h2>
                </S.header>
                <div>
                    <h2> Objetivo:</h2>
                    <p> {diet.title}</p>
                </div>
                <div>
                    <h2> Dieta a ser Seguiada:</h2>
                    <p> {diet.diet}</p>
                </div>
                <div>
                    <h2> Seguir dieta Até:</h2>
                    <p> {diet.dateExpires}</p>
                    <p> Faltam ainda : X dias para a troca de Planejamento Alimentar.</p>
                </div>         
            </S.container>
        }
        {!diet && 
            <S.noDietContainer>
                <p> Você ainda não possui um Planejamento Alimentar.</p>
                <p> Entre em contato com nossos profissionais para arrumar.</p>
            </S.noDietContainer>
        }

    </S.Body>
}
export default MyDiet