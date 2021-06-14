import {combineReducers} from 'redux';

import Reducer from './CoffeShop/reducer';

const rootReducer = combineReducers({
    shop: Reducer
});

export default rootReducer;