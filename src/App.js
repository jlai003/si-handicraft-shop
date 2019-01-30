import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Modal from './components/Modal';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Scroll from './components/Scroll';
import FrontPage from './components/FrontPage';


class App extends Component {
  render() {
   return(
     <React.Fragment>
      <Navbar/>
    <Scroll>
      <Switch>
        <Route exact path='/' component={FrontPage}/>
        <Route exact path='/product' component={ProductsList}/>
        <Route path='/details' component={Details}/>
        <Route path='/cart' component={Cart}/>
        <Route exact path='/aboutus' component={AboutUs}/>
        <Route exact path='/contactus' component={ContactUs}/>
        <Route component={Default}/>    
      </Switch>
      <Modal/>
      </Scroll>
      </React.Fragment>
  
   );
  }
}

export default App;
