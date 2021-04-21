import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Homepage from '../pages/Homepage.js'
import ProductsPage from '../pages/ProductsPage.js'

const AppWrapper = () => {
    return (
        <Router>
        <div>
          <Switch>
            <Route path="/products">
              <ProductsPage />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default AppWrapper
