import styled from "styled-components";

export const DropdownCard = styled.div`
margin: auto;
height: auto;
width: 20rem;
background-color: white;
padding: 1rem;
position: absolute;
top: calc(10% + 3.5rem);
left: 60%;
width: 62%;
border-radius: 8px;
transform: translateX(-50%);
`

export const DropdownCardHeader = styled.header`
width: 100%;
height: auto;
display: flex;
justify-content: space-between;
`

export const DropdownCardHeaderLeft = styled.div`
display: flex;
flex-direction: column;

div {
    &:nth-child(1) {
    font-size: 1.5rem;
    text-transform: uppercase;
}

    &:nth-child(2) {
        color: rgba(0,0,0,0.75);
        font-size: 0.85rem;
}
}

`


export const DropdownCardHeaderRight = styled.div`
margin: 0.4rem;
padding: 0.8rem 1.5rem;
background-color: #00068C;
color: #fff;
font-size: 0.8rem;
border-radius: 4px;
`

export const DropdownTable = styled.table`
margin-top: 1rem;
width: 100%;
height: fit-content;
border-collapse: collapse;

table,td,th {
    border: 1px solid #ddd;
    text-align: left;
    padding:0.25rem 1.5rem;
}

th {
    font-weight: 450;
    width: auto;

    &:nth-child(3) {
        width: fit-content;
    }
}

td {
    color: rgba(0,0,0,0.9);
}

tr td {
    &:nth-child(4) {
        font-weight: 550;
    }
}
`

export const Buynow = styled.button`
border: none;
outline: none;
background-color: #00068C;
border-radius: 4px;
color: white;
width: 80%;
padding: 0.4rem 0.4rem;
margin: 0.35rem;
`

export const Incart = styled.button`
border: none;
outline: none;
background-color: white;
margin: 0.35rem;
border: 1px solid #00068C;
border-radius: 4px;
color: white;
width: 80%;
padding: 0.4rem 0.4rem;
color: #00068C;
`