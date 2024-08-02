import styled from "styled-components";
import profileBanner from "../../icons/profileBanner.png";
import { Link } from "react-router-dom";
import { borders, colors, fonts } from "../../styleConstants";
import { DefaultFrame } from "../../styles";

export const ProfileInfoWrapper = styled('div')`
position: relative;
margin-bottom: 20px;
`;

export const ProfileBackLink = styled(Link)`
position: absolute;
top: 20px;
left: 20px;
padding: 5px;
background-color: ${colors.totalWhite};
font-size: ${fonts.sizes.smallExtra};
font-weight: ${fonts.weights.regular};
border: ${borders.border.defaultFrame};
border-radius: ${borders.radius.small};
`;

export const ProfileBanner = styled('div')`
height: 300px;
width: 100%;
overflow: hidden;
background-image: url(${profileBanner});
border: ${borders.border.defaultFrame};
border-radius: ${borders.radius.big};
`;

export const ProfileInfoContent = styled(DefaultFrame)`
display: flex;
padding: 20px;
margin-top: -50px;
border-top-left-radius: ${borders.radius.medium};
border-top-right-radius: ${borders.radius.medium};
`;

export const ProfileInfoAvatar = styled('div')`
width: 100px;
height: 100px;
transform: translateY(calc(-50% - 20px));
border: ${borders.border.borderWhiteBig};
border-radius: ${borders.radius.circle};
background-color: ${colors.grayDark};
`;

export const ContactDetails = styled('div')``;

export const ContactName = styled('p')`
margin-bottom: 10px;
font-size: ${fonts.sizes.title};
font-weight: ${fonts.weights.semiBold};
`;

export const ContactItems = styled('div')`
display: flex;
gap: 15px;
margin-bottom: 10px;
`;

export const ContactItem = styled('div')`
display: flex;
gap: 5px;
`;

export const ContactItemIcon = styled('img')`
width: 20px;
height: 20px;
`;

export const ContactItemText = styled('p')`
margin: auto 0;
font-size: ${fonts.sizes.smallExtra};
font-weight: ${fonts.weights.regular};
`;

export const ContactLinks = styled('div')`
display: flex;
gap: 5px;
`;

export const ContactLink = styled('a')``;

export const ContactlinkImg = styled('img')`
width: 20px;
height: 20px;
`;