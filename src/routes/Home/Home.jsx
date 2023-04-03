import React from 'react'
import * as S from './style'
import {AiOutlineUserAdd, AiOutlineOrderedList, AiOutlineWhatsApp} from "react-icons/ai";
import{CgGym} from "react-icons/cg"
import {StyledInput} from './../../components/Input'
import {useState} from 'react'
import {isEmailValid} from './../../utils/isEmailValid'


function Home() {

  const fields = {
    email: '',
    title: '',
    message: ''
  }
  const [error,setError] = useState('')
  const [data, setData] = useState(fields)

  function handleSubmitContact(){
    if(data.email ){
      setError('Preencha todos os Campos')
      return
    }
    if(!isEmailValid(data.email)){
      setError('Insira um Email Válido')
      return
    }
    alert('oi')
  }


  function handleChangeFields(e){
    setError('')
    const {name, value} = e.target
    setData((prev) => {
      const newData = {...prev, [name]: value}
      return newData
    }) 

    console.log(data)
  }




  return (
    <>
          <S.BannerOne>
              <h1> O Seu Guia Definitivo</h1>
              <h2> Para uma vida Saudável</h2>
              <ul>
                <li> Treino </li>
                <li> Dieta </li>
                <li> Notícias </li>
                <li> Receitas </li>
                <li> Dados Precisos </li>
              </ul>
              <h3> Tudo em um só Lugar </h3>
          </S.BannerOne>

          <S.BannerTwo>
          <h2> Como o MyFitnessApp Funciona ? </h2>
          <h3> - Simples, Rápido e Prático - </h3>
          <div className="cards">
              <S.StyledCard> 
                  <h3> Cadastro </h3>       
                  <AiOutlineUserAdd size={80} style={{color: "green"}}/>              
                  <p> Aqui é o nosso primeiro contato. Local onde você embarca em nossa nave e passamos a lhe conhecer melhor.</p>
              </S.StyledCard>
              <S.StyledCard> 
                  <h3> Montagem </h3>
                  <AiOutlineOrderedList size={80} style={{color: "green"}}/>
                  <p> Aqui o processo está nas mãos de nossos profissionais. Local onde irão estudar os seus dados e montar sua jornada.</p>
              </S.StyledCard>
              <S.StyledCard> 
                <h3> Pronto </h3>
                  <CgGym size={80} style={{color: "green"}}/>
                  <p> Tudo pronto. Aqui você estará com seu programa completo em mãos, detalhadamente explicado e pronto para por em prática.</p>
              </S.StyledCard>
            </div>
          </S.BannerTwo>

          <S.BannerThree>
            <h1> O que está Incluso ? </h1>
            <div className="box">
              <ul>
                  <li> Treino Completo </li>
                  <li> Dieta Personalizada </li>
                  <li> Calculo de IMC </li>
                  <li> Blog de Receitas </li>
                  <li> Notícias  Fitness </li>
                  <li> Playlist's Especiais </li>
                  <li> Suporte Whatzapp</li>            
              </ul>
            </div>
          </S.BannerThree>

          <S.BannerFour>
          <h1> Receitas & Inspiração </h1>
              <p> Obtenha receitas aprovadas por nutricionistas e dicas motivacionais de treinos <br/> de especialistas do MyFitnessAPP</p>
              <div className="boxSpace">
                  <S.StyledBoxFour>
                      <div className="imgBox">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdiTN5QHuOiWGiI1xHvDh9BFu8nCjWOkcCP62lEOGf-1_VUAsTCHDz0g6OUDKGWtX60is&usqp=CAU" alt="" />
                      </div>
                      <h2> Diversos Cafés da manhã com menos de 300 kcal.</h2>
                      <h3> Blog Receitas MyFitnessApp</h3>
                  </S.StyledBoxFour>


                  <S.StyledBoxFour >
                      <div className="imgBox">
                          <img src="https://i.pinimg.com/originals/8d/ba/f9/8dbaf96b01239d45826949f09cf07e09.jpg" alt="" />
                      </div>
                      <h2> Receitas simples e fáceis para o dia a dia.</h2>
                      <h3> Blog Receitas MyFitnessApp</h3>
                  </S.StyledBoxFour>

                  <S.StyledBoxFour>
                      <div className="imgBox">
                          <img src="https://www.dicasdemulher.com.br/wp-content/uploads/2021/07/receitas-com-requeijao-00.jpeg" alt="" />
                      </div>
                      <h2> Uma nova receita a cada semana.</h2>
                      <h3> Blog Receitas MyFitnessApp</h3>
                  </S.StyledBoxFour>
              </div>
          </S.BannerFour>

          <S.BannerFive>
            <S.StyledContainer>
            <h2> Benefícios Exclusivos <AiOutlineWhatsApp/></h2>
            <p> O único programa com suporte todos os dias no whatzap.
             Aqui a qualquer momento você consegue se comunicar com algum de nossos instrutores via email ou whatzap. Todas suas dúvidas serão sanadas em até duas horas.  </p>
            <button> Suporte </button>
            </S.StyledContainer>
          </S.BannerFive>

          <S.BannerSix>
            <h2> Ainda não é membro ? <br/> Fale conosco por Aqui</h2>          
            <div className="emailContainer">               
                <input type="email" 
                name='email' 
                placeholder='Informe seu Email' 
                onChange={handleChangeFields} 
                value={data.email}/>

                <input type="text"
                 name='title'
                  placeholder='Sobre o que é sua mensagem ?' 
                  onChange={handleChangeFields} 
                  value={data.title}/>

                <textarea  name='message' 
                placeholder='Digite seu Email'
                 onChange={handleChangeFields}
                value={data.message}/> 
                <button onClick={handleSubmitContact} > Enviar </button>
                {error && <p> Preencha todos os Campos </p>}
            </div>
          </S.BannerSix>

    
    </>
  )
}

export default Home