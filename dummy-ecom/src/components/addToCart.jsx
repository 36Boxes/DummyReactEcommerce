import React from "react";
import { useCookies } from 'react-cookie';

function AddToCart (props) {

    const [cookies, setCookie, removeCookie] = useCookies(['cart']);

    const addToCart = () => {


        if (cookies.cart === undefined){
            setCookie("cart", [])
        }

        var cart = cookies.cart
        var updateQuantity = false

        // Loop through array to find product with existitng name and add 1 to quantity

        for( let product in cart){
            if (cart[product].name === props.props.name){
                cart[product].quantity += 1

                // Update flag to indicate this is a quantity update not a new product

                updateQuantity = true
            }
        }

        // Set the new cart in cookies

        if (updateQuantity === true){
            setCookie("cart", cart)
        } else {
            cart.push({name : props.props.name, price : props.props.price, quantity : 1})
            setCookie("cart", cart)
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