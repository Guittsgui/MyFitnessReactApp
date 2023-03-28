
import { questList } from "../../utils/questList"
import { StyledAccord } from "./style"
import { useState } from "react"
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'

const Accordion = ({item}) => {

    const [visible, setVisible] = useState(false)


    return <StyledAccord>
        <div className="container">
            <div className="titleBox" onClick={()=> setVisible(!visible)}>
                <h2> {item.question}</h2>
                {visible ? <AiOutlineMinusCircle size={30}/> : <AiOutlinePlusCircle size={30}/>}
            </div>
            {visible &&
                <div className="bodyBox">
                    <p> {item.aswner}</p>
                </div>
            }

        </div>
    </StyledAccord>

}

export default Accordion