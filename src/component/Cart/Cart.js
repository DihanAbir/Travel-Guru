import React, { useState } from 'react';

const Cart = (props) => {
   const cart = props.cart
    // console.log(props)
    const [item, setItems] = useState(props.cart)
     const total = cart.reduce((total, prd) => total + prd.price, 0)

    return (
        <div>
            <h2>ordered items: {props.cart.length}</h2>

            <h1>Items summary {item.length}</h1>
            {/* <p>product name: { cart.name }</p> */}
        </div>
    );
};

export default Cart;