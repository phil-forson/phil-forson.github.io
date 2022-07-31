import styled from "styled-components";

export const StyledHeader = styled.div`
color: ${({ color }) => color};
font-size: 18px;
cursor: pointer;

&:nth-child(2) {
    padding-left: 2rem;
}
`