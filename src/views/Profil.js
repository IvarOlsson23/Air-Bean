import './Profil.css'
import {connect} from 'react-redux'
import { useEffect, useState } from 'react'
import {HiOutlineMinus} from 'react-icons/hi'
import {GiNinjaHead} from 'react-icons/gi'
// import { useState } from 'react'
const Profil = ({LoginCreds}) => {

    console.log(LoginCreds,'Från LoginCreds')
    useEffect(() => {
            fetchItems()
        },[]);

    const [items, setItems] = useState([]);

    //Dynamiskt fetcha med det inloggade USER ID:t.
    const fetchItems = async () => {
        const data = await fetch('http://localhost:5000/api/order/zhmEi70WSxPtJYMFxgKuK')

        let items = await data.json();
        console.log(items,'från Profil');
        setItems(items)
    };



    return (
        <div className="main">
            <div>
                <GiNinjaHead className="avatar-icon"/>
                <h2>Hi, {LoginCreds.name}</h2>
                <p>{LoginCreds.epost}</p>
            </div>

  
        <div className="produkt-wrapper">
        </div>
            <div>
                <h2>OrderHistorik</h2>
                <HiOutlineMinus className="divider"/>
            {items.map(item =>(
                <span className="produkt" key={item.ordernummer}>
                    <p className="ordernummer">{item.ordernummer}</p>
                    <p>{item.ordertime}</p>     
                    <HiOutlineMinus className="divider"/>              
                </span>
            ))}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        LoginCreds: state.shop.user
    }
}

export default  connect(mapStateToProps)(Profil);
