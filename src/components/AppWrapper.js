import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Homepage from '../pages/Homepage.js'
import ProductsPage from '../pages/ProductsPage.js'
import Header from '../components/Header'
import Banner from '../components/Banner'
import FAQs from '../components/FAQs'
import Avatar from './Avatar.js';
import Partners from './Partners.js';
import StepOne from './StepOne.js';
import StepTwo from './StepTwo.js';
import StepThree from './StepThree.js';
import Footer from './Footer.js';
import CategoryButtons from './CategoryButtons.js';
import Checkout from '../pages/Checkout.js';

const AppWrapper = () => {

    let [cartItems, setCartItems] = useState([])
    let [cartPrice, setCartPrice] = useState(0)

    useEffect(() => {

      let price = 0;

      cartItems.forEach((item) => {
        price = price + Number(item.price)
      })

      setCartPrice(price)

      
    }, [cartItems])

    return (
      <div className="flex min-w-screen max-w-auto min-h-screen max-h-auto bg-black justify-center">
          <div className="min-h-screen max-h-auto bg-gray-900 px-0" style={{'width': '500px'}}>
              <Router>
              <Switch>
                <Route path="/products">
                  <ProductsPage setCartItems={setCartItems} cartItems={cartItems} cartPrice={cartPrice} />
                </Route>
                <Route path="/checkout">
                  <Header />
                  <Checkout cartItems={cartItems} />
                </Route>
                <Route path="/">
                  <Header />
                  <Banner />
                  <Homepage />
                </Route>
              </Switch>
              <FAQs />
              <Avatar />
              <Partners />
              <StepOne />
              <StepTwo /> 
              <StepThree />
              <Footer />
              </Router>
          </div>
        </div>
    )
}

export default AppWrapper
