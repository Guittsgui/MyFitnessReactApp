import { StyledBannerTwo , StyledCard} from "./style"
import {AiOutlineUserAdd, AiOutlineOrderedList} from "react-icons/ai";
import{CgGym} from "react-icons/cg"


const BannerTwo = () =>{
    return <StyledBannerTwo> 
        <h2> Como o MyFitnessApp Funciona ? </h2>
        <h3> - Simples, Rápido e Prático - </h3>
        <div className="cards">
            <StyledCard> 
                <h3> Cadastro </h3>       
                <AiOutlineUserAdd size={80} style={{color: "green"}}/>              
                <p> Aqui é o nosso primeiro contato. Local onde você embarca em nossa nave e passamos a lhe conhecer melhor.</p>
            </StyledCard>
            <StyledCard> 
                <h3> Montagem </h3>
                <AiOutlineOrderedList size={80} style={{color: "green"}}/>
                <p> Aqui o processo está nas mãos de nossos profissionais. Local onde irão estudar os seus dados e montar sua jornada.</p>
            </StyledCard>
            <StyledCard> 
               <h3> Pronto </h3>
                <CgGym size={80} style={{color: "green"}}/>
                <p> Tudo pronto. Aqui você estará com seu programa completo em mãos, detalhadamente explicado e pronto para por em prática.</p>
            </StyledCard>
        </div>
    </StyledBannerTwo>
}

export default BannerTwo