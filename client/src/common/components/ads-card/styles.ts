import styled from "styled-components";
import { DefaultFrame } from "../../styles";
import { borders, colors, fonts } from "../../styleConstants";
import { Link } from "react-router-dom";

export const AdsCardLink = styled(Link)``;

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
border-bottom: ${borders.border.defaultFrame};
height: 90px;
margin-bottom: 5px;
`;

export const AdsCardTitle = styled('div')`
display: -webkit-box;
font-size: ${fonts.sizes.main};
font-weight: ${fonts.weights.semiBold};
margin-bottom: 10px;

word-wrap:break-word;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
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

export const AdsCardTags = styled('div')`
padding: 0 15px;
`;

export const AdsCardTagsTitle = styled('p')`
color: ${colors.grayDark};
font-size: ${fonts.sizes.smallExtra};
font-weight: ${fonts.weights.regular};
margin-bottom: 5px;
`;