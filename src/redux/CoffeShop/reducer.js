

import * as actionTypes from './types';



const initState = {
    stateProducts: [
        //hårdkodad menu
    {
      "id": 1,
      "title": "Bryggkaffe",
      "desc": "Bryggd på månadens bönor.",
      "price": 39
    },
    {
      "id": 2,
      "title": "Caffè Doppio",
      "desc": "Bryggd på månadens bönor.",
      "price": 49
    },
    {
      "id": 3,
      "title": "Cappuccino",
      "desc": "Bryggd på månadens bönor.",
      "price": 49
    },
    {
      "id": 4,
      "title": "Latte Macchiato",
      "desc": "Bryggd på månadens bönor.",
      "price": 49
    },
    {
      "id": 5,
      "title": "Kaffe Latte",
      "desc": "Bryggd på månadens bönor.",
      "price": 54
    },
    {
      "id": 6,
      "title": "Cortado",
      "desc": "Bryggd på månadens bönor.",
      "price": 39
    }],
    cart: [],
    user: [
    {
        //Hårdkodad användare
      "name": "testTorsdag",
      "epost": "torsdag@test.se",
      "id": "G4JHGNEfM2pdyxeW6XGMb",
      "password": "9RtoWrpmXp"
    },

],
}



const Reducers = (state = initState, action) => {

  
    switch(action.type) {
        case actionTypes.ADD_TO_CART:

            const item = state.stateProducts.find(products => products.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)

            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty: 1}]
            };


        case actionTypes.SAVE_USER:
          return {
            ...state,
            user: [...state.user, action.payload]
          }

          case actionTypes.FETCH_DATA_SUCCESS:
              return {
                  ...state,
                  stateProducts: action.payload
              }

        default:
            return state;
            
    }

    
    
}

export default Reducers;