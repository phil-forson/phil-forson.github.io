import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
import hacker from "../../assets/hacker.jpg"
import { PageContainer } from '../styled/PageContainer.styled'
import GlobalStyles from '../styled/GlobalStyles'
import { DashboardTableHeader, Styled16, StyledTable } from '../styled/Dashboardbody.styled'
import { ContentGrid } from '../styled/ContentGrid.styled'
import { BodyContainer } from '../styled/BodyContainer.styled'
import { ConstStyledTable, Table } from '../styled/Table.styled'


const OrderHistoryPage = () => {
  const active = "orderhistory"
  return (
    <PageContainer>
      <GlobalStyles />
      <ContentGrid>
        <BodyContainer>
          <img src={hacker} />
            <Table height = "500px">
              <DashboardTableHeader>
                OrderHistory
              </DashboardTableHeader>
              <ConstStyledTable height= "440px">
                <tr>
                  <th>#</th>
                  <th>Date Of Payment</th>
                  <th>Title</th>
                  <th>Sum</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>#1024</td>
                  <td>2022-01-01 07:30:00</td>
                  <td>Checking Account</td>
                  <td>$189.00</td>
                  <td><Styled16>More</Styled16></td>
                </tr>
                <tr>
                <td>#1024</td>
                  <td>2022-01-01 07:30:00</td>
                  <td>Checking Account</td>
                  <td>$189.00</td>
                  <td><Styled16>More</Styled16></td>
                </tr>
                <tr>
                <td>#1024</td>
                  <td>2022-01-01 07:30:00</td>
                  <td>Checking Account</td>
                  <td>$189.00</td>
                  <td><Styled16>More</Styled16></td>
                </tr>
                <tr>
                <td>#1024</td>
                  <td>2022-01-01 07:30:00</td>
                  <td>Checking Account</td>
                  <td>$189.00</td>
                  <td><Styled16>More</Styled16></td>
                </tr>
                <tr>
                <td>#1024</td>
                  <td>2022-01-01 07:30:00</td>
                  <td>Checking Account</td>
                  <td>$189.00</td>
                  <td><Styled16>More</Styled16></td>
                </tr>
                <tr>
                <td>#1024</td>
                  <td>2022-01-01 07:30:00</td>
                  <td>Checking Account</td>
                  <td>$189.00</td>
                  <td><Styled16>More</Styled16></td>
                </tr>
                <tr>
                <td>#1024</td>
                  <td>2022-01-01 07:30:00</td>
                  <td>Checking Account</td>
                  <td>$189.00</td>
                  <td><Styled16>More</Styled16></td>
                </tr>
                <tr>
                <td>#1024</td>
                  <td>2022-01-01 07:30:00</td>
                  <td>Checking Account</td>
                  <td>$189.00</td>
                  <td><Styled16>More</Styled16></td>
                </tr>
                <tr>
                <td>#1024</td>
                  <td>2022-01-01 07:30:00</td>
                  <td>Checking Account</td>
                  <td>$189.00</td>
                  <td><Styled16>More</Styled16></td>
                </tr>
              </ConstStyledTable>
            </Table>
        </BodyContainer>
      </ContentGrid>
    </PageContainer>

  )
}

export default OrderHistoryPage;