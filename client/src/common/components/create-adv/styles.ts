import styled from "styled-components";
import { DefaultFrame } from "../../styles";
import { borders, colors, fonts } from "../../styleConstants";
import { absCenter } from "../../mixins";

export const CreateAdvWrapper = styled(DefaultFrame)`
${absCenter}
text-align: center;
padding: 20px;
border-radius: ${borders.radius.medium};
`;

export const CreateAdvTextarea = styled('textarea')`
padding: 10px;
width: 400px;
height: 200px;
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
color: ${colors.grayDark};
border: ${borders.border.borderGrayDark};
resize: none;
border-radius: ${borders.radius.medium};
`;