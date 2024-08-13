import styled from "styled-components";
import { borders, colors, fonts } from "../../styleConstants";
import { CreateButton, DefaultInput } from "../../styles";
import { defaultScroll } from "../../mixins";

export const TagsWrapper = styled('div')`
text-align: left;
`;

export const TagWrapper = styled('p')`
padding: 2px;
background-color: ${colors.totalWhite};
border: ${borders.border.defaultFrame};
border-radius: ${borders.radius.small};
font-size: ${fonts.sizes.smallExtra};
font-weight: ${fonts.weights.regular};
`;

export const TagsEnumeration = styled('div')`
display: flex;
flex-wrap: wrap;
gap: 5px;
width: 400px;
max-height: 50px;
overflow-y: scroll;
${defaultScroll}
`;

export const TagsTitle = styled('p')`
margin-bottom: 5px;
font-size: ${fonts.sizes.main};
font-size: ${fonts.weights.medium};
`; 

export const TagsInputWrapper = styled('div')`
display: flex;
gap: 10px;
margin-bottom: 10px;
`;

export const TagsInput = styled(DefaultInput)`
width: 100%;
`;

export const TagsAddTag = styled(CreateButton)``;