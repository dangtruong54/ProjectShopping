import React, { Component } from 'react';
import CartInfo from './CartInfo';
import CartFooter from './CartFooter';
import CartMessage from './CartMesssage';

class Cart extends Component {
    render() {
        return(
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				<div className="panel panel-danger"> 
					<div className="panel-heading"><h1 className="panel-title">Your Cart</h1></div> 
					<div className="panel-body">
						<table className="table">
							<thead>
								<tr>
									<th width="4%">#</th>
									<th>Pokemon</th>
									<th width="15%">Price</th>
									<th width="4%">Quantity</th>
									<th width="20%">Subtotal</th>
									<th width="25%">Action</th>
								</tr>
							</thead>
							<tbody id="my-cart-body">

                            {/* START CART BODY */}
                                <CartInfo />
                            {/* END CART BODY */}

                            </tbody>

                            {/* START CART FOOTER */}
                                <CartFooter />
                            {/* START CART FOOTER */}
                        </table>
                    </div>
                </div>

                {/* START CART FOOTER */}
                    <CartMessage />
                {/* START CART FOOTER */}

            </div>

        );
    }
}

export default Cart;