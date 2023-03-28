import { StyledBannerSix } from "./style"
import { questList } from "../../../utils/questList"
import Accordion from "../../Accordion"

const BannerSix = () => {


    return <StyledBannerSix>
        <h1> FAQ's </h1>
        {questList.map((item) =>(
            <Accordion key={item.id} item={item}/>
        ))}

    </StyledBannerSix>
}

export default BannerSix

