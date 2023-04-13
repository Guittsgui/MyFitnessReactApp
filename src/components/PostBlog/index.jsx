import * as S from './style'
import { Link } from 'react-router-dom'

const PostBlog = ({post}) => {

    return <S.PostContainer url={post.url}>
        <div className="leftSide">

        </div>
        <div className="rightSide">
            <h1> {post.title} </h1>
            <h2> Tipo: {post.type} </h2>
            <Link to={`/blog/${post.id}`}> Leia Mais </Link>
            <div>
                <small> 22/04/22</small>
            </div>

        </div>
    </S.PostContainer>
}

export default PostBlog