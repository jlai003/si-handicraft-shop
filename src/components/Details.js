import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import {ContainerButton} from './Styled-button'; 

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {data => {
         const {id, company, price, title, img, info, inCart} = data.details;
        return (
          <div className="container py-5">
       {/* title */}
          <div className="row">
            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
            </div>

          </div>
       {/* end title */}
       {/* product info */}
       <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
            <img src={img} className="img-fluid" alt="product" />
       </div>
       <div className="col-10 mx-auto col-md-6 my-3">
            <h2>model: {title}</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                Made by: <span>{company}</span>
            </h4>
            <h4 className="text-blue">
            <strong> Price: <span>$</span> {price}</strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb0">
                About the product:
            </p>
            <p className="text-muted lead">{info}</p>
            {/* buttons */}
            <Link to="/">
              <ContainerButton>Back to Products</ContainerButton>
            </Link>
              <ContainerButton className="cart-btn2" disabled={inCart? true:false} onClick={()=> {
              data.addToCart(id); data.openModal(id);}}>
              {inCart ? <span className="added-to-cart-btn">Added to Cart</span>:"Add to Cart"}</ContainerButton>
            </div>

       </div>

          </div>
        )
   
        }}

    </ProductConsumer>
    )
  }
}
