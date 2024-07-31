import styled from "styled-components";
import { DefaultFrame } from "../../styles";
import { borders, colors, fonts, transitions } from "../../styleConstants";
import { defaultHover } from "../../mixins";


export const HeaderWrapper = styled(DefaultFrame)`
height: 50px;
display: flex;
justify-content: space-between;
padding: 0 20px;
border-radius: ${borders.radius.big};
`;

export const Logo = styled('p')`
margin: auto 0;
font-size: ${fonts.sizes.logo};
`;

export const HeaderDetails = styled('div')`
display: flex;
gap: 30px;
`;

export const HeaderDetailsProfile = styled('div')`
margin: auto 0;
display: flex;
gap: 5px;
`;

export const HeaderAvatar = styled('div')`
height: 30px;
width: 30px;
border: ${borders.border.defaultFrame};
border-radius: ${borders.radius.circle};
`;

export const HeadetButtonExit = styled('button')`
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
transition: ${transitions.fast};

&:hover {
    color: ${colors.grayDark};
}
`;
