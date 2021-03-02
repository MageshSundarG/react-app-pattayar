import React, { Component } from 'react';
import './css/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AboutUS from './components/AboutUs';

import Home from './components/Home'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Blog from './components/blog/Blog';
import Pricing from './components/Pricing';
import Checkout from './components/checkout/Checkout';





function App() {
  return (
    <Router>
        <Switch>      
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/aboutus" component={AboutUS}></Route>
          <Route exact path="/Signin" component={SignIn}></Route>
          <Route exact path="/Signup" component={SignUp}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/pricing" component={Pricing}></Route>
          <Route exact path="/checkout" component={Checkout}></Route>
          
          
           
        </Switch>
      </Router>
  );
}

export default App;
