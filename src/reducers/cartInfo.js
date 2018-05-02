import * as type from './../constants/index'
import * as config from './../constants/config';
import { remove } from 'lodash';

let defaultState = [];

const cartInfo = (state = defaultState, action) => {
    switch(action.type) {
        case type.ADD_PRODUCT:
            action.item.quantity = action.numberProduct;
            let productsCart = JSON.parse(localStorage.getItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE)) || [];
            let arrIdProduct = productsCart.map((item, index) =>{
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
                productsCart.push(action.item);   
            }else{
                let quantityProductFromCart = productsCart.filter((item) => {
                    return item.id === idProductAddToCart
                });
                let numberProductOld = quantityProductFromCart[0].quantity;
                action.item.quantity = parseInt(numberProductOld, 10) + parseInt(action.item.quantity, 10);
                remove(productsCart, function(cartItem) {
                    return cartItem.id === action.item.id;
                });
        
                productsCart.push(action.item);
            }               
            localStorage.setItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE, JSON.stringify(productsCart));
 
            return [...state];
        default:
            return state;
    }
}

export default cartInfo; 