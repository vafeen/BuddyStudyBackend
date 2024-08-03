import styled from "styled-components";
import { DefaultFrame, SubTitleChapter } from "../../common/styles";
import { borders } from "../../common/styleConstants";
import { defaultScroll } from "../../common/mixins";

export const AdsAllWrapper = styled('div')``;

export const AdsAllTitleWrapper = styled(DefaultFrame)`
margin-bottom: 20px;
padding: 20px;
border-radius: ${borders.radius.big};
`;

export const AdsAllTitle = styled(SubTitleChapter)``;

export const AdsAllGrid = styled('div')`
display: grid;
padding-bottom: 20px;
grid-template-columns: repeat(4, auto);
justify-content: space-between;
gap: 20px;
max-height: 400px;
overflow-y: scroll;
${defaultScroll}
`;