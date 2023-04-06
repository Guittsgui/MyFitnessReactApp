import * as S from './style'
import { StyledInput } from '../../../components/Input'
import { StyledButton } from '../../../components/Button'
import {useState} from 'react'
import { api } from '../../../api'
import { Link } from 'react-router-dom'


const AdmAddBlogPost = () => {

    const initial= {
        type: '',
        title: '',
        url: '',
        content: ''
    }
    const [counter,setCounter] = useState(0)
    const [data, setData] = useState(initial)
    const [errorMsg,setErrorMsg] = useState('')
    const [acceptMsg, setAcceptMsg] = useState('')


    function handleChange(e){
        const {name, value} = e.target
        setData((prev) => {
            const newData = {...prev, [name]: value}
            return newData
        })
        setCounter(data.content.length + 1)
        setErrorMsg('')
    }

    async function handleSubmit(){
        if(!data.title || !data.url || !data.content || 
            !data.type || data.type === 'Selecione'){
            setErrorMsg('Preencha todos os Campos.')
        }  
        const {msg} = await api.addNewPost(data)
        setData(initial)
        setCounter(0)
        setAcceptMsg(msg)
    }


    return <S.Body>
        <S.container>
            {!acceptMsg &&
            <>
                <h2> New Post</h2>
                {errorMsg && <p className='danger'> Preencha todos os Campos </p>}
                <div>
                <p> Selecione o tipo do Post: </p>
                    <select onChange={handleChange} name='type' value={data.type}>
                        <option> Selecione</option>
                        <option value="Receitas"> Receitas </option>
                        <option value="Fitness" > Fitness </option>
                    </select>
                </div>

                <StyledInput placeholder='Infome o Título da notícia :'
                onChange={handleChange}
                name='title'
                value={data.title}/>

                <StyledInput placeholder='Informe a URL da imagem: '
                onChange={handleChange}
                name='url'
                value={data.url}/>

                <div>
                    <textarea placeholder='Digite aqui o conteúdo do post: '
                    onChange={handleChange}
                    name='content'
                    value={data.content}/>
                    <small> {counter} / 1000 Caracteres</small>
                </div>
                <StyledButton onClick={handleSubmit}> Adicionar Post </StyledButton>                   
            </>              
            }
            {acceptMsg && 
                <S.acceptMsg> 
                    <h2> Post criado com Sucesso! </h2>
                    <Link to="/home"> Voltar para Home </Link>
                </S.acceptMsg>
            }
            

        </S.container>
    </S.Body>

}

export default AdmAddBlogPost