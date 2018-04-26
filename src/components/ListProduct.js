import React, { Component } from 'react';
import ItemProduct from './ItemProduct';
import { connect } from 'react-redux';

class ListProduct extends Component {
    render() {
        let {listItem} = this.props;
   
        let itemElement;
        if(listItem !== null) {
            itemElement = listItem.map((item, index) => {
                return <ItemProduct key={index} item={item} />
            })
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

const mapStateToProps = (state) => {
    return {
        listItem : state.listProduct
    }
}

export default connect(mapStateToProps, null)(ListProduct);