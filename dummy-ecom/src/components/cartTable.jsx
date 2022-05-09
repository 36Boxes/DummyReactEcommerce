import React from "react";
import { useCookies } from 'react-cookie';
import { Table } from 'reactstrap';
import CartTableRow from "./cartTableRow";

function CartTable () {

    const [cookies, setCookie, removeCookie] = useCookies(['cart']);

    const productList = cookies.cart.map((data, id) => {
      return <CartTableRow props={{name : data.name, price : data.price, id: id, quantity : data.quantity}}/>
    })

    return (
        <Table>
        <thead className="thead-light">
            <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
          {productList}
        </tbody>
    </Table>
    )

}

export default CartTable;