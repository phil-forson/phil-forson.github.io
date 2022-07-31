import styled from "styled-components";

export const StyledCartHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 0.1rem 1.4rem;
height: 23%;
width: 100%;

div:nth-child(1){
    display: flex;
    justify-content: center;
    align-items: center;
}

div:nth-child(2){
background-color: #00038C;
text-align: center;
color: white;
border-radius: 5px;
padding: 0.4rem;
display: flex;
margin: 0.4rem;
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
  padding-left: 1.8rem;
}

tr {
    width: 100%;
}

th {
    font-weight: bold;
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