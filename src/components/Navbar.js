import styled from "styled-components";
import profile from "../assets/AccountImage.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const NavbarBlank = styled.nav`
    top: 0;
    position: absolute;
    width: 100%;
    background-color: white;
    min-height: 8%;
    grid-area: 1/2/1/3;
    display: flex;
    justify-content: flex-end;
    `

    const NavbarContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 15%;
    background-color: transparent;
    position: absolute;
    right: 0;
    padding: 0.7rem 3rem 0.7rem 0rem;
    height: 100%;
    `

    const NavbarAccount = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    border-radius: 1.58rem;
    width: 60%;
    border: 1px solid #00038C;
    padding: 0.4rem 0.9rem;
    `

    const StyledPlus = styled.div`
    color: white;
    margin-top: 0.2rem;
    background-color: #00068C;
    text-align: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
    font-size: 0.7rem;
    padding: 0.2rem;
    `

    const StyledNavText = styled.div`
    color: #00038C;
    `

    const StyledNavImage = styled.img`
    border-radius: 50%;
    width: 40px;
    `
    return (
        <NavbarBlank>
            <NavbarContent>
                <NavbarAccount>
                    <StyledPlus><FontAwesomeIcon icon={faPlus} /></StyledPlus>
                    <StyledNavText>$200.25</StyledNavText>
                </NavbarAccount>
                <StyledNavImage src={profile} />
            </NavbarContent>
        </NavbarBlank>
    )
}

export default Navbar;