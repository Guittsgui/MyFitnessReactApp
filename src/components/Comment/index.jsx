import * as S from './style'
import {CiCircleRemove} from 'react-icons/ci'

const Comment = () => {

        return <S.Container>
            <div className="leftside">

            </div>
            <div className="rightside">
                <div className="info">
                    <div className='name'>
                        <h3> Name: </h3>
                        <p> Maria Jorgina </p>
                    </div>
                    <div className='name'>
                        <h3> Email: </h3>
                        <p> maria@maria.com.br </p>
                    </div>
                </div>
                <div className='comment'>
                    <p> Testando muit muito muit muito muito muitomuit muito muito muitomuit muito muito muitomuit muito muito muitomuit muito muito muitomuit muito muito muitomuit muito muito muitomuit muito muito </p>
                </div>
                <div className="remove">
                    <small>25/04/2023</small>
                    <button> <CiCircleRemove size={20}/> </button>
                </div>

            </div>
        </S.Container>

}

export default Comment