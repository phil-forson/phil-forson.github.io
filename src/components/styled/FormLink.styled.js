import styled from "styled-components";
import { Link } from "react-router-dom"

export const StyledFormLink = styled(Link)`
text-decoration: none;
font-size: inherit;
font-weight: inherit;

&:nth-child(2){
    padding-left: 1rem;
}
`