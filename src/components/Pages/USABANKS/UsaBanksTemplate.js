import React from 'react'
import { ContentGrid } from '../../styled/ContentGrid.styled'
import GlobalStyles from '../../styled/GlobalStyles'
import { PageContainer } from '../../styled/PageContainer.styled'
import hacker from '../../../assets/hacker.jpg'
import { BodyContainer } from '../../styled/BodyContainer.styled'
import { Buynow, DropdownCard, DropdownCardHeader, DropdownCardHeaderLeft, DropdownCardHeaderRight, DropdownTable, Incart } from '../../styled/DropdownArea.styled'

const UsaTemplate = ({ text, header }) => {
  return (
    <PageContainer>
    <GlobalStyles />
        <ContentGrid>
          <BodyContainer>
            <img src={hacker} />
            <DropdownCard>
              <DropdownCardHeader>
                <DropdownCardHeaderLeft>
                  <div>{header}</div>
                  <div>{text}</div>
                </DropdownCardHeaderLeft>
                <DropdownCardHeaderRight>View Cart</DropdownCardHeaderRight>
              </DropdownCardHeader>
              <DropdownTable>
                <tr>
                  <th>Balance</th>
                  <th>Title</th>
                  <th>Title</th>
                  <th>Sum</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>random</td>
                  <td>Checking</td>
                  <td>Principal.com [Login:Password]+Name</td>
                  <td fw="900">$189.00</td>
                  <td><Buynow>Buy now</Buynow></td>
                </tr>
                <tr>
                  <td>random</td>
                  <td>Checking</td>
                  <td>Principal.com [Login:Password]+Name</td>
                  <td fw="900">$189.00</td>
                  <td><Incart>In cart</Incart></td>
                </tr>
                <tr>
                  <td>random</td>
                  <td>Checking</td>
                  <td>Principal.com [Login:Password]+Name</td>
                  <td fw="900">$189.00</td>
                  <td><Buynow>Buy now</Buynow></td>
                </tr>
                <tr>
                  <td>random</td>
                  <td>Checking</td>
                  <td>Principal.com [Login:Password]+Name</td>
                  <td fw="900">$189.00</td>
                  <td><Buynow>Buy now</Buynow></td>
                </tr>
              </DropdownTable>
            </DropdownCard>
          </BodyContainer>
        </ContentGrid>
    </PageContainer>
  )
}

export default UsaTemplate

