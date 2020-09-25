import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])
    const  [ price , setPrice ] = useState({});
     
    const addHandler = (product) =>{
        // console.log("clicked", product)
        setPrice(product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    const addHandler2 = (product) =>{
        // console.log("clicked", product)
        setPrice(product)
    }
  

    console.log(price)
    return (
        <div className="shop-container">
            <div className="cart">
                {/* <Cart cart={cart}></Cart> */}
                <p>{price.name}</p>
                <h5>{price.description}</h5>
                {/* <img src={price.img} alt=""/> */}
            </div>
            <div className="product">
               
                {
                    products.map(pd => <Product 
                        product = {pd}
                        handler = {addHandler}
                        handler2 = {addHandler2}
                        ></Product>)
                }
               
            </div>
        </div>
    );
};

export default Shop;