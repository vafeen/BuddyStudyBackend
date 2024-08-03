import { css } from "styled-components";
import { colors } from "./styleConstants";

export const defaultHover = css`
&:hover {
    background-color: ${colors.grayAccent};
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