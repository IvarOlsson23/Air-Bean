import * as actionTypes from './types';
import axios from 'axios';
// import { useEffect } from 'react';

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id : itemID 
        }
    }
}


// export const removeFromCart = (itemID) => {
//     return {
//         type: actionTypes.REMOVE_FROM_CART,
//         payload: {
//             id: itemID
//         }
//     }
// }


// export const adjustQty = (itemID, value) => {
//     return {
//         type: actionTypes.ADJUST_QTY,
//         payload: {
//             id: itemID,
//             qty: value,
//         }
//     }
// }

export const saveUser = (userName) => {
    return {
        type: actionTypes.SAVE_USER,
        payload: {
            Name: userName
        }
    }
}


export const fetchDataSuccess = (data) => {
    
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: data
        
    }
}

export const getTodos = (todos) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: todos
    }
}

export const fetchData = () => {
    
    return (dispatch) => {

        dispatch(fetchDataSuccess)
        axios.get('http://localhost:5000/api/coffee')
        .then(response => {
            const data = response.data
            dispatch(fetchDataSuccess(data))
            console.log(data,'från actions')
        })
        .catch(error => {
        })
    }
}
