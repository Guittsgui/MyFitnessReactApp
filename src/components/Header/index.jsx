import { StyledHeader } from "./style" 
import { NavLink, Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

const Header = () =>{

    const auth = useContext(AuthContext)

    function handleLogout(){
        console.log
        auth.signOut()
    }


    return <StyledHeader>
            <div className="logo">
                {auth.user && <Link to="/home"> <h2> MyFitnessApp</h2></Link> }
                {!auth.user && <Link to="/"> <h2> MyFitnessApp</h2></Link> }        
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
                    <NavLink to="/" onClick={handleLogout} className="logout"> 
                        Logout 
                    </NavLink>
                }             
            </nav>   
    
    </StyledHeader>

}

export default Header