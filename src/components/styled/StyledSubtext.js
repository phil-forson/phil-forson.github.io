import styled from "styled-components";

export const StyledSubtext = styled.p`
    font-size: 14px;
    padding-bottom: 0.5rem;
    font-weight: 400;
    margin-top: 0.5rem;
    width: 100%;
    text-align: ${({ align }) => align};
    border-bottom: ${({ border }) => border};

    a {
        text-decoration: none;
        color: #00068C;
        font-weight: bold;
    }
`