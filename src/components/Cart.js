import React from 'react'
import './Cart.css'
import axios from 'axios';
import  {connect} from 'react-redux'
import { useEffect,useState } from 'react';

const Cart = ({cart, LoginCreds, user}) => {
    console.log(cart,'från Cart')


    const [cartCounter, setCartCounter] = useState(0);
     useEffect(() => {
            let count = 0;
            cart.forEach((item) => {
                count += item.price * item.qty
            });
            setCartCounter(count);
            console.log(count)
        },[cart, cartCounter]);
           

    //        const [cartItems, setCartItems] = useState(0);
    //  useEffect(() => {
    //         let count = 
    //         cart.forEach((item) => {
    //             count += item.price * item.qty
    //         });
    //         setCartCounter(count);
    //         console.log(count)
    //     },[cart, cartCounter]);


        
            const url = "http://localhost:5000/api/order"
        
            //Skicka med valda produkter från "Cart" och user ID från state User
           function Order() {
                axios.post(url, {
                    body: JSON.stringify({cart, LoginCreds})
                })  
                .then(res => {
                    console.log(res.data)
                    console.log(LoginCreds)
                    console.log(cart,'från cart efter beställning')
                })
            }



    return (
        <div className="main-cart">
            <h2>Din beställning</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-produkt">
                    <div className="cart-name-price">
                        <span>{item.title}</span>...........
                        <span>{item.qty}</span>
                    </div>
                        <span className="cart-price">{item.price}Kr</span>
                </div>
            ))}

            <div className="cart-total">
                <span>Total</span>.........
                <p>{cartCounter} kr</p>
            </div>
            <button onClick={Order} className="final-btn">TAKE MY MONEY </button>
        </div>
    )
}




const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        LoginCreds: state.shop.user
    }
}
export default connect(mapStateToProps)(Cart)
