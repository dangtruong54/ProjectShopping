import React, { Component } from 'react';

class CartItem extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            numberProduct: this.props.item.quantity
        }
    }

    handleChange(event){
        this.setState({numberProduct: event.target.value});
    }

    render(){ 
        let {item, index} = this.props;

        let totalPriceElementCart = item.price * item.quantity;

        return(
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.price} USD</td>
                <td><input name="numberProduct" onChange={this.handleChange} type="number" value={this.state.numberProduct} min="{1}"/></td>
                <td><strong>{totalPriceElementCart} USD</strong></td>
                <td>
                    <a className="label label-info update-cart-item" role='button' data-product="">Update</a>
                    <a className="label label-danger delete-cart-item" role='button' data-product="">Delete</a>
                </td>
            </tr>
        )
    }
}

export default CartItem;