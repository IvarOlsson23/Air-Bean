// import React, {useState, useEffect} from 'react'
import Product from '../components/Product'
// import { useEffect } from 'react'
import { fetchData } from '../redux/CoffeShop/actions'

import { connect } from 'react-redux'

const Menu = ({ fetchData, stateProducts }) => {



    return (
        <div>
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
