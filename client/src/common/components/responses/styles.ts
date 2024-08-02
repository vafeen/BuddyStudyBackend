import styled from "styled-components";
import { DefaultFrame } from "../../styles";
import { borders } from "../../styleConstants";

export const ResponsesWrapper = styled(DefaultFrame)`
padding: 20px;
border-radius: ${borders.radius.big};
`;

export const ResponsesHeader = styled('div')`
display: flex;
justify-content: space-between;
margin-bottom: 15px;
`;

export const ResponsesActions = styled('div')`
display: flex;
gap: 10px;
`;

export const ResponsesActionImg = styled('img')`
width: 20px;
height: 20px;
`;

export const ResponsesList = styled('div')`
display: flex;
flex-direction: column;
gap: 10px;
`;