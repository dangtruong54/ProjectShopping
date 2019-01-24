import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddProduct } from '../action';

class ItemProduct extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            numberProduct: 1
        }
        
    }

    handleChange(event){
        const target = event.target;
        const value =  target.value;
    
        this.setState({
            numberProduct: value
        });
    }

    handleAdd(item){
        let numberProduct = this.state.numberProduct;
        this.props.handleAddProduct(item, numberProduct);
    }

    render() {

        let {item} = this.props;

        let acticeBuy =
            <div>
                <input name='quantity-product-1' type='number' defaultValue={1} min={1} onChange={this.handleChange}/> 
                <a data-product={1} onClick={() => this.handleAdd(item)} role='button' className='price'> {item.price} USD </a>
            </div>; 

        if(!item.buy){
            acticeBuy = <span className='price'> {item.price} USD</span>
        }

        return (
            <div className="media product">
                <div className="media-left">
                    <a role='button'>
                        <img className="media-object" src={window.location.origin + item.image} alt="charmander" />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{item.title}</h4>
                    <p>{item.description}</p>
                    {acticeBuy}
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleAddProduct: (item, numberProduct) => {
            dispatch(actAddProduct(item, numberProduct));
        }
    }
}

export default connect(null, mapDispatchToProps)(ItemProduct);