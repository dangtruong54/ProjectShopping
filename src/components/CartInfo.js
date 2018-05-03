import React, { Component } from 'react';
import CartItem from './CartItem';
import { connect }  from 'react-redux';
import * as config from './../constants/config';

class CartInfo extends Component {
    
    render() {       
        let productsCart = JSON.parse(localStorage.getItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE)) || [];

        let elementCart = null;
        if(productsCart.length > 0){
            elementCart = productsCart.map((item, index) => {
                return <CartItem item={item} key={index} index={index} />
            });
        }

        return(
            <tbody id="my-cart-body">
                {elementCart}
            </tbody>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemCart : state.cartInfo
    }
}

export default connect(mapStateToProps, null)(CartInfo);

// export default CartInfo;
