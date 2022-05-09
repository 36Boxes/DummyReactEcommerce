import React from "react";
import { useCookies } from 'react-cookie';
import { Media } from 'reactstrap';

function CartTableRow (props) {

    const [cookies, setCookie, removeCookie] = useCookies(['cart']);

    const removeFromCookies = () => {
        let localCart = cookies.cart
        console.log(localCart)
        localCart.splice(props.props.id, 1)
        setCookie("cart", localCart)
    }

    return (
        <tr>
            <th scope="row">
                <Media>
                    <span className="mb-0 text-sm">
                        {props.props.name}
                    </span>
                </Media>
            </th>
            <th scope="row">
                <Media>
                    <span className="mb-0 text-sm">
                        {props.props.price}
                    </span>
                </Media>
            </th>
            <th scope="row">
                <Media>
                    <span className="mb-0 text-sm">
                        {props.props.quantity}
                    </span>
                </Media>
            </th>
            <th scope="row">
                <Media>
                    <a className="btn" onClick={removeFromCookies}>
                        <i class="fas fa-trash"></i>
                    </a>
                </Media>
            </th>
        </tr>
    );

}


export default CartTableRow