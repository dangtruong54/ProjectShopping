import { combineReducers } from 'redux';
import listProduct from './listProduct';
import cartInfo from './cartInfo';
import message from './message';

const projectShopping = combineReducers({
    listProduct,
    cartInfo,
    message
});

export default projectShopping;