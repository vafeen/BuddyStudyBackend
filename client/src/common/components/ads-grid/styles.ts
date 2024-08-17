import styled from "styled-components";

export const AdsGridWrapper = styled('div')`
display: grid;
grid-template-columns: repeat(4, auto);
justify-content: space-between;
gap: 20px;
max-height: 500px;
overflow-y: scroll;

&::-webkit-scrollbar {
    width: 0;
}
`;