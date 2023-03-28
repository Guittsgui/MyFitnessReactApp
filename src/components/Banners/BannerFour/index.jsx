import { StyledBannerFour , StyledBoxFour } from "./style"


const BannerFour = () =>{
    return <StyledBannerFour>
        <h1> Receitas & Inspiração </h1>
        <p> Obtenha receitas aprovadas por nutricionistas e dicas motivacionais de treinos <br/> de especialistas do MyFitnessAPP</p>
        <div className="boxSpace">
            <StyledBoxFour>
                <div className="imgBox">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdiTN5QHuOiWGiI1xHvDh9BFu8nCjWOkcCP62lEOGf-1_VUAsTCHDz0g6OUDKGWtX60is&usqp=CAU" alt="" />
                </div>
                <h2> Diversos Cafés da manhã com menos de 300 kcal.</h2>
                <h3> Blog Receitas MyFitnessApp</h3>
            </StyledBoxFour>


            <StyledBoxFour >
                <div className="imgBox">
                    <img src="https://i.pinimg.com/originals/8d/ba/f9/8dbaf96b01239d45826949f09cf07e09.jpg" alt="" />
                </div>
                <h2> Receitas simples e fáceis para o dia a dia.</h2>
                <h3> Blog Receitas MyFitnessApp</h3>
            </StyledBoxFour>

            <StyledBoxFour>
                <div className="imgBox">
                    <img src="https://www.dicasdemulher.com.br/wp-content/uploads/2021/07/receitas-com-requeijao-00.jpeg" alt="" />
                </div>
                <h2> Uma nova receita a cada semana.</h2>
                <h3> Blog Receitas MyFitnessApp</h3>
            </StyledBoxFour>
        </div>
    </StyledBannerFour>
}

export default BannerFour