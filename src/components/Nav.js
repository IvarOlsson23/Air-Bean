import './Nav.css';
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react'
import Navlinks from './Navlinks';
import { CgMenuRound } from 'react-icons/cg';
import {CgCloseO} from 'react-icons/cg'
import {FaShoppingCart} from 'react-icons/fa'
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
    
        const [open, setOpen] = useState(false);

        const hamburgerIcon = <CgMenuRound className="hamburger" onClick={() => setOpen(!open)}/>

        const closeIcon = <CgCloseO className="hamburger" onClick={() => setOpen(!open)}/>




    return (
        <nav className="nav">
            <ul>
                {open ? closeIcon : hamburgerIcon}
               { open && <Navlinks/> }
                <Link to="/Cart">
                    <div className="cart-background" />
                        <div className="cartCounter">{cartCounter}</div>
                        <FaShoppingCart className="cart-icon"/>
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
