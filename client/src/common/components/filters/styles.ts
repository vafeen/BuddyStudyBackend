import styled from "styled-components";
import { borders, fonts, transitions } from "../../styleConstants";
import { defaultHover } from "../../mixins";

export const AdsFiltersWrapper = styled('div')`
padding-inline: 20px;
margin-bottom: 20px;
`;

export const AdsContentFilters = styled('div')`
display: flex;
gap: 20px;
margin-bottom: 10px;`;

export const AdsMainFilters = styled('div')`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const AdsItemFilters = styled('div')`
display: flex;
justify-content: space-between;
gap: 5px;
`;

export const AdsTitleFiltersWrapper = styled('div')`
display: flex;
gap: 5px;
margin-bottom: 10px;
`;

export const AdsTitleFilters = styled('p')`
margin: auto 0;
font-size: ${fonts.sizes.subTitle};
font-weight: ${fonts.weights.semiBold};
`;

export const AdsTitleFiltersImg = styled('img')`
margin: auto 0;
cursor: pointer;
width: 15px;
height: 15px;
`;

export const AdsSubTitleFilters = styled('p')`
margin: auto 0;
font-size: ${fonts.sizes.main};
font-weight: ${fonts.weights.medium};
`;

export const AdsFiltersSelect = styled('select')`
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
`;

export const AdsFiltersOption = styled('option')``;

export const AdsTagsFilters = styled('div')`
width: 300px;
`;

export const AdsFiltersButtons = styled('div')`
display: flex;
gap: 10px;
`;

export const AdsFiltersButton = styled('button')`
width: 100px;
height: 30px;
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
border: ${borders.border.defaultFrame};
border-radius: ${borders.radius.medium};
transition: ${transitions.fast};
${defaultHover}
`;