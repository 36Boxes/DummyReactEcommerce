import React from "react";
import Image from '../images/andi-glasses-grey-front.jpg'
import AddToCart from "./addToCart";

const ImageCard2 = (props) => {
    return (
        <div class="card">
            <img src={Image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.props.name}</h5>
                <p class="card-text">{props.props.price}</p>
                <AddToCart props={props.props}/>
            </div>
        </div>
    )
}

export default ImageCard2