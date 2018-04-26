import React, { Component } from 'react';
import * as config from './../constants/config';

class CartFooter extends Component {
    render() {
        let listProducts = JSON.parse(localStorage.getItem(config.GET_ITEM_FROM_LOCALSTOAGE));
        let statusCart = <tr><th colSpan="6">Empty product in your cart</th></tr>;
        if(listProducts.length > 0){
            statusCart = 
                <tr>
                        <td colSpan="4">There are <b>5</b> items in your shopping cart.</td>
                        <td colSpan="2" className="total-price text-left">12 USD</td>
                </tr>
        }
        return(
            <tfoot id="my-cart-footer">
                {statusCart}                
            </tfoot>
        );
    }
}

export default CartFooter;