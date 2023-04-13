import * as S from './style'
import { useParams } from 'react-router-dom'
import { useEffect, useState , useContext} from 'react'
import { AuthContext } from '../../../contexts/Auth/AuthContext'
import {api} from './../../../api'
import Comment from '../../../components/Comment'
import {StyledInput} from './../../../components/Input'
import {StyledButton} from './../../../components/Button'


const BlogUniquePost = () => {
        const auth = useContext(AuthContext)
        const {id} = useParams()
        const [post, setPost] = useState({})
        const [comments, setComments] = useState([])
        const [input, setInput] = useState('')

        useEffect(()=>{
            async function loadPost(){
                const postById = await api.getPostById(id)
                setPost(postById)
            }

            async function loadComments(){
                const commentsByPost = await api.getCommentsByPostId(id)
                setComments(commentsByPost)
            }

            loadPost()
            loadComments()
        },[])
        
        async function handleSubmit(){
           if(!input){
               return
           }
           const date = new Date()
           const newComment = {
               userId: auth.user.id,
               postId: id,
               content: input,
               date: date
           }
           const response = await api.addNewComment(newComment)
           setInput('')
        }

        return <S.Body>
            <S.Container>
                <S.TitleContainer>
                    <h1> {post.title} </h1>
                </S.TitleContainer>
                <S.ImageContainer url={post.url} >

                </S.ImageContainer>
                <S.ContentContainer>
                    {post.content}
                </S.ContentContainer>
            </S.Container>

            <S.AddCommentContainer>
                <StyledInput placeholder='Adicione seu Comentário...'
                value={input}
                onChange={(e)=>(setInput(e.target.value))}/>
                <StyledButton onClick={handleSubmit}>Adicionar + </StyledButton>
            </S.AddCommentContainer>

            <h2> Comentários: </h2>
            {comments.length === 0 && <p className='nocoment'> Esse post não possui nenhum Comentário.</p>}
            
            {comments.map((comment)=>(
                <Comment key={comment.id} comment={comment}/>
            ))}

           
        </S.Body>

}

export default BlogUniquePost