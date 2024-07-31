import styled from "styled-components";
import { CreateButton, DefaultFrame, DefaultInput } from "../../styles";
import { borders, colors, fonts } from "../../styleConstants";

export const SidePanelWrapper = styled(DefaultFrame)`
width: 300px;
padding: 10px 20px;
border-radius: ${borders.radius.big};
`;

export const SidePanelHeader = styled('div')`
display: flex;
justify-content: space-between;
margin-bottom: 15px;
`;

export const SidePanelClear = styled('button')`
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
color: ${colors.blue};
`;

export const SidePanelFilter = styled('div')`
margin-bottom: 10px;
`;

export const SidePanelFilterTitle = styled('p')`
margin-bottom: 5px;
font-size: ${fonts.sizes.main};
font-size: ${fonts.weights.medium};
`;

export const SidePanelSelect = styled('select')`
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
`;

export const SidePanelOption = styled('option')``;

export const SidePanelTags = styled('div')`
display: flex;
gap: 5px;
`;

export const SidePanelInputTag = styled(DefaultInput)`
width: 200px;
`;

export const SidePanelAddTag = styled(CreateButton)``;