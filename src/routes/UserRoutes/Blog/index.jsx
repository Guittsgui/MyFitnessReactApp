import * as S from './style'
import PostBlog from '../../../components/PostBlog'
import { useEffect, useState } from 'react'
import {api} from '../../../api'




const Blog = () => {

    const [filterState, setFilterState] = useState('Todos')
    const [listPosts, setListPosts] = useState([])
    const [filterList, setFilterList] = useState([])

    useEffect(()=>{
        async function loadPosts(){           
            const postList = await api.getAllPosts()
            setListPosts(postList)
        }
        loadPosts()
    },[])

    function handleChange(e){
        setFilterState(e.target.value)   
 
        
    }

    return <S.Body>
        <S.Menu>
            <select name="" id="" onChange={handleChange}>
                <option value="Todos"> Todos </option>
                <option value="Receitas"> Receitas </option>
                <option value="Fitness"> Fitness </option>
            </select>
        </S.Menu>
        
        {listPosts.length === 0 && 
            <p> Não possuímos nenhum Post no momento.</p>
        }
        {listPosts.map((post)=>(
            <PostBlog key={post.id} post={post}/>
        ))}
    </S.Body>
}
export default Blog