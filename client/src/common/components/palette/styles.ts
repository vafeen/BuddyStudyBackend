import styled from "styled-components";
import { borders, colors, fonts } from "../../styleConstants";

export const PaletteWrapper = styled('div')`
display: flex;
gap: 5px;
`;

export const PaletteLabel = styled('label')`
margin: auto 0 auto 10px;
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
`;

export const PaletteInput = styled('input')`
padding: 2px;
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
color: ${colors.grayDark};
border: ${borders.border.borderGrayDark};
`;