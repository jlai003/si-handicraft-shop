import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import logo from '../logo.svg';
import './FrontPage.css';

export default class FrontPage extends Component {

    render() {
        return(
        <React.Fragment>
            <div className="card" style={{width: "100%"}}>
            <div className="showcase">Img</div>
                {/* <img className="card-img-top container-fluid text-center d-none d-lg-block" src={'../../img/carvings.jpg'} alt="Card image cap"/> */}
                <div className="card-body">
                <h5 className="card-title font-weight-bold">You have come to the place to buy the best of Solomon Islands handicrafts</h5>
                <p className="card-text">Solomon Islands online Handicraft Market Place.. if you’re keen to check out a fascinating cultural festival, the Guadalcanal Weaving Festival will be held at Lela Beach 1-7 August. The festival is the first of its kind and is the result of a massive effort including representation of blah blah blah ..
                 </p>
                 <Link to = "/product">
                 <div className="d-flex w-25 justify-content-center">
                <a href="/products" className="btn btn-primary ">Go to our Shop</a>
                </div>
                </Link>
                </div>
            </div>
        </React.Fragment>
            );
        }
    }
