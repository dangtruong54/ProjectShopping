import React, { Component } from 'react';
import CartItem from './CartItem';
import { connect }  from 'react-redux';
import * as config from './../constants/config';

class CartInfo extends Component {

    // componentWillMount() {
    //     console.log('componentWillMount');    
    //   }
    
    //   componentDidMount() {
    //     console.log('componentDidMount');    
    //   }
    
    //   componentWillUnmount(){
    //     console.log('componentDidMount');
    //   }
    
    //   componentWillReceiveProps(nextProps) {
    //     console.log('componentWillReceiveProps');    
    //   }
    
    //   shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate - nextProps - nextState');    
    //   }
    
    //   componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate - nextProps - nextState');
    //   } 
    
    //   componentDidUpdate(prevProps, prevState) {
    //     console.log('componentDidUpdate - prevProps - prevState');
    //   }
    
    
    render() {       
        // let {cartInfo} = this.props;

        let cartInfo = JSON.parse(localStorage.getItem(config.GET_ITEM_CART_FROM_LOCALSTORAGE));
    
        let elementCart = null;
        if(cartInfo.length > 0){
            elementCart = cartInfo.map((item, index) => {
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
        cartInfo : state.cartInfo
    }
}

export default connect(mapStateToProps, null)(CartInfo);

// export default CartInfo;