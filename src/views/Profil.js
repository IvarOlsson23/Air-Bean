import '../views/css/Profil.css'
import axios from 'axios'
import {connect} from 'react-redux'
import { useEffect, useState, } from 'react'
import {HiOutlineMinus} from 'react-icons/hi'
import {GiNinjaHead} from 'react-icons/gi'
// import { useState } from 'react'
const Profil = ({LoginCreds}) => {


    const [items, setItems] = useState([]);
    const username = LoginCreds.name
   useEffect(() => {

    async function fetchProfile() {
      const response = await axios.get(
        `http://localhost:3001/api/order/${username}`
      );
      setItems(response.data);
  };
  fetchProfile()
},[username] );


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
