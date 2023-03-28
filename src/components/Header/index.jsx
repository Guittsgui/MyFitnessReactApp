import { StyledHeader } from "./style" 
import { NavLink, Link } from "react-router-dom"

const Header = () =>{

    return <StyledHeader>
            <div className="logo">
                <Link to="/"> <h2> MyFitnessApp</h2></Link>        
            </div>
            <div className="menu">
                <NavLink to="/login">
                    <button> Entrar </button>
                    </NavLink>
                <NavLink to="/register"> 
                    <button> Registrar </button> 
                </NavLink>             
            </div> 
    </StyledHeader>

}

export default Header