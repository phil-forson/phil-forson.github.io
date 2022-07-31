import styled from "styled-components";
import { Link } from "react-router-dom"

export const SidebarContainer = styled.nav`
position: fixed;
top: 0;
grid-area: 1/1/3/2;
height: 100%;
width: 300px;
padding: 1rem;
background-color: #00068C;
color: white;
z-index: 5;
overflow-y: scroll;
::-webkit-scrollbar {
    display: none;
}
`

export const SidebarHeader = styled.header`
width: 100%;
height: 8%;
text-transform: uppercase;
display: block;
font-size: 24px;
padding: 1rem;
text-align: left;
`

export const SidebarContent = styled.section`
margin-top: 3rem;
`

export const SidebarContentCustom = styled.div`
padding-bottom: 0.8rem;
width: 100%;
border-bottom: 1px solid rgba(255,255,255,0.4);
`

export const SidebarLink = styled(Link)`
text-decoration: none;
display: block;
color: white;
text-align: left;
width: 90%;
margin-top: 0.3rem;

&:nth-child(1),
&:nth-child(2),
&:nth-child(3),
&:nth-child(4),
&:nth-child(5) {
    padding: 0.1rem 0rem;
}

`

export const SideBarContentCustomContent = styled.div`
display: block;
cursor: pointer;
margin-top: 0.3rem;
padding: 0.1rem 0.5rem;
background-color: ${({ bc }) => bc};
text-align: left;
border-left: ${({ bl }) => bl} ;
color: ${({ color }) => color};
font-weight: ${({fw }) => fw};
width: 100%;
`

export const SidebarContentDropdownContent = styled.div`
width: 100%;
border-left: ${({ bl }) => bl} ;
color: ${({ color }) => color};
font-weight: ${({fw }) => fw};
background-color: ${({ bc }) => bc};

header {
    color: rgba(255,255,255,0.7);
    display: block;
    width: 60%;
    padding: 0.9rem 0.5rem;
    text-align: left;
}
`
export const DropdownContainer = styled.div`
width: 100%;
height: 100%;
`

export const SidebarContentDropdownContentDiv = styled.div`
width: 100%;
color: rgba(255,255,255,0.8);
padding-bottom: ${({ pb }) => pb};
display: flex;
padding-right: 0;
justify-content: space-between;
align-items: center;
cursor: pointer;
`

export const DropdownLabel = styled.div`
width: 80%;
text-align: left;
padding-left: 0.5rem;
display: flex;
text-transform: ${({ tt}) => tt};
background-color: ${({ bc }) => bc};
border-left: ${({ bl }) => bl};
color: ${({ color }) => color};
font-weight: ${({ fw }) => fw};
justify-content: flex-start;
`

export const DropdownDiv = styled.ul`
display: flex;
flex-direction: column;
width: 100%;
list-style: none;
height: auto;
margin-bottom: 0.7rem;
`

export const DropdownContent = styled.li`
padding-left: 0.5rem;
color: rgba(255,255,255,0.6);
list-style: none;
font-size: 15px;
line-height: 1.7rem;
transition: color 0.5s;

&:hover {
    color: rgb(255,255,255);
}
`
export const DropdownLink = styled(Link)`
text-decoration: none;
font-size: inherit;
color: inherit;
width: 100%;
`