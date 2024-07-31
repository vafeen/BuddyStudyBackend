import styled from "styled-components";
import { DefaultFrame } from "../../styles";
import { borders, colors, fonts } from "../../styleConstants";

export const AdsCardWrapper = styled(DefaultFrame)`
cursor: pointer;
width: 250px;
height: 150px;
border-radius: ${borders.radius.medium};
overflow: hidden;
`;

export const AdsCardHeader = styled('div')`
padding: 15px;
border-radius: 0 0 ${borders.radius.medium} 0;
background-color: lavender;
height: 90px;
margin-bottom: 5px;
`;

export const AdsCardTitle = styled('p')`
font-size: ${fonts.sizes.main};
font-weight: ${fonts.weights.semiBold};
margin-bottom: 10px;
`;

export const AdsCardAuthor = styled('div')`
display: flex;
gap: 5px;
`;

export const AdsCardAuthorName = styled('p')`
margin: auto 0;
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
`;

export const AdsCardAvatar = styled('div')`
width: 20px;
height: 20px;
background-color: ${colors.grayDark};
border-radius: ${borders.radius.circle};
`;

export const AdsCardTags = styled('div')`
padding: 0 15px;
`;

export const AdsCardTagsTitle = styled('p')`
color: ${colors.grayDark};
font-size: ${fonts.sizes.smallExtra};
font-weight: ${fonts.weights.regular};
margin-bottom: 5px;
`;