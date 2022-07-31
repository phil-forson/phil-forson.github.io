import React from 'react'
import hacker from "../../assets/hacker.jpg"
import { BodyContainer } from '../styled/BodyContainer.styled'
import { ContentGrid } from '../styled/ContentGrid.styled'
import GlobalStyles from '../styled/GlobalStyles'
import { PageContainer } from '../styled/PageContainer.styled'
import { Table } from '../styled/Table.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashCan} from "@fortawesome/free-solid-svg-icons"
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { CartTable, StyledBin, StyledCartHeader } from '../styled/CartPage.styled'

const CartPage = () => {
    console.log("this is the cart page")
    const active = 'cart'
  return (
    <PageContainer>
        <GlobalStyles />
        <ContentGrid>
            <BodyContainer>
                <img src={hacker} />
                <Table height = "auto"> 
                    <StyledCartHeader>
                        <div>Shopping Cart</div>
                        <div>Buy Now!</div>
                    </StyledCartHeader>
                    <CartTable>
                        <tr>
                            <th>Balance</th>
                            <th>Title</th>
                            <th>Sum</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>random</td>
                            <td>Checking</td>
                            <td>$189.00</td>
                            <td><StyledBin><FontAwesomeIcon icon={faTrashCan} /></StyledBin></td>
                        </tr>
                        <tr>
                            <td>random</td>
                            <td>Checking</td>
                            <td>$189.00</td>
                            <td><StyledBin><FontAwesomeIcon icon={faTrashCan} /></StyledBin></td>
                        </tr>
                        <tr>
                            <td>random</td>
                            <td>Checking</td>
                            <td>$189.00</td>
                            <td><StyledBin><FontAwesomeIcon icon={faTrashCan} /></StyledBin></td>
                        </tr>
                        <tr>
                            <td>random</td>
                            <td>Checking</td>
                            <td>$189.00</td>
                            <td><StyledBin><FontAwesomeIcon icon={faTrashCan} /></StyledBin></td>
                        </tr>
                        <tr>
                            <td>random</td>
                            <td>Checking</td>
                            <td>$189.00</td>
                            <td><StyledBin><FontAwesomeIcon icon={faTrashCan} /></StyledBin></td>
                        </tr>
                    </CartTable>
                </Table> 
            </BodyContainer>
        </ContentGrid>
    </PageContainer>
  )
}

export default CartPage;