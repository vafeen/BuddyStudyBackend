import styled from "styled-components";
import { DefaultFrame } from "../../styles";
import { borders, fonts } from "../../styleConstants";
import { absCenter } from "../../mixins";

export const UserInfoWindowWrapper = styled(DefaultFrame)`
${absCenter}
width: 400px;
text-align: center;
border-radius: ${borders.radius.medium};
padding: 20px;
`;

export const UserInfoSelectTitle = styled('p')`
margin-left: 10px;
font-size: ${fonts.sizes.small};
font-size: ${fonts.weights.regular};
`;

export const UserInfoSelect = styled('select')`
padding: 5px 10px;
border: ${borders.border.borderGrayDark};
border-radius: ${borders.radius.medium};
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
`;

export const UserInfoOption = styled('option')``;
