import React from "react";
import Image from '../images/andi-glasses-grey-front.jpg'
import AddToCart from "./addToCart";

const ImageCard2 = () => {
    return (
        <div class="card">
            <img src={Image} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <AddToCart/>
            </div>
        </div>
    )
}

export default ImageCard2