import styled from "styled-components";
import { DefaultFrame } from "../../styles";
import { borders, fonts } from "../../styleConstants";
import { defaultScroll } from "../../mixins";

export const ResponseWrapper = styled(DefaultFrame)`
padding: 10px;
border-radius: ${borders.radius.medium};
`;

export const ResponseHeader = styled('div')`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`;

export const ResponseContent = styled('p')`
max-height: 200px;
font-size: ${fonts.sizes.main};
font-weight: ${fonts.weights.regular};
overflow-y: scroll;
${defaultScroll}
`;