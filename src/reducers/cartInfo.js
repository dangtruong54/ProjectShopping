import * as type from './../constants/index'
import * as config from './../constants/config';
import { remove } from 'lodash';
let defaultState = [];
let cartItems 	 = JSON.parse(localStorage.getItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE));
defaultState 	 = (cartItems !== null && cartItems.length > 0) ? cartItems : defaultState;

let updateItem = (state, action, updateItem = false) => {
    state = JSON.parse(localStorage.getItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE));
    let quantityProductFromCart = state.filter((item) => {
        return item.id === action.item.id
    });

    let numberProductOld = quantityProductFromCart[0].quantity;

    action.item.quantity = (updateItem === true) ? parseInt(action.item.quantity, 10) : (parseInt(numberProductOld, 10) + parseInt(action.item.quantity, 10));    

    let arrItemCartUpdateExitsItem = state.map((item,index) => {
        if(item.id === action.item.id){
            item.quantity = parseInt(action.item.quantity, 10);    
        }
        return item;
    });

    localStorage.setItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE, JSON.stringify(arrItemCartUpdateExitsItem));
}

const cartInfo = (state = defaultState, action) => {
    switch(action.type) {
        case type.ADD_PRODUCT:
            
            action.item.quantity = action.numberProduct;
            let arrIdProduct = state.map((item, index) =>{
                return item.id        
            });

            let idProductAddToCart = action.item.id;

            let checkExitsProduct = arrIdProduct.find((item) => {
                if(item === idProductAddToCart){ // product 
                    return true;
                }else{
                    return false;
                }
            })

            if(checkExitsProduct === undefined){ // add new product to Cart
                state.push(action.item);   
                localStorage.setItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE, JSON.stringify(state));
            }else{ // Update number Product when add from list product       
                updateItem(state, action, false);
            }             
            return [...state];

        case type.DELETE_PRODUCT:
            remove(state, (item) => {
                return item.id === action.item.id;
            });
            localStorage.setItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE, JSON.stringify(state));
            return [...state];

        case type.EDIT_PRODUCT:
            updateItem(state, action, true);
            return [...state];            
        default:
            return state;
    }
}

export default cartInfo; 