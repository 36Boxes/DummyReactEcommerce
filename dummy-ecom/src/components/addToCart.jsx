import React from "react";
import { useCookies } from 'react-cookie';

function AddToCart () {

    const [cookies, setCookie, removeCookie] = useCookies(['cart']);

    const addToCart = () => {
        var existing = cookies.cart
        console.log(cookies)

        const exit = parseInt(existing) + 1

        setCookie('cart', exit)

        if (cookies.cart === undefined){
            setCookie('cart', 1)
        }

        console.log(cookies)
    }

    return (
        <React.Fragment>
            <div>
                <a href="#" class="btn btn-primary" onClick={addToCart}>Add to cart</a>
            </div>

        </React.Fragment>
    )

}

export default AddToCart;