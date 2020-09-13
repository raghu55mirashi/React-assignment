import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/homepage/HomePage'
import Cart from './components/cart/Cart'
import OrderThankYou from './components/cart/OrderThankYou'
import User from './components/user/User'


function App() {
  return (
    <div className="container pt-4 pb-4 vh-100">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/address" component={User} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/thankyou" component={OrderThankYou} />
      </Switch>
    </div>
  );
}

export default App;
