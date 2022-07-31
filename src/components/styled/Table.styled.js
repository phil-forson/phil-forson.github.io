import styled from "styled-components";

export const Table = styled.div`
    background-color: #FDFDFD;
    border-radius: 6px;
    height: ${({height }) => height};
    padding: 1.3rem;
    position: absolute;
    top: calc(8% + 4rem);
    left: 60%;
    transform: translateX(-50%);
    width: 62%;
`

export const ConstStyledTable = styled.table`
width: 100%;
height: ${({ height}) => height};
border-collapse: collapse;

table, td, th {  
  border: 1px solid #ddd;
  text-align: left;
  padding: 0.5rem 0rem 0.5rem 1.5rem;
}

th {
    font-weight: 500;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

`