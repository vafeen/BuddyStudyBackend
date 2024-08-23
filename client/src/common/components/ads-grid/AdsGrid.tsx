import { useGetAdsQuery } from "../../../store/reducers/ads/adsApi";
import AdsCard from "../ads-card/AdsCard";
import { AdsGridWrapper } from "./styles";

export default function AdsGrid() {
    const {data: ads} = useGetAdsQuery();

    return (
        <AdsGridWrapper>
            {ads && ads.map((elem) => <AdsCard key={elem.id} adv={elem} />)}
        </AdsGridWrapper>
    )
}
