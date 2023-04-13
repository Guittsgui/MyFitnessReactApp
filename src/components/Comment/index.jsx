import * as S from './style'
import {CiCircleRemove} from 'react-icons/ci'
import { useEffect, useState , useContext} from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import {api} from '../../api'

const Comment = ({comment}) => {

    const auth = useContext(AuthContext)
    const [user,setUser] = useState('');

    useEffect(()=>{
        async function loadUser(){
            const newUser = await api.getUserByID(comment.userId)
            setUser(newUser)

        }
        console.log(user)
        loadUser()
    },[])

    async function handleRemoveComment(){
        

    }


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
                    {auth.user.id === comment.userId && 
                        <button onClick={handleRemoveComment}>
                             <CiCircleRemove size={20}/> 
                        </button>                  
                    }                    
                </div>

            </div>
        </S.Container>

}

export default Comment