import styled from "styled-components";

export const StyledFormElement = styled.div`
padding: 0;
margin-top: 1rem;
width: 100%;
label {
    width: 100% !important;
    text-transform: uppercase;
    text-align: left;
    font-size: 0.8rem;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.2rem;
}

p {
    color: red;
    font-size: 10px;
    width: 100%;
    text-align: left;
}

#current {
    background-color: #F4F4F4;
    border: 1px solid rgba(0,10,58, 0.5)
}

.current {
    background-color: #F4F4F4;
}
`