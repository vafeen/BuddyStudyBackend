import styled from "styled-components";
import { borders, colors, fonts, shadows, transitions } from "./styleConstants";
import { defaultHover } from "./mixins";

export const Container = styled('div')`
margin: 0 auto;
width: 1152px;
padding: 15px 15px 0 15px;
`;

export const DefaultFrame = styled('div')`
border: ${borders.border.defaultFrame};
box-shadow: ${shadows.defaultFrame};
`;

export const CreateButton = styled('button')`
padding: 5px 15px;
background-color: ${colors.totalWhite};
border: ${borders.border.borderGrayDark};
border-radius: ${borders.radius.medium};
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
transition: ${transitions.fast};

${defaultHover}
`;