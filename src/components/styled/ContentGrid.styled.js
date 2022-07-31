import styled from "styled-components";

export const ContentGrid = styled.div`
display: grid;
width: 100%;
height: 100%;
grid-template-columns: 300px calc(100% - 300px);
grid-template-rows: 8% 92%;
position: absolute;
`