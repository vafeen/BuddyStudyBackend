import { css } from "styled-components";
import { colors } from "./styleConstants";

export const absCenter = css`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const flexCenter = css`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const defaultHover = css`
&:hover {
    background-color: ${colors.grayAccent};
}
`;

export const blurHover = css`
&:hover
{
    -webkit-filter: blur(1px);
    -moz-filter: blur(1px);
    -o-filter: blur(1px);
    -ms-filter: blur(1px);
    filter: blur(1px);
}
`;

export const resetScroll = css`
&::-webkit-scrollbar {
    width: 0;
}
`;

export const defaultScroll = css`
&::-webkit-scrollbar {
    height: 4px;
    width: 4px;
}
&::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: #DFE9EB;
}

&::-webkit-scrollbar-track:hover {
    background-color: #B8C0C2;
}

&::-webkit-scrollbar-track:active {
    background-color: #B8C0C2;
}

&::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #000000;
}

&::-webkit-scrollbar-thumb:hover {
    background-color: #000000;
}

&::-webkit-scrollbar-thumb:active {
    background-color: #000000;
}
`;