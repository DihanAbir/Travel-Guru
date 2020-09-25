import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './component/Shop/Shop';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ReviewProduct from './component/ReviewProduct/ReviewProduct';
import ProductDetail from './component/ProductDetail/ProductDetail';
import Login from './component/Login/Login';
import Booked from './component/Booked/Booked';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';



export const userContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [singleProduct, setSingleProduct] = useState({})
  console.log(loggedInUser)
  return (
    <userContext.Provider value={[loggedInUser , setLoggedInUser, singleProduct, setSingleProduct]}>
      <p>Name: {loggedInUser.name}</p>
      
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route exact path="/home">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booked">
              <Booked></Booked>
            </PrivateRoute>
            <Route path="/review/:productKey">
              <ProductDetail></ProductDetail>
            </Route>
            <Route path="/review">
              <ReviewProduct></ReviewProduct>
            </Route>
          </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
