import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import hacker from "../../assets/hacker.jpg"
import { PageContainer } from '../styled/PageContainer.styled'
import GlobalStyles from '../styled/GlobalStyles'
import { DashboardBodyContainer, DashboardContentContainer, DashboardHeader, DashboardHeaderCard, DashboardHeaderCardHeader, DashboardHeaderText, DashboardTable, DashboardTableHeader, Styled16, StyledTable } from '../styled/Dashboardbody.styled'
import { ContentGrid } from '../styled/ContentGrid.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSackDollar, faCartShopping, faTicket } from "@fortawesome/free-solid-svg-icons"


const DashboardPage = ( ) => {
  const active = "dashboard"
  return (
    <PageContainer>
      <GlobalStyles />
      <ContentGrid>
        <DashboardBodyContainer>
          <img src={hacker} />
          <DashboardContentContainer>
            <DashboardHeader>
              <DashboardHeaderCard ml="0rem">
                <DashboardHeaderCardHeader>
                  <FontAwesomeIcon icon={faSackDollar} />
                  <div>Balance</div>
                </DashboardHeaderCardHeader>
                <DashboardHeaderText>
                  $200.25
                </DashboardHeaderText>
              </DashboardHeaderCard>
              <DashboardHeaderCard ml="2rem">
                <DashboardHeaderCardHeader>
                  <FontAwesomeIcon icon={faCartShopping} />
                  <div>Orders</div>
                </DashboardHeaderCardHeader>
                <DashboardHeaderText>
                  12
                </DashboardHeaderText>
              </DashboardHeaderCard>
              <DashboardHeaderCard ml="2rem">
                <DashboardHeaderCardHeader>
                  <FontAwesomeIcon icon={faTicket} />
                  <div>Tickets</div>
                </DashboardHeaderCardHeader>
                <DashboardHeaderText>
                  1
                </DashboardHeaderText>
              </DashboardHeaderCard>
            </DashboardHeader>
            <DashboardTable>
              <DashboardTableHeader>
                Activities
              </DashboardTableHeader>
              <StyledTable>
                <tr>
                  <th>DATE</th>
                  <th>Activity Info</th>
                  <th>Account Added</th>
                </tr>
                <tr>
                  <td>2022-01-01</td>
                  <td>World Forest Bank</td>
                  <td><Styled16>16</Styled16></td>
                </tr>
                <tr>
                  <td>2022-01-01</td>
                  <td>World Forest Bank</td>
                  <td><Styled16>16</Styled16></td>
                </tr>
                <tr>
                  <td>2022-01-01</td>
                  <td>World Forest Bank</td>
                  <td><Styled16>16</Styled16></td>
                </tr>
                <tr>
                  <td>2022-01-01</td>
                  <td>World Forest Bank</td>
                  <td><Styled16>16</Styled16></td>
                </tr>
                <tr>
                  <td>2022-01-01</td>
                  <td>World Forest Bank</td>
                  <td><Styled16>16</Styled16></td>
                </tr>
                <tr>
                  <td>2022-01-01</td>
                  <td>World Forest Bank</td>
                  <td><Styled16>16</Styled16></td>
                </tr>
                <tr>
                  <td>2022-01-01</td>
                  <td>World Forest Bank</td>
                  <td><Styled16>16</Styled16></td>
                </tr>
                <tr>
                  <td>2022-01-01</td>
                  <td>World Forest Bank</td>
                  <td><Styled16>16</Styled16></td>
                </tr>
              </StyledTable>
            </DashboardTable>
          </DashboardContentContainer>
        </DashboardBodyContainer>
      </ContentGrid>
      </PageContainer>
  )
}

export default DashboardPage