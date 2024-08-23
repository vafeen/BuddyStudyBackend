import styled from "styled-components";
import { DefaultFrame } from "../../styles";
import { borders } from "../../styleConstants";
import { resetScroll } from "../../mixins";

export const ChoiceAvatarsWrapper = styled('div')`
display: flex;
gap: 10px;
overflow-x: scroll;
${resetScroll}
`;

export const DefaultAvatarCard = styled(DefaultFrame)`
border-radius: ${borders.radius.big};
min-width: 100px;
height: 100px;
padding: 10px;
cursor: pointer;
`;

export const DefaultAvatarImg = styled('img')`
border: ${borders.border.defaultFrame};
border-radius: ${borders.radius.circle};
`;