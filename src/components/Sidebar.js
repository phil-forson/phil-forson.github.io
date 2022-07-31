import React, { useEffect, useState } from 'react'
import { SidebarContainer, SidebarContent, SidebarContentCustom, SidebarHeader, SideBarContentCustomContent, SidebarContentDropdownContent, SidebarContentDropdownContentDiv, DropdownLabel, SidebarLink, DropdownDiv, DropdownContent, DropdownContainer, DropdownLink } from './styled/Sidebar.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons"


function Sidebar( ) {

    const [active, setActive ] = useState("dashboard")
    const [selectUsa, setSelectedUsa] = useState(false)
    const [selectCanada, setSelectedCanada] = useState(false)
    const [selectCash, setSelectedCash] = useState(false)
    const [selectShop, setSelectedShop] = useState(false)
    const [selectCompany, setSelectedCompany] = useState(false)
    const [selectEuropean, setSelectedEuropean] = useState(false)
    const [selectSsn, setSelectedSsn] = useState(false)
    const [selectTuto, setSelectedTuto] = useState(false)
    const [selectCc, setSelectedCc] = useState(false)


    const selectCompanyFullz = () => {
        setSelectedCompany(!selectCompany)
    }

    const selectEuropeanBanks = () => {
        setSelectedEuropean(!selectEuropean)
    }

    const selectSsnFullz = () => {
        setSelectedSsn(!selectSsn)
    }

    const selectTutorials = () => {
        setSelectedTuto(!selectTuto)
    }

    const selectCreditCard = () => {
        setSelectedCc(!selectCc)
    }

    const selectUsabanks = () => {
        setSelectedUsa(!selectUsa)
    }

    const selectCanadabanks = () => {
        setSelectedCanada(!selectCanada)
    }

    const selectCashapp = () => {
        setSelectedCash(!selectCash)
    }

    const selectShopWithScrip = () => {
        setSelectedShop(!selectShop)
    }


  return (
    <SidebarContainer>
        <SidebarHeader>
            Logo
        </SidebarHeader>
        <SidebarContent>
        <SidebarContentCustom>
            <SidebarLink to="/Home/Dashboard"  onClick = {() => setActive("dashboard")}>
            {active == 'dashboard' ?<SideBarContentCustomContent 
            bc="#CCCDE8" 
            bl="2px solid #E5CF00" 
            fw="500" 
            color="#000343">
            Dashboard
            </SideBarContentCustomContent> :
            <SideBarContentCustomContent 
            className="dashboard">
            Dashboard
            </SideBarContentCustomContent>}
            </SidebarLink>
            <SidebarLink to="/OrderHistory" onClick = {() => setActive("orderhistory")}>
            {active == 'orderhistory'?<SideBarContentCustomContent 
            bc="#CCCDE8" 
            bl="2px solid #E5CF00" 
            fw="500" 
            color="#000343" >
            Order History
            </SideBarContentCustomContent> :
            <SideBarContentCustomContent >
            Order History
            </SideBarContentCustomContent>}
            </SidebarLink>
            <SidebarLink to="/Cart" onClick = {() => setActive("cart")}>
            {active == 'cart' ? <SideBarContentCustomContent 
            bc="#CCCDE8" 
            bl="2px solid #E5CF00" 
            fw="500" 
            color="#000343">
            Cart
            </SideBarContentCustomContent> :
            <SideBarContentCustomContent className="cart">
            Cart
            </SideBarContentCustomContent>}
            </SidebarLink>
            <SidebarLink to = "/Home/Dashboard" onClick = {() => setActive("ticket")}>
            {active == 'ticket' ? <SideBarContentCustomContent 
            bc="#CCCDE8" 
            bl="2px solid #E5CF00" 
            fw="500" 
            color="#000343">
            Ticket
            </SideBarContentCustomContent> :
            <SideBarContentCustomContent>
            Ticket
            </SideBarContentCustomContent>}
            </SidebarLink>
            <SidebarLink to = "/Settings" onClick = {() => setActive("settings")}>
            {active == 'settings' ? <SideBarContentCustomContent 
            bc="#CCCDE8" 
            bl="2px solid #E5CF00" 
            fw="500" 
            color="#000343" className="dashboard">
            Settings
            </SideBarContentCustomContent> : 
            <SideBarContentCustomContent>
                Settings
            </SideBarContentCustomContent>
            }
            </SidebarLink>
        </SidebarContentCustom>
        <SidebarContentDropdownContent>
            <header>Products</header>

            <DropdownContainer>
         <SidebarContentDropdownContentDiv onClick={selectUsabanks} pb = "0.5rem">
                <DropdownLabel tt="uppercase"  bc = {active == "usabanks" &&  "#CCCDE8" }
                 bl = {active == "usabanks" &&  "2px solid #E5CF00"}
                 color = {active == "usabanks" && "#000343"}
                 fw = {active == "usabanks" && "500"}
                 >Usa Banks</DropdownLabel>
                {!selectUsa ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleDown} />} 
            </SidebarContentDropdownContentDiv> 
            {selectUsa ?  
            <DropdownDiv className="dropdown1">
                <DropdownLink to="/usabanks/principalbank" ><DropdownContent onClick = {() => setActive("usabanks")}>Principal Bank</DropdownContent></DropdownLink>
                <DropdownLink to="/usabanks/huntingtonbank" ><DropdownContent onClick = {() => setActive("usabanks")}>Huntington Bank</DropdownContent></DropdownLink>
                <DropdownLink to="/usabanks/woodforestbank" ><DropdownContent onClick = {() => setActive("usabanks")}>Woodforest Bank</DropdownContent></DropdownLink>
                <DropdownLink to="/usabanks/pncbank" ><DropdownContent onClick = {() => setActive("usabanks")}>PNC Bank</DropdownContent></DropdownLink>
                <DropdownLink to="/usabanks/citibank" ><DropdownContent onClick = {() => setActive("usabanks")}>Citi Bank</DropdownContent></DropdownLink>
                <DropdownLink to="/usabanks/chasebank" ><DropdownContent onClick = {() => setActive("usabanks")}>Chase Bank</DropdownContent></DropdownLink>
                <DropdownLink to="/usabanks/suntrustbank" ><DropdownContent onClick = {() => setActive("usabanks")}>Suntrust Bank</DropdownContent></DropdownLink>
                <DropdownLink to="/usabanks/hillsbank" ><DropdownContent onClick = {() => setActive("usabanks")}>Hills Bank</DropdownContent></DropdownLink>
                <DropdownLink to="/usabanks/m&tbank" ><DropdownContent onClick = {() => setActive("usabanks")}>M & T Bank</DropdownContent></DropdownLink>
            </DropdownDiv>
             : <></>}
             </DropdownContainer>

             <DropdownContainer>
         <SidebarContentDropdownContentDiv onClick={selectCanadabanks} pb = "0.5rem">
                <DropdownLabel tt="uppercase"   bc = {active == "canadabanks" &&  "#CCCDE8" }
                 bl = {active == "canadabanks" &&  "2px solid #E5CF00"}
                 color = {active == "canadabanks" && "#000343"}
                 fw = {active == "canadabanks" && "500"}
                 >Canada Banks</DropdownLabel>
                {!selectCanada ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleDown} />} 
            </SidebarContentDropdownContentDiv> 
            {selectCanada ?  
            <DropdownDiv className="dropdown1" >
                <DropdownLink to="/canadabanks/tdbank" ><DropdownContent onClick = {() => setActive("canadabanks")}>TD Bank</DropdownContent></DropdownLink>
                <DropdownLink to="/canadabanks/rbcbank" ><DropdownContent onClick = {() => setActive("canadabanks")}>RBC Bank</DropdownContent></DropdownLink>
                <DropdownLink to="/canadabanks/scotiabank" ><DropdownContent onClick = {() => setActive("canadabanks")}>Scotia Bank</DropdownContent></DropdownLink>
            </DropdownDiv>
             : <></>}
             </DropdownContainer>

             <DropdownContainer>
            <SidebarContentDropdownContentDiv onClick={selectCashapp} pb = "0.5rem">
                <DropdownLabel tt="uppercase"  >cashapp logs</DropdownLabel>
                {!selectCash ? <FontAwesomeIcon icon={faAngleRight} />  : <FontAwesomeIcon icon={faAngleDown} /> }
            </SidebarContentDropdownContentDiv> 
            {selectCash ?  
            <DropdownDiv className="dropdown1">
                <DropdownContent>Water</DropdownContent>
                <DropdownContent>Pure water</DropdownContent>
                <DropdownContent>Nsuo</DropdownContent>
            </DropdownDiv>
             : <></>}
             </DropdownContainer>

             <DropdownContainer>
             <SidebarContentDropdownContentDiv onClick={selectShopWithScrip} pb = "0.5rem">
                <DropdownLabel tt="uppercase"  bc = {active == "shop" &&  "#CCCDE8" }
                 bl = {active == "shop" &&  "2px solid #E5CF00"}
                 color = {active == "shop" && "#000343"}
                 fw = {active == "shop" && "500"}
                 >SHOPWITHSCRIP</DropdownLabel>
                {!selectShop ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleDown} />} 
            </SidebarContentDropdownContentDiv> 
            {selectShop ?  
            <DropdownDiv className="dropdown1">
                <DropdownLink to="/shopwithscrip/usashopwithscrip" ><DropdownContent onClick = {() => setActive("shop")}>USA Shopwithscrip</DropdownContent></DropdownLink>
                <DropdownLink to="/shopwithscrip/fundscripcanada" ><DropdownContent onClick = {() => setActive("shop")}>Fundscrip Canada</DropdownContent></DropdownLink>
            </DropdownDiv>
             : <></>}
             </DropdownContainer>

             <DropdownContainer>
             <SidebarContentDropdownContentDiv onClick={selectCompanyFullz} pb = "0.5rem">
                <DropdownLabel tt="uppercase"  bc = {active == "company" &&  "#CCCDE8" }
                 bl = {active == "company" &&  "2px solid #E5CF00"}
                 color = {active == "company" && "#000343"}
                 fw = {active == "company" && "500"}
                 >COMPANY FULLZ & CHECKS</DropdownLabel>
                {!selectCompany ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleDown} />} 
            </SidebarContentDropdownContentDiv>
            {selectCompany ?  
            <DropdownDiv className="dropdown1">
                <DropdownLink to="/companyfullzandchecks/companyfullz" ><DropdownContent onClick = {() => setActive("company")}>Company Fullz</DropdownContent></DropdownLink>
                <DropdownLink to="/companyfullzandchecks/businesschecks" ><DropdownContent onClick = {() => setActive("company")}>Business Checks</DropdownContent></DropdownLink>
                <DropdownLink to="/companyfullzandchecks/wirechecks" ><DropdownContent onClick = {() => setActive("company")}>Wire Checks</DropdownContent></DropdownLink>            
            </DropdownDiv>
             : <></>}
             </DropdownContainer>

             <DropdownContainer>
             <SidebarContentDropdownContentDiv onClick={selectEuropeanBanks} pb = "0.5rem">
                <DropdownLabel tt="uppercase"  bc = {active == "euro" &&  "#CCCDE8" }
                 bl = {active == "euro" &&  "2px solid #E5CF00"}
                 color = {active == "euro" && "#000343"}
                 fw = {active == "euro" && "500"}
                 >European Banks</DropdownLabel>
                {!selectEuropean ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleDown} />} 
            </SidebarContentDropdownContentDiv>
            {selectEuropean ?  
            <DropdownDiv className="dropdown1">
            <DropdownLink to="/europeanbanks/barclaysbank" ><DropdownContent onClick = {() => setActive("euro")}>Barclays Bank (UK)</DropdownContent></DropdownLink>
            <DropdownLink to="/europeanbanks/lloydbank" ><DropdownContent onClick = {() => setActive("euro")}>Lloyd Bank (UK)</DropdownContent></DropdownLink>
            <DropdownLink to="/europeanbanks/hsbcbank" ><DropdownContent onClick = {() => setActive("euro")}>HSBC Bank (UK)</DropdownContent></DropdownLink>            
        </DropdownDiv>
             : <></>}
             </DropdownContainer>

             <DropdownContainer>
             <SidebarContentDropdownContentDiv onClick={selectSsnFullz} pb = "0.5rem">
                <DropdownLabel tt="uppercase"  bc = {active == "ssn" &&  "#CCCDE8" }
                 bl = {active == "ssn" &&  "2px solid #E5CF00"}
                 color = {active == "ssn" && "#000343"}
                 fw = {active == "snn" && "500"}
                 >SSN FULLZ</DropdownLabel>
                {!selectSsn ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleDown} />} 
            </SidebarContentDropdownContentDiv>
            {selectSsn ?  
            <DropdownDiv className="dropdown1">
            <DropdownLink to="/ssnfullz/nyssnfullz" ><DropdownContent onClick = {() => setActive("ssn")}>Bulk NY Fullz</DropdownContent></DropdownLink>
            <DropdownLink to="/ssnfullz/calissnfullz" ><DropdownContent onClick = {() => setActive("ssn")}>Bulk Cali SSN Fullz</DropdownContent></DropdownLink>
            <DropdownLink to="/ssnfullz/ohssnfullz" ><DropdownContent onClick = {() => setActive("ssn")}>Bulk OH SSN Fullz</DropdownContent></DropdownLink>
            <DropdownLink to="/ssnfullz/txssnfullz" ><DropdownContent onClick = {() => setActive("ssn")}>Bulk TX SSN Fullz</DropdownContent></DropdownLink>
            <DropdownLink to="/ssnfullz/flssnfullz" ><DropdownContent onClick = {() => setActive("ssn")}>Bulk FL SSN Fullz</DropdownContent></DropdownLink>
            <DropdownLink to="/ssnfullz/azssnfullz" ><DropdownContent onClick = {() => setActive("ssn")}>Bulk AZ SSN Fullz</DropdownContent></DropdownLink>    
            </DropdownDiv>
             : <></>}
             </DropdownContainer>

             <DropdownContainer>
             <SidebarContentDropdownContentDiv onClick={selectTutorials} pb = "0.5rem">
                <DropdownLabel tt="uppercase"  bc = {active == "tuto" &&  "#CCCDE8" }
                 bl = {active == "tuto" &&  "2px solid #E5CF00"}
                 color = {active == "tuto" && "#000343"}
                 fw = {active == "tuto" && "500"}
                 >tutorials</DropdownLabel>
                {!selectTuto ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleDown} />} 
            </SidebarContentDropdownContentDiv>

            {selectTuto ?  
            <DropdownDiv className="dropdown1">
            <DropdownLink to="/tutorials/cardingtut" ><DropdownContent onClick = {() => setActive("tuto")}>Carding Tutorials</DropdownContent></DropdownLink>
            <DropdownLink to="/tutorials/becwiretransfertut" ><DropdownContent onClick = {() => setActive("tuto")}>BEC Wire Transfer TUT</DropdownContent></DropdownLink>
            <DropdownLink to="/tutorials/alibabawiretransfertut" ><DropdownContent onClick = {() => setActive("tuto")}>Alibaba Wire Transfer TUT</DropdownContent></DropdownLink>
            <DropdownLink to="/tutorials/spammingtut" ><DropdownContent onClick = {() => setActive("tuto")}>Spamming Tutorial</DropdownContent></DropdownLink>
            <DropdownLink to="/tutorials/twofactorbypasstut" ><DropdownContent onClick = {() => setActive("tuto")}>2FA Code Bypass</DropdownContent></DropdownLink>
            <DropdownLink to="/tutorials/dumpsandcpntut" ><DropdownContent onClick = {() => setActive("tuto")}>Dumps and CPN TUT</DropdownContent></DropdownLink>  
            <DropdownLink to="/tutorials/sbatut" ><DropdownContent onClick = {() => setActive("tuto")}>SBA TUT</DropdownContent></DropdownLink> 
            </DropdownDiv>
             : <></>}
             </DropdownContainer>

             <DropdownContainer>
             <SidebarContentDropdownContentDiv onClick={selectCreditCard} pb = "0.5rem">
                <DropdownLabel tt="capitalize"  bc = {active == "cc" &&  "#CCCDE8" }
                 bl = {active == "cc" &&  "2px solid #E5CF00"}
                 color = {active == "cc" && "#000343"}
                 fw = {active == "cc" && "500"}
                 >Credit card logins</DropdownLabel>
                {!selectCc ? <FontAwesomeIcon icon={faAngleRight} /> : <FontAwesomeIcon icon={faAngleDown} />} 
            </SidebarContentDropdownContentDiv>
            {selectCc ?  
            <DropdownDiv className="dropdown1">
            <DropdownLink to="/creditcardlogins/chasecc" ><DropdownContent onClick = {() => setActive("cc")}>Chase CC</DropdownContent></DropdownLink>
            <DropdownLink to="/creditcardlogins/boacc" ><DropdownContent onClick = {() => setActive("cc")}>BOA CC</DropdownContent></DropdownLink>
            <DropdownLink to="/creditcardlogins/discoverbankcc" ><DropdownContent onClick = {() => setActive("cc")}>Discover Bank CC</DropdownContent></DropdownLink> 
            </DropdownDiv>
             : <></>}
             </DropdownContainer>
        </SidebarContentDropdownContent>
        </SidebarContent>
    </SidebarContainer>
  )
}

export default Sidebar