import * as actionTypes from './types';
// import axios from 'axios';
// import { useEffect } from 'react';

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id : itemID 
        }
    }
}



export const saveUser = (userData) => {
    return {
        type: actionTypes.SAVE_USER,
        payload: userData
    }
}



export const fetchData = (data) => {
    
    return {
        type: actionTypes.FETCH_DATA,
        payload: data
        
    }
}

