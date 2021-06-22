import React from 'react'
import './Orderstatus.css'
import {useEffect, useState} from 'react'


const Orderstatus = () => {


    //Dynamiskt fetcha med det inloggade USER ID:t.
    //Hämta data och visa Ordertime på senaste beställning.
        useEffect(() => {
            fetchItems()
        },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('http://localhost:5000/api/order/zhmEi70WSxPtJYMFxgKuK')
    
        let items = await data.json();
        console.log(items,'OrderStatus');
        setItems(items)
        
    };
    let t = items.length -1

    return (
        <div className="orderstatus-main">
            <p className="order-nummer">#{items[t].ordernummer}</p>
            <img src="" alt="" />
           <h2>Din order är på väg</h2> 
           <p>Estimerad leveranstid:</p>
            <p>{items[t].ordertime}</p>
            <button className="cool-btn">Ok, cool!</button>
        </div>

    )
}

export default Orderstatus
