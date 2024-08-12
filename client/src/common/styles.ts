import styled from "styled-components";
import { borders, colors, fonts, shadows, transitions } from "./styleConstants";
import { defaultHover } from "./mixins";
import { Link } from "react-router-dom";

export const Container = styled('div')`
margin: 0 auto;
width: 1152px;
padding: 15px;
`;

export const Logo = styled(Link)`
margin: auto 0;
font-size: ${fonts.sizes.logo};
`;

export const DefaultFrame = styled('div')`
border: ${borders.border.defaultFrame};
box-shadow: ${shadows.defaultFrame};
background-color: ${colors.totalWhite};
`;

export const CreateButton = styled('button')`
padding: 5px 15px;
background-color: ${colors.totalWhite};
border: ${borders.border.borderGrayDark};
border-radius: ${borders.radius.medium};
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
transition: ${transitions.fast};

${defaultHover}
`;

export const SubTitleChapter = styled('p')`
font-size: ${fonts.sizes.subTitle};
font-weight: ${fonts.weights.semiBold};
`;

export const DefaultInput = styled('input')`
padding: 5px;
width: 50px;
text-align: center;
border: ${borders.border.defaultFrame};
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
border-radius: ${borders.radius.small};
`;

export const ProfileBlockWrapper = styled(DefaultFrame)`
padding: 20px;
border-radius: ${borders.radius.big};
margin-bottom: 20px;
`;

export const ProfileBlockHeader = styled('div')`
display: flex;
justify-content: space-between;
margin-bottom: 15px;
`;

export const ProfileBlockTitle = styled(SubTitleChapter)`
margin-bottom: 15px;
`;


export const ProfileBlockContent = styled('div')`
display: grid;
grid-template-columns: repeat(4, auto);
justify-content: space-between;
margin-bottom: 10px;
`;

export const ProfileBlockStill = styled('button')`
margin: 0 auto;
display: block;
font-size: ${fonts.sizes.smallExtra};
font-weight: ${fonts.weights.regular};
color: ${colors.blue};
`;

export const BlackTransparentBg = styled('div')`
position: fixed;
width: 100%;
height: 100vh;
top: 0;
left: 0;
background-color: ${colors.blackTransparent};
z-index: 99;
`;

export const FormTitle = styled(SubTitleChapter)`
margin-bottom: 15px;
`;

export const FormItem = styled('div')`
display: flex;
flex-direction: column;
gap: 5px;
text-align: left;
margin-bottom: 10px;
`;

export const FormLabel = styled('label')`
margin-left: 10px;
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
`;

export const FormInput = styled('input')`
padding: 5px 10px;
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
color: ${colors.grayDark};
border: ${borders.border.borderGrayDark};
border-radius: ${borders.radius.medium};
`;

export const FormButton = styled('button')`
width: 100%;
padding: 5px 0;
border: ${borders.border.borderGrayDark};
border-radius: ${borders.radius.medium};
transition: ${transitions.fast};
${defaultHover}
margin-top: 20px;
margin-bottom: 5px;
`;

export const FormContactWrapper = styled('div')`
display: flex;
gap: 10px;
`;

export const FormContactImg = styled('img')`
width: 20px;
height: 20px;
margin: auto 0;
`