import * as S from './style'
import PostBlog from '../../../components/PostBlog'
const FoodBlog = () => {
    return <S.Body>
        <S.Menu>
            <select name="" id="">
                <option value=""> Todos </option>
                <option value=""> Receitas </option>
                <option value=""> Fitness </option>
            </select>
        </S.Menu>
        <PostBlog/>
        <PostBlog/>
        <PostBlog/>
        <PostBlog/>
        <PostBlog/>
        <PostBlog/>
        <PostBlog/>
        <PostBlog/>
    </S.Body>
}
export default FoodBlog