import React, { useState } from 'react';
import  './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, price, img, product, key} = props.product;
    
    return (
        <div className="product-container" onClick={() => props.handler2(props.product)}>
            <img src={img} alt=""/>
            <button className="btn btn-primary m-3 p-3" > <Link to={"/review/"+key}>preview</Link> </button>

            <hr></hr>

        </div>
    );
};

export default Product;