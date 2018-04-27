import * as type from './../constants/index'
import * as config from './../constants/config';

let defaultState = [];
defaultState = JSON.parse(localStorage.getItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE)) || [];

const cartInfo = (state = defaultState, action) => {  
    switch(action.type) {
        case type.ADD_PRODUCT:
            action.item.quantity = action.numberProduct;  
            return action.item;
        default:
            return state;
    }
}

export default cartInfo; 