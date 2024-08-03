import AdsCard from "../../common/components/ads-card/AdsCard";
import Header from "../../common/components/header/Header";
import { AdsAllGrid, AdsAllTitle, AdsAllTitleWrapper, AdsAllWrapper } from "./styles";

export default function AdsAll() {
    return (
        <AdsAllWrapper>
            <Header />
            <AdsAllTitleWrapper>
                <AdsAllTitle>Все обьявления</AdsAllTitle>
            </AdsAllTitleWrapper>
            <AdsAllGrid>
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
                <AdsCard />
            </AdsAllGrid>
        </AdsAllWrapper>
    )
}
