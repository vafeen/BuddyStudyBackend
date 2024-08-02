import styled from "styled-components";
import { CreateButton, DefaultFrame, SubTitleChapter } from "../../styles";
import { borders } from "../../styleConstants";

export const PetCardWrapper = styled(DefaultFrame)`
padding: 20px;
text-align: center;
border-radius: ${borders.radius.big};
`;

export const PetCardAvatar = styled('div')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
aspect-ratio: 1;
border: ${borders.border.defaultFrameBig};
border-radius: ${borders.radius.circle};
margin-bottom: 10px;
`;

export const PetCardAvatarImg = styled('img')``;

export const PetCardName = styled(SubTitleChapter)`
margin-bottom: 15px;
`;

export const PetCardButton = styled(CreateButton)`
padding: 10px 0;
width: 100%;
`;