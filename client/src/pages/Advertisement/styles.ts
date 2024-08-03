import styled from "styled-components";
import { DefaultFrame, SubTitleChapter } from "../../common/styles";
import { borders, fonts } from "../../common/styleConstants";
import { defaultScroll } from "../../common/mixins";

export const AdvWrapper = styled('div')``;

export const AdvTitleWrapper = styled(DefaultFrame)`
border-radius: ${borders.radius.big};
padding: 15px 20px;
margin-bottom: 20px;
`;

export const AdvDescWrapper = styled(DefaultFrame)`
padding: 20px;
border-radius: ${borders.radius.big};
margin-bottom: 20px;
`;

export const AdvDescTitle = styled(SubTitleChapter)`
margin-bottom: 15px;
`;

export const AdvDescText = styled('p')`
overflow-y: scroll;
max-height: 300px;
font-size: ${fonts.sizes.main};
font-weight: ${fonts.weights.regular};
${defaultScroll}
`;