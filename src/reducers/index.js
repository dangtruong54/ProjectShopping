import { combineReducers } from 'redux';
import listProduct from './listProduct';
import cartInfo from './cartInfo';

const projectShopping = combineReducers({
    listProduct,
    cartInfo
});

export default projectShopping;