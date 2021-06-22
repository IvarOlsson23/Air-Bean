import React from 'react'
import { Link } from 'react-router-dom'
import '../components/css/Navlinks.css';
import {HiOutlineMinus} from 'react-icons/hi'

const Navlinks = () => {
    return (
        <div className="links-main">
                <ul className="nav-links">
                <Link to="/Menu">
                    <li >Meny</li>
                </Link>
                    <HiOutlineMinus className="divider"/>
                <Link to="/About">
                    <li>Vårt kaffe</li>
                </Link>
                    <HiOutlineMinus className="divider"/>
                <Link to="/Profil">
                    <li>Min Profil</li>
                </Link>
                    <HiOutlineMinus className="divider"/>
                <Link to="/Orderstatus">
                    <li>Orderstatus</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navlinks
