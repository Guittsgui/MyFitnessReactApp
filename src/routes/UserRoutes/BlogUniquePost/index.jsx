import * as S from './style'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {api} from './../../../api'

const BlogUniquePost = () => {

        const {id} = useParams()
        const [post, setPost] = useState({})

        useEffect(()=>{
            async function loadPost(){
                const postById = await api.getPostById(id)
                setPost(postById)

            }

            loadPost()
        },[])

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
            <h2> Comentários: </h2>
        </S.Body>

}

export default BlogUniquePost