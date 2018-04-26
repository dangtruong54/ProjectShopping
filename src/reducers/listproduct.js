import * as config from './../constants/config';

let defaulState = [
    {
        title: 'aplusautomation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        quantity: 1,
        buy: true,
        image: '/images/aplusautomation.jpg'
    },
    {
        title: 'aplus media',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        quantity: 1,
        buy: false,
        image: '/images/aplus-media.jpg'
    },
    {
        title: 'robo fig combo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        quantity: 1,
        buy: true,
        image: '/images/robo_fig_combo.jpg'
    },
    {
        title: 'target leap frog',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        quantity: 1,
        buy: true,
        image: '/images/target-leap-frog.jpg'
    }   
];

let productsCart = localStorage.setItem(config.GET_ITEM_FROM_LOCALSTOAGE, JSON.stringify(defaulState));
// let productsCart = localStorage.setItem(config.GET_ITEM_FROM_LOCALSTOAGE, JSON.stringify(''));
defaulState = [];

const listProduct = (state = defaulState, action) => {   
    return state;
}
export default listProduct;