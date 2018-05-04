import React, { Component } from 'react';
import  { connect } from 'react-redux';
import * as config from './../constants/config';

class CartFooter extends Component {
    render() {
        let cartInfo = JSON.parse(localStorage.getItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE));

        let totalProducts = cartInfo.reduce((sum, item, index, cartInfo) => {          
            return sum += parseInt(item.quantity, 10);
        }, 0);

        let totalPrice = cartInfo.reduce((sumPrice, item, index, cartInfo) =>{
            return sumPrice += parseInt(item.price * item.quantity, 10);
        }, 0)

        let statusCart = <tr><th colSpan="6">Empty product in your cart</th></tr>;
        if(cartInfo.length > 0){
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