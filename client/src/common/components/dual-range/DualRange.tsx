import { ChangeEvent } from "react";
import { DefaultInput } from "../../styles";
import { DualRangeItem, DualRangeLabel, DualRangeWrapper } from "./styles";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useActions } from "../../../store/actions";

export default function DualRange() {
    const { minAge, maxAge } = useAppSelector(state => state.filtersReducer);
    const { setAgesFilter } = useActions();

    const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAgesFilter([Number(e.target.value), Number(maxAge)])
    }

    const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAgesFilter([Number(minAge), Number(e.target.value)])
    }

    return (
        <DualRangeWrapper>
            <DualRangeItem>
                <DualRangeLabel>От</DualRangeLabel>
                <DefaultInput type="number" step="1" value={minAge} onChange={handleMinChange} />
            </DualRangeItem>

            <DualRangeItem>
                <DualRangeLabel>До</DualRangeLabel>
                <DefaultInput type="number" step="1" value={maxAge} onChange={handleMaxChange} />
            </DualRangeItem>
        </DualRangeWrapper>
    )
}
