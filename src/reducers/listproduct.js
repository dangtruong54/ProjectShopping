// import * as config from './../constants/config';

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
        id:'aplusmedia',
        title: 'aplus media',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
        quantity: 1,
        buy: false,
        image: '/images/aplus-media.jpg'
    },
    {
        id: 'robofigcombo',
        title: 'robo fig combo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!',
        price: 12,
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
    }   
];

const listProduct = (state = defaulState, action) => {   
    return state;
}
export default listProduct;