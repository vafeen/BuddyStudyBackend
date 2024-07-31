import styled from "styled-components";

export const AdsGridWrapper = styled('div')`
display: grid;
row-gap: 20px;
max-height: 550px;
grid-template-columns: repeat(3, auto);
justify-content: space-between;
overflow-y: scroll;
padding-bottom: 20px;

&::-webkit-scrollbar {
    width: 0;
}
`;