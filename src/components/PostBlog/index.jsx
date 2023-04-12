import * as S from './style'

const PostBlog = ({post}) => {

    return <S.PostContainer url={post.url}>
        <div className="leftSide">

        </div>
        <div className="rightSide">
            <h1> {post.title} </h1>
            <h2> Tipo: {post.type} </h2>
            <p> Leia mais </p>
            <div>
                <small> 22/04/22</small>
            </div>

        </div>
    </S.PostContainer>
}

export default PostBlog