import './Nav.css';
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react'

import {connect} from 'react-redux';


const Nav = ({cart}) => {


    const [cartCounter, setCartCounter] = useState(0);
     useEffect(() => {
            let count = 0;
            cart.forEach((item) => {
                count += item.qty
            });

            setCartCounter(count);
        },[cart, cartCounter]);
    
    return (
        <nav className="nav">
            <ul className="nav-links">
                <Link to="/Menu">
                    <li>Meny</li>
                </Link>
                <Link to="/About">
                    <li>Vårt kaffe</li>
                </Link>
                <Link to="/Profil">
                    <li>Min Profil</li>
                </Link>
                <Link to="/Orderstatus">
                    <li>Orderstatus</li>
                </Link>
                <Link to="/Cart">
                    <div className="cartCounter">{cartCounter}</div>
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Nav)
