import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actDeleteProduct, actEditProduct } from '../action';

class CartItem extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        // this.handleEdit = this.handleEdit.bind(this);

        this.state = {
            numberProduct: 0
        }
    }

    handleChange(event){
        this.setState({numberProduct: event.target.value});
    }

    handleDelete(item){
        this.props.handleDeleteItem(item);
    }

    handleEdit= item =>{
        this.props.actEditProduct(item);
    }

    render(){ 
        let {item, index} = this.props;

        let totalPriceElementCart = item.price * item.quantity; 
        
        let quantity = (this.state.numberProduct !== 0) ? this.state.numberProduct : item.quantity;

        return(
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.price} USD</td>
                <td><input name="numberProduct" onChange={this.handleChange} type="number" value={quantity} min="{1}"/></td>
                <td><strong>{totalPriceElementCart} USD</strong></td>
                <td>
                    <a className="label label-info update-cart-item" role='button' onClick={() => this.handleEdit(item)} data-product="">Update</a>
                    <a className="label label-danger delete-cart-item" role='button' onClick={() => this.handleDelete(item)} data-product="">Delete</a>
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {    
    return {
        handleDeleteItem : (item) => {   
            dispatch(actDeleteProduct(item));
        },
        actEditProduct : (item) => {
            dispatch(actEditProduct(item));
        }
    }
}

export default connect(null, mapDispatchToProps)(CartItem);