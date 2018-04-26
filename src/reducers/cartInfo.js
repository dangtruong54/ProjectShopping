import * as type from './../constants/index'
const defaultState = [];

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