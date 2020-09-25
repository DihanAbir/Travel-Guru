import React, { useState } from 'react';
import  './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, price, img, product, key} = props.product;
    
    return (
        <div className="product-container" onClick={() => props.handler2(props.product)}>
            <img src={img} alt=""/>
            <p  > <Link className="btn btn-primary m-3 p-1" to={"/review/"+key}>preview</Link> </p>

            <hr></hr>

        </div>
    );
};

export default Product;