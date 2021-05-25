import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
//used to handle async functions for get req
import thunk from 'redux-thunk';
import { productsReducer } from "./reducers/productReducers";
// import { cartReducer } from "./reducer/cartReducer";
// import { orderReducer } from "./reducer/orderReducers";

const initialState = {};
// to send all information about the redux store to chrome redux dev tools
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    combineReducers({
        products: productsReducer,
        // cart: cartReducer,
        // order: orderReducer
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;