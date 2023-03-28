import { StyledHeader } from "./style" 

const Header = () =>{

    return <StyledHeader>
            <div className="logo">
                <h2> MyFitnessApp</h2>
            </div>
            <div className="menu">
                <button> Entrar </button>
                <button> Registrar </button>
            </div> 
    </StyledHeader>

}

export default Header