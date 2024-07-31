import AdsCard from "../../../../common/components/ads-card/AdsCard";
import { SubTitleChapter } from "../../../../common/styles";
import { AdsHeader, AdsWrapper } from "./styles";

export default function Ads() {
    return (
        <AdsWrapper>
            <AdsHeader>
                <SubTitleChapter>Доступные обьявления</SubTitleChapter>
            </AdsHeader>
            <AdsCard />
        </AdsWrapper>
    )
}
