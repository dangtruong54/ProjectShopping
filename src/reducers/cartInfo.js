import * as type from './../constants/index'
import * as config from './../constants/config';
import { remove } from 'lodash';

let defaultState = [];
let cartItems 	 = JSON.parse(localStorage.getItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE));
defaultState 	 = (cartItems !== null && cartItems.length > 0) ? cartItems : defaultState;

let itemEdit = {
    id:'',
    title: ' media',
    description: '',
    price: 0,
    quantity: 0,
    buy: false,
    image: ''
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
                let quantityProductFromCart = state.filter((item) => {
                    return item.id === idProductAddToCart
                });
                let numberProductOld = quantityProductFromCart[0].quantity;
                action.item.quantity = parseInt(numberProductOld, 10) + parseInt(action.item.quantity, 10);

                let arrItemCartUpdateExitsItem = state.map((item,index) => {
                    if(item.id === idProductAddToCart){
                        item.quantity = action.item.quantity
                    }
                    return item;
                });
                localStorage.setItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE, JSON.stringify(arrItemCartUpdateExitsItem));     
            }
                 
            return [...state];

        case type.DELETE_PRODUCT:
            remove(state, (item) => {
                return item.id === action.item.id;
            });
            localStorage.setItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE, JSON.stringify(state));
            return [...state];

        case type.EDIT_PRODUCT:
            console.log(itemEdit);
            return state;
            
        default:
            return state;
    }
}

export default cartInfo; 