import styled from "styled-components";
import { fonts } from "../../styleConstants";

export const DualRangeWrapper = styled('div')`
display: flex;
gap: 20px;
`;

export const DualRangeItem = styled('div')`
display: flex;
gap: 5px;
`;

export const DualRangeLabel = styled('label')`
margin: auto 0;
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
`;