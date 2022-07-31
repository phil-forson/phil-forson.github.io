import styled from "styled-components";

export const StyledCartHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 0.1rem 0rem;
height: 23%;
width: 100%;

div:nth-child(1){
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
font-size: 20px;
padding-bottom: 1rem;
}

div:nth-child(2){
background-color: #00038C;
text-align: center;
color: white;
border-radius: 0.25rem;
padding: 0.1rem 1rem;
display: flex;
margin: 0.4rem;
height: 2rem;
justify-content: center;
align-items: center;
}
`

export const CartTable = styled.div`
width: 100%;
height: 77%;
display: table;

table, td, th {  
  border: 1px solid #ddd;
  text-align: left;
  padding: 0.5rem 0rem 0.5rem 1.5rem;
}

tr {
    width: 100%;
}

th {
    font-weight: 500;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
`

export const StyledBin = styled.div`
margin: 0.2rem 0rem;
background-color: #00038C;
width: fit-content;
text-align: center;
color: white;
border-radius: 5px;
padding: 0.15rem 0.7rem;
`