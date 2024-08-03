import { DefaultInput } from "../../styles";
import { DualRangeItem, DualRangeLabel, DualRangeWrapper } from "./styles";

export default function DualRange() {
    return (
        <DualRangeWrapper>
            <DualRangeItem>
                <DualRangeLabel>От</DualRangeLabel>
                <DefaultInput defaultValue={0} />
            </DualRangeItem>

            <DualRangeItem>
                <DualRangeLabel>До</DualRangeLabel>
                <DefaultInput defaultValue={100} />
            </DualRangeItem>
        </DualRangeWrapper>
    )
}
