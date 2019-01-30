import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import logo from '../logo.svg';
import {ContainerButton} from './Styled-button';
import styled from 'styled-components';


export default class Navbar extends Component {

    render() {
        return(
            <NavWrapper className="navbar navbar-dark navbar-expand-sm px-sm-5">
    {  /*
    https://www.iconfinder.com/icons/1243689/call_phone_icon
    Creative Commons (Attribution 3.0 Unported);
    https://www.iconfinder.com/Makoto_msk */}
    <Link to='/'>
        {/* <img src={logo} alt="" className="navbar-brand"></img> */}
        <img src="/mobile-phone.png" alt="" className="navbar-brand"></img>

    </Link>
    <ul className="navbar-nav align-items-center">
         <li>
         <Link to="/" className="company-title">Wantok Handicraft Shop</Link>
         </li>
    <li className="nav-item ml-5">
            <Link to="/product" className="nav-link">product</Link>
        </li>
        <li className="nav-item ml-5">
            <Link to="/aboutus" className="nav-link">about us</Link>
        </li>
        <li className="nav-item ml-5">
            <Link to="/contactus" className="nav-link">contact</Link>
        </li>

    </ul>
     <Link to="/cart" className="ml-auto">
    <ContainerButton>
        <span> <i className="fas fa-cart-plus"/>  </span> My Cart</ContainerButton>

    </Link>

    </NavWrapper>

);

    }

}
const NavWrapper = styled.nav `
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
       
        &:hover {
            color: var(--mainYellow) !important;
        }
     }
    }
`;
