import styled from "styled-components";
import { borders, colors, fonts } from "../../styleConstants";

export const TagsWrapper = styled('div')`
display: flex;
flex-wrap: wrap;
gap: 5px;
`;

export const TagWrapper = styled('p')`
padding: 2px;
background-color: ${colors.totalWhite};
border: ${borders.border.defaultFrame};
border-radius: ${borders.radius.small};
font-size: ${fonts.sizes.smallExtra};
font-weight: ${fonts.weights.regular};
`;