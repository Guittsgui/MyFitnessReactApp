import { StyledHeader } from "./style" 
import { NavLink, Link } from "react-router-dom"

const Header = () =>{

    return <StyledHeader>
            <div className="logo">
                <Link to="/"> <h2> MyFitnessApp</h2></Link>        
            </div>
  
            <nav>
                <NavLink to="/login">
                     Entrar 
                </NavLink>
                <NavLink to="/register"> 
                        Registrar 
                </NavLink>   
            </nav>   
    
    </StyledHeader>

}

export default Header