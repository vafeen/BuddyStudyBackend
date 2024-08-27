import { useEffect } from "react";
import { useActions } from "../../../store/actions";
import { useGetAdsApiMutation } from "../../../store/reducers/ads/adsApi";
import { useAppSelector } from "../../hooks/useAppSelector";
import AdsCard from "../ads-card/AdsCard";
import { AdsGridWrapper } from "./styles";

// ToDO
export default function AdsGrid() {
    const filters = useAppSelector(state => state.filtersReducer);
    const ads = useAppSelector(state => state.adsReducer);
    const {setAds} = useActions();
    const [getAdsApi] = useGetAdsApiMutation();

    const handleGetAds = async () => {
        await getAdsApi(filters).then(res => {
            if (res?.data) setAds(res.data)
        })
    }

    useEffect(() => {
        handleGetAds();
    }, [filters]);

    return (
        <AdsGridWrapper>
            {ads && ads.map((elem) => <AdsCard key={elem.id} adv={elem} />)}
        </AdsGridWrapper>
    )
}
