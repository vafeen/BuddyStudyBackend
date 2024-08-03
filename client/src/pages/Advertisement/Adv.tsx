import ProfileInfo from "../../common/components/profile-info/ProfileInfo";
import Responses from "../../common/components/responses/Responses";
import { SubTitleChapter } from "../../common/styles";
import { AdvDescText, AdvDescTitle, AdvDescWrapper, AdvTitleWrapper, AdvWrapper } from "./styles";
import { textDesc } from "./text";


export default function Adv() {
    return (
        <AdvWrapper>
            <ProfileInfo />
            <AdvTitleWrapper>
                <SubTitleChapter>Ищу напарника по геймдизайну</SubTitleChapter>
            </AdvTitleWrapper>
            <AdvDescWrapper>
                <AdvDescTitle>Подробнее</AdvDescTitle>
                <AdvDescText>
                    {textDesc}
                </AdvDescText>
            </AdvDescWrapper>
            <Responses />
        </AdvWrapper>
    )
}
