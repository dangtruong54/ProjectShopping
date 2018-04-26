import React, { Component } from 'react';
import ItemProduct from './ItemProduct';
import * as config from './../constants/config';

class ListProduct extends Component {
    render() {
        let listItem = JSON.parse(localStorage.getItem(config.GET_ITEM_FROM_LOCALSTOAGE));
        console.log(listItem);
        let itemElement;
        if(listItem.length > 0) {
            itemElement = listItem.map((item, index) => {
                return <ItemProduct key={index} item={item} />
            })
        }else{
            itemElement = <p>Not have product!</p>;
        }
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary"> 
                    <div className="panel-heading"><h1 className="panel-title">List Products</h1></div> 
                    <div className="panel-body" id="list-product">

                        {/* PRODUCT : START */}
                        {itemElement}
                        {/* PRODUCT : END */}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ListProduct;