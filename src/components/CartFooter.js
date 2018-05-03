import React, { Component } from 'react';
import * as config from './../constants/config';
import  { connect } from 'react-redux';

class CartFooter extends Component {
    render() {
        let listProductsCart = JSON.parse(localStorage.getItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE));

        let totalProducts = listProductsCart.reduce((sum, item, index, listProductsCart) => {          
            return sum += item.quantity;
        }, 0);

        let totalPrice = listProductsCart.reduce((sumPrice, item, index, listProductsCart) =>{
            return sumPrice += (item.price * item.quantity);
        }, 0)

        let statusCart = <tr><th colSpan="6">Empty product in your cart</th></tr>;
        if(listProductsCart.length > 0){
            statusCart = 
                <tr>
                    <td colSpan="4">There are <b>{totalProducts}</b> items in your shopping cart.</td>
                    <td colSpan="2" className="total-price text-left">{totalPrice} USD</td>
                </tr>
        }
        return(
            <tfoot id="my-cart-footer">
                {statusCart}                
            </tfoot>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartInfo : state.cartInfo
    }
}

export default connect(mapStateToProps, null)(CartFooter);

// export default CartFooter;