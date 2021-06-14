// import React, {useState, useEffect} from 'react'
import './Products.css'
import {connect} from 'react-redux';
import { useEffect } from 'react'
import { fetchData } from '../redux/CoffeShop/actions'
import {addToCart} from '.././redux/CoffeShop/actions'

const Product = ({ productData, addToCart, fetchData  }) => {

  
  // useEffect(() => {
  //   fetchData()
  // })

    return (
        <div className="produkt-wrapper">
            <button className="add-btn" onClick={() => addToCart(productData.id)}>+</button>
            <span>{productData.title}</span>
            <span> {productData.price}kr</span> <br/>
            <span>{productData.desc}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart:(id) => dispatch(addToCart(id))
  };
};
// const mapDispatchToProps2 = dispatch => {
//     return {
//         fetchData: () => dispatch(fetchData())
//     }
// }


export default connect(null, mapDispatchToProps)(Product);



    // useEffect(() => {
    //         fetchItems()
    //     },[]);

    // const [items, setItems] = useState([]);

    // const fetchItems = async () => {
    //     const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=10')

    //     const items = await data.json();
    //     console.log(items.results.name);
    //     setItems(items.results)
    // };

    // return (
    //     <div className="produkt-wrapper">
    //         <h1>Meny</h1>
    //         {items.map(item =>(
    //             <span className="produkt" key={item.name}>
    //                 <button onClick={() => addToCart(item.name)}>add</button>
    //                 <h2>{item.name} .....</h2>
    //                 <span>49kr</span>
                    
    //             </span>
    //         ))}
    //     </div>
    // )