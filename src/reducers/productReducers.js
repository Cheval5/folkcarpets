import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_CATEGORY, SORT_PRODUCTS_BY_PRICE } from "../types";

export const productsReducer = (state = {}, action) => {
    //value we evaluate is action.type
    switch (action.type) {
        case FILTER_PRODUCTS_BY_CATEGORY:
            return {
                //return current state
                ...state,
                category: action.payload.category,
                //if change in state then match curr state
                filteredItems: action.payload.items
            }
        case SORT_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items
            }
        //if action.type is fetch_products then set action.payload inside the state
        case FETCH_PRODUCTS:
            return {items: action.payload, filteredItems: action.payload };
            //default case return state
        default:
            return state;
    }
}