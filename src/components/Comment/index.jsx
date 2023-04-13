import * as S from './style'
import {CiCircleRemove} from 'react-icons/ci'
import { useEffect, useState } from 'react'
import {api} from '../../api'

const Comment = ({comment}) => {

    const [user,setUser] = useState('');

    useEffect(()=>{
        async function loadUser(){
            const newUser = await api.getUserByID(comment.userId)
            setUser(newUser)

        }
        console.log(user)
        loadUser()
    },[])


        return <S.Container>
            <div className="leftside">

            </div>
            <div className="rightside">
                <div className="info">
                    <div className='name'>
                        <h3> Name: </h3>
                        <p> {user.name} </p>
                    </div>
                    <div className='name'>
                        <h3> Email: </h3>
                        <p> {user.email} </p>
                    </div>
                </div>
                <div className='comment'>
                    <p> " {comment.content} "</p>
                </div>
                <div className="remove">
                    <small>{comment.date}</small>
                    <button> <CiCircleRemove size={20}/> </button>
                </div>

            </div>
        </S.Container>

}

export default Comment