import * as type from './../constants/index';
import * as config from './../constants/config';

if (localStorage.getItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE) === null || localStorage.getItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE).length === 0) {
    localStorage.setItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE, "[]");
}
let defaulState = [
    {
        id: 'aplusautomation',
        title: 'aplusautomation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        quantity: 1,
        buy: true,
        image: '/images/aplusautomation.jpg'
    },
    
    {
        id: 'robofigcombo',
        title: 'robo fig combo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 15,
        quantity: 1,
        buy: true,
        image: '/images/robo_fig_combo.jpg'
    },
    {
        id: 'targetleapfrog',
        title: 'target leap frog',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        quantity: 1,
        buy: true,
        image: '/images/target-leap-frog.jpg'
    },
    {
        id:'aplusmedia',
        title: 'aplus media',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        quantity: 1,
        buy: false,
        image: '/images/aplus-media.jpg'
    }
];

const listProduct = (state = defaulState, action) => {
    switch(action.type) {
        case type.LIST_PRODUCT:
            return state;
        default:     
            return state;
    }
}
export default listProduct;