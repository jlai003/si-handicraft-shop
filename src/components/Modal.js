import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import styled from 'styled-components';
import {ContainerButton} from './Styled-button';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {data => {
            const {modalOpen, closeModal} = data;
            const {img, title, price} = data.modalProduct;

        if (!modalOpen) {
            return null;
        }
        else {
           return (<ModalContainer>
                <div className="container">
                    <div className="row">
                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center
                    text-capitalize p-5">
                        <h5>Item added to Cart</h5>
                        <img src={img} className="img-fluid" alt="product"/>
                        <h5 className='text-title text-muted'>{title}</h5>
                        <h4 className="text-muted">Price: ${price}</h4>
                        <Link to="/"><ContainerButton onClick={()=> closeModal()}>Continue Shopping</ContainerButton></Link>
                        <Link to="/cart"><ContainerButton onClick={()=> closeModal()} className="cart-btn2">Go to Cart</ContainerButton>
                        </Link>
                        
                        
                    </div>

                    </div>
                </div>
            </ModalContainer>
            )
            }           
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
        border-radius: 1.5rem;
    }
`