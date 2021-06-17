
import Product from '../components/Product'
import { fetchData } from '../redux/CoffeShop/actions'
import { connect } from 'react-redux'
// import { fetchMenu } from '../Alternativ-Fetch/todoApi';
// import React, {useEffect } from 'react';

// import { useSelector, useDispatch } from 'react-redux';

const Menu = ({props, fetchData, stateProducts }) => {
console.log(stateProducts,'from Menu')

//   const todos = useSelector(state => state.shop.todos);
//     const dispatch = useDispatch();


    // useEffect(() => {
    //     dispatch(fetchMenu());
    // }, [])

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

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
