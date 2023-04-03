import { StyledFooter } from "./style"
import {BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'

const Footer = () =>{
    return <StyledFooter> 
            <small> Contacts: </small>
            <ul>
                <li><BsInstagram size={40} style={{color: "#c327f3"}}/></li>
                <li><BsLinkedin size={40} style={{color: "blue"}}/></li>
                <li><BsGithub  size={40} style={{color: "white"}}/></li>
            </ul>
            <small> Dev: Guilherme Tavares </small>
            <small> Projeto realizado exclusivamente para fins Acadêmicos. </small>
    </StyledFooter>
}

export default Footer