import * as S from './style'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react'
import {api} from '../../api'

const AdmAddWorkout = () => {
    
    const {id} = useParams()

    useEffect(()=> {
        const loadUser = async () =>{
            const newUser = await api.getUserByID(id)
            setUsuario(newUser)
            console.log(newUser)
        }
        loadUser()    
    },[])

    
    return <S.Body>
        <h1> Add Workout  </h1>
        
    </S.Body>


}

export default AdmAddWorkout