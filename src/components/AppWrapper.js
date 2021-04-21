import React from 'react'
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

const AppWrapper = () => {
    return (
      <div className="flex min-w-screen max-w-auto min-h-screen max-h-auto bg-black justify-center">
          <div className="min-h-screen max-h-auto bg-gray-900 px-8" style={{'width': '500px'}}>
              <Header />
              <Banner />
              <Router>
              <Switch>
                <Route path="/products">
                  <ProductsPage />
                </Route>
                <Route path="/">
                  <Homepage />
                </Route>
              </Switch>
              </Router>
          </div>
        </div>
    )
}

export default AppWrapper
