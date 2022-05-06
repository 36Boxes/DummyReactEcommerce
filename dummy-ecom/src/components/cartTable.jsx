import React from "react";
import { useCookies } from 'react-cookie';
import { Table, Media, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

function CartTable () {

    const [cookies, setCookie, removeCookie] = useCookies(['cart']);

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
        <tr>
                <th scope="row">
                    <Media>
                        <span className="mb-0 text-sm">
                            Glasses
                        </span>
                    </Media>
                </th>
                <th scope="row">
                    <Media>
                        <span className="mb-0 text-sm">
                            £10.00
                        </span>
                    </Media>
                </th>
                <th scope="row">
                    <Media>
                        <span className="mb-0 text-sm">
                            {cookies.cart}
                        </span>
                    </Media>
                </th>
                <td className="text-center">
        <UncontrolledDropdown>
          <DropdownToggle
            className="btn-icon-only text-primary"
            href="#pablo"
            role="button"
            size="sm"
            color=""
            onClick={e => {}}
          >
            <i className="fas fa-ellipsis-v" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-arrow" right>
            <DropdownItem
              
            >
              Edit Past Project
            </DropdownItem>
            <DropdownItem
              href="/"
              onClick={e => {}}
            >
              Delete Past Project
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
            </tr>
        </tbody>
    </Table>
    )

}

export default CartTable;