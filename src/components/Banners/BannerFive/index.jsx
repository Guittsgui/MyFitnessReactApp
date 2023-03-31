import * as C from "./style"
import {AiOutlineWhatsApp} from 'react-icons/ai'


const BannerFive = () => {

    return <C.StyledBannerFive>
        <C.StyledContainer>
            <h2> Benefícios Exclusivos <AiOutlineWhatsApp/></h2>
            <p> O único programa com suporte todos os dias no whatzap.
             Aqui a qualquer momento você consegue se comunicar com algum de nossos instrutores via email ou whatzap. Todas suas dúvidas serão sanadas em até duas horas.  </p>
            <button> Suporte </button>
        </C.StyledContainer>
    </C.StyledBannerFive>

}

export default BannerFive