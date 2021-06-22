
import Product from '../components/Product'
import { connect } from 'react-redux'
// import { fetchMenu } from '../Alternativ-Fetch/todoApi';
// import React, {useEffect } from 'react';

// import {  useDispatch } from 'react-redux';

const Menu = ({ stateProducts }) => {
console.log(stateProducts,'from Menu')


    return (
        <div>
            
                {/* <article className="todo-app">
            <ul className="todo-list">
                     {todos.map(item =>(
                <span className="produkt" key={item.name}>
                    <h2>{item.name} .....</h2> 
                </span>
            ))}
            </ul>
        </article> */}
            <h2 >Meny</h2>
            {stateProducts.map(prod => (
                <Product key={prod.id} productData={prod}/>
            ))}
        </div>
    )
}





const mapStateToProps = (state) => {
    return {
        stateProducts: state.shop.stateProducts, 
    }
}


export default connect( mapStateToProps,)(Menu);
