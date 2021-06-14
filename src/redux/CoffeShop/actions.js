import * as actionTypes from './types';
import axios from 'axios';

export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id : itemID 
        }
    }
}


export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID
        }
    }
}


export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value,
        }
    }
}

export const saveUser = (userName) => {
    console.log(test)
    return {
        type: actionTypes.SAVE_USER,
        payload: {
            Name: userName
        }
    }
}

export const fetchDataRequest = () => {
    return {
        type: actionTypes.FETCH_DATA_REQUEST
    }
}
export const fetchDataSuccess = fetchMenu => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        payload: fetchMenu
    }
}
export const fetchDataFailure = error => {
    return {
        type: actionTypes.FETCH_DATA_FAILURE
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest)
        axios.get('http://localhost:5000/api/coffee')
        .then(response => {
            const fetchMenu = response.data
            dispatch(fetchDataSuccess(fetchMenu))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchDataFailure(errorMsg))
        })
    }
}
