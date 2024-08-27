import { ChangeEvent } from "react";
import { DefaultInput } from "../../styles";
import { DualRangeItem, DualRangeLabel, DualRangeWrapper } from "./styles";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useActions } from "../../../store/actions";
import { convertYearToAge } from "../../helpers/convertYearToAge";
import { getYearBirth } from "../../helpers/getYearBirth";

export default function DualRange() {
    const {maxYear, minYear} = useAppSelector(state => state.filtersReducer);
    const { setAgesFilter } = useActions();

    const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAgesFilter([minYear, getYearBirth(Number(e.target.value))])
    }

    const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAgesFilter([getYearBirth(Number(e.target.value)), maxYear])
    }

    return (
        <DualRangeWrapper>
            <DualRangeItem>
                <DualRangeLabel>От</DualRangeLabel>
                <DefaultInput
                type="number"
                step="1"
                value={convertYearToAge(maxYear)}
                onChange={handleMinChange} />
            </DualRangeItem>

            <DualRangeItem>
                <DualRangeLabel>До</DualRangeLabel>
                <DefaultInput
                    type="number"
                    step="1"
                    value={convertYearToAge(minYear)}
                    onChange={handleMaxChange} />
            </DualRangeItem>
        </DualRangeWrapper>
    )
}
