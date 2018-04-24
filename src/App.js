import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import ListProduct from './components/ListProduct';
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
        <div className="row">

          {/* TITLE : START */}
            <Title />
          {/* TITLE : END */}

          {/* LIST PRODUCT : START */}
            <ListProduct />
          {/* LIST PRODUCT : END */}

          {/* CART : START */}
            <Cart />
          {/* CART : END */}

        </div>
    );
  }
}

export default App;
