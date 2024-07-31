import AdsCard from "../ads-card/AdsCard";
import { AdsGridWrapper } from "./styles";

const list = [...Array(10).keys()]

export default function AdsGrid() {
    return (
        <AdsGridWrapper>
            {list.map((elem) => <AdsCard key={elem} />)}
        </AdsGridWrapper>
    )
}
