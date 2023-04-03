import { StyledHeader } from "./style" 
import { NavLink, Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

const Header = () =>{

    const auth = useContext(AuthContext)

    function handleLogout(){
        auth.signOut()
    }


    return <StyledHeader>
            <div className="logo">
                <Link to="/"> <h2> MyFitnessApp</h2></Link>        
            </div>
  
            <nav>
                {!auth.user &&
                  <>
                    <NavLink to="/login">
                        Entrar 
                    </NavLink>
                    <NavLink to="/register"> 
                        Registrar 
                    </NavLink>      
                  </> 
                }
                {auth.user &&
                    <NavLink to="/" onClick={handleLogout}> Logout </NavLink>
                }             
            </nav>   
    
    </StyledHeader>

}

export default Header