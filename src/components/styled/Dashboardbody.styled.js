import styled from "styled-components";

export const DashboardBodyContainer = styled.div`
width: 100%;
height: 100%;
grid-area: 2/2/3/span 2;
margin: 0;
padding: 0;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
}
`

export const DashboardContentContainer= styled.div`
margin: auto;
background: transparent;
width: 62%;
position: absolute;
top: calc(8% + 3rem);
left: 60%;
transform: translateX(-50%);
`

export const DashboardHeader = styled.header`
margin-bottom: 3rem;
display: flex;
justify-content: space-between;
align-items: center;
background-color: transparent;

`

export const DashboardHeaderCard = styled.div`
    background-color:#FDFDFD;
    border-radius: 6px;
    padding-left: 0.4rem;
    width: 280px;
    margin-left: ${({ ml }) => ml};
    text-align: left;
    align-items: center;
    padding: 1rem;
    height: 120px;
`

export const DashboardHeaderCardHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width: 40%;

div {
    font-size: 1.2rem;
}
`

export const DashboardHeaderText = styled.div`
    font-size: 36px;
    font-weight: 500;
    color: #00068C;
`

export const DashboardTable = styled.div`
    background-color: #FDFDFD;
    border-radius: 6px;
    height: 450px;
    padding: 0.9rem;
`

export const DashboardTableHeader = styled.div`
text-align: left;
font-size: 20px;
padding-bottom: 1rem;
`

export const StyledTable = styled.table`
width: 100%;
height: calc(100% - 40px);
border-collapse: collapse;

table, td, th {  
  border: 1px solid #ddd;
  text-align: left;
  padding-left: 1.5rem;
}

th {
    font-weight: 450;
}

tr td:nth-child(2){
    color: #00038C;
    font-weight: 500;
}

`
export const Styled16 = styled.div`
background-color: #00038C;
width: fit-content;
text-align: center;
color: white;
border-radius: 5px;
padding: 0.4rem;
`