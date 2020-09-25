import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { userContext } from '../../App';
import fakeData from '../../fakeData';
import './ProductDetail.css';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
const ProductDetail = () => {
    const {productKey} = useParams()

    const singleProduct = fakeData.find( pd =>pd.key === productKey)
    // console.log(singleProduct)
    const {name, img, price, description} = singleProduct;

    const [loggedInUser , setLoggedInUser, singleProducts, setSingleProducts] = useContext(userContext)

    setSingleProducts(singleProduct)
   
    return (
        <div className="single-product  p-5">
            <div className="details p-5">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="image">
                    <img src={img} alt=""/>
                </div>
                    <p > <Link className="btn btn-primary" to="/booked" >Booked Now</Link> </p>
            </div>
            <div className="image">
               
                <div className="form-details p-4">
                    <form className=' text-center py-4 rounded' >
                    <div className="d-flex py-5">
                        <TextField  id="standard-basic" label="Origin" defaultValue='Dhaka' required/>
                        <TextField  id="standard-basic" label='Destination' required/>
                    </div>
                        <div className="d-flex mt-5 py-4">
                            <TextField
                                id="date"
                                label="From"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                shrink: true, 
                                }}
                            />
                            <TextField
                                id="date"
                                label="To"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;