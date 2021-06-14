import React from 'react'
import './Cart.css'
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
            <button className="final-btn">TAKE MY MONEY</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        user: state.shop.user
    }
}
export default connect(mapStateToProps)(Cart)
