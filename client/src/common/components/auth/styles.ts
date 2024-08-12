import styled from "styled-components";
import { borders, colors, fonts } from "../../styleConstants";
import { DefaultFrame } from "../../styles";
import { absCenter } from "../../mixins";

export const AuthForm = styled(DefaultFrame)`
${absCenter}
width: 300px;
padding: 20px;
text-align: center;
border-radius: ${borders.radius.medium};
`;

export const AuthChangeButton = styled('p')`
cursor: pointer;
font-size: ${fonts.sizes.smallExtra};
font-weight: ${fonts.weights.regular};
color: ${colors.blue};
`;