import './Profil.css'
import {connect} from 'react-redux'
import { useEffect, useState } from 'react'
// import { useState } from 'react'
const Profil = ({LoginCreds}) => {

    console.log(LoginCreds[0],'Från LoginCreds')
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
                <img src="" alt="profil-avatar" />
                <h2>{LoginCreds[0].name}</h2>
                <p>{LoginCreds[0].epost}</p>
            </div>

  
        <div className="produkt-wrapper">
        </div>
            <div>
                <h3>OrderHistorik</h3>
            {items.map(item =>(
                <span className="produkt" key={item.ordernummer}>
                    <p className="ordernummer">{item.ordernummer}</p>
                    <p>{item.ordertime}</p>                   
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
