import styled from "styled-components";
import { borders, colors, transitions } from "../../styleConstants";

export const AdvActionWrapper = styled('div')`
padding: 5px;
border-radius: ${borders.radius.circle};
transition: ${transitions.medium};

&:hover {
    background-color: ${colors.grayAccentTransparent};
}
`;

export const AdvActionImg = styled('img')`
cursor: pointer;
width: 25px;
height: 25px;
`;