import styled from "styled-components";
import { DefaultFrame, SubTitleChapter } from "../../styles";
import { borders, fonts } from "../../styleConstants";

export const ProfileDetailsWrapper = styled('div')`
display: grid;
gap: 20px;
grid-template-columns: 200px auto;
margin-bottom: 20px;
`;

export const ProfileDesc = styled(DefaultFrame)`
padding: 20px;
border-radius: ${borders.radius.big};
`;

export const ProfileDescTitle = styled(SubTitleChapter)`
margin-bottom: 10px;
`;

export const ProfileDescText = styled('p')`
font-size: ${fonts.sizes.main};
font-weight: ${fonts.weights.regular};
`;