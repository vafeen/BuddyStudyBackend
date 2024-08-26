;import DualRange from "../../dual-range/DualRange";
import { AdsItemFilters, AdsSubTitleFilters } from "../styles";

export default function AgeFilter() {

    return (
        <AdsItemFilters>
            <AdsSubTitleFilters>Возраст:</AdsSubTitleFilters>
            <DualRange />
        </AdsItemFilters>
    )
}
