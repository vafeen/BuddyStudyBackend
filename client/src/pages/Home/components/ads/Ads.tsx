import AdsGrid from "../../../../common/components/ads-grid/AdsGrid";
import { SubTitleChapter } from "../../../../common/styles";
import { AdsHeader, AdsWrapper } from "./styles";

export default function Ads() {
    return (
        <AdsWrapper>
            <AdsHeader>
                <SubTitleChapter>Доступные обьявления</SubTitleChapter>
            </AdsHeader>
            <AdsGrid />
        </AdsWrapper>
    )
}
