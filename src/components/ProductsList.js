import React, { Component } from 'react';
import Product from './Product.js';
import Title from './Title';
import {ProductConsumer} from '../context';

export default class ProductsList extends Component {
       
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Handicraft range"/>
                        <div className="row">
                            <ProductConsumer>
                                {(data) => {
                                    return data.products.map(item=>
                                    <Product key={item.id} product={item}/> );
                               }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
           </React.Fragment>
        );
    }
}