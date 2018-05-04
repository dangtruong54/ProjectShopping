import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartMesssage extends Component {
    render() {
        let {message} = this.props;
        return(
            <div className="alert alert-success" role="alert" id="mnotification">{message} <b>Product</b></div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message : state.message
    }
}

export default connect(mapStateToProps, null)(CartMesssage);    