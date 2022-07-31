import styled from "styled-components";

export const StyledInput = styled.input`
    border: none;
    outline: none;
    width: 80%;

    &::placeholder {
        font-weight: 400;
    }

    &::-moz-user-focus {
        background: transparent;
    }

`