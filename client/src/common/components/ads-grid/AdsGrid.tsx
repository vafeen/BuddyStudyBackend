import { useGetAdsQuery } from "../../../store/reducers/ads/adsApi";
import AdsCard from "../ads-card/AdsCard";
import { AdsGridWrapper } from "./styles";

// ToDO
export default function AdsGrid() {
    // const filters = useAppSelector(state => state.filtersReducer);
    // const ads = useAppSelector(state => state.adsReducer);
    // const {setAds} = useActions();

    // useEffect(() => {
    //     setAds(adsApi || []);
    // }, [adsApi]);

    const {data: ads} = useGetAdsQuery();

    return (
        <AdsGridWrapper>
            {ads && ads.map((elem) => <AdsCard key={elem.id} adv={elem} />)}
        </AdsGridWrapper>
    )
}
