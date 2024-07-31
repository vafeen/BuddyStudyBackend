import { createGlobalStyle } from "styled-components";
import { colors } from "./styleConstants";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
} 
:where(ul, ol):where([class]) {
padding-left: 0;
} 
body,
:where(blockquote, figure):where([class]) {
margin: 0;
} 
:where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl):where([class]) {
margin-block: 0;
} 
:where(dd[class]) {
margin-left: 0;
} 
:where(fieldset[class]) {
margin-left: 0;
padding: 0;
border: none;
} 
:where(ul[class]) {
list-style: none;
} 
p {
margin-block: 0;
}
img {
display: block;
max-width: 100%;
} 
input,
textarea,
select,
button {
font: inherit;
} 
html {
height: 100%;
scroll-behavior: smooth;
} 

svg *[fill] {
fill: currentColor;
}
svg *[stroke] {
stroke: currentColor;
} 
svg * {
transition-property: fill, stroke;
} 

body {
font-family: "Montserrat", sans-serif;
min-height: 100%;
line-height: 1.5;
color: ${colors.main};
background-color: ${colors.totalWhite};
-ms-overflow-style: none;
overflow: -moz-scrollbars-none;
}

body::-webkit-scrollbar { 
    width: 0;
}

a,
button {
cursor: pointer;
} 

a,
button,
input,
textarea,
svg * {
user-select: none;
}
a {
color: ${colors.main};
text-decoration: none;
}

`;