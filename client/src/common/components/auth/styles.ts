import styled from "styled-components";
import { borders, colors, fonts, transitions } from "../../styleConstants";
import { DefaultFrame, SubTitleChapter } from "../../styles";
import { defaultHover } from "../../mixins";

export const AuthWrapper = styled('div')`
position: fixed;
width: 100%;
height: 100vh;
top: 0;
left: 0;
background-color: ${colors.blackTransparent};
`;

export const AuthForm = styled(DefaultFrame)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 300px;
padding: 20px;
text-align: center;
border-radius: ${borders.radius.medium};
`;

export const AuthFormTitle = styled(SubTitleChapter)`
margin-bottom: 15px;
`;

export const AuthFormItem = styled('div')`
display: flex;
flex-direction: column;
gap: 5px;
text-align: left;
margin-bottom: 10px;
`;

export const AuthFormLabel = styled('label')`
margin-left: 10px;
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
`;

export const AuthFormInput = styled('input')`
padding: 5px 10px;
font-size: ${fonts.sizes.small};
font-weight: ${fonts.weights.regular};
color: ${colors.grayDark};
border: ${borders.border.borderGrayDark};
border-radius: ${borders.radius.medium};
`;

export const AuthFormButton = styled('button')`
width: 100%;
padding: 5px 0;
border: ${borders.border.borderGrayDark};
border-radius: ${borders.radius.medium};
transition: ${transitions.fast};
${defaultHover}
margin-top: 20px;
`;

