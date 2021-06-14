import React from 'react'
import './Cart.css'
import axios from 'axios';
import  {connect} from 'react-redux'

const Cart = ({cart, user}) => {
    console.log(cart,'från Cart')
    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    <p>{item.title}</p>
                    <span>{item.qty}</span>
                </div>
            ))}
            <button onClick={Order} className="final-btn">TAKE MY MONEY</button>
        </div>
    )
}


    const url = "http://localhost:5000/api/order"


   function Order() {
        axios.post(url, {
            cartOrder:"testkaffe",
            userID:"3i4TWKF_sfndIeztRdysN"
        })
        .then(res => {
            console.log(res.data)
        })
    }

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        user: state.shop.user
    }
}
export default connect(mapStateToProps)(Cart)
