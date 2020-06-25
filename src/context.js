import React, { Component } from 'react';
import { storeProducts, detailProduct } from '../src/data';
//create new context obj
const ProductContext = React.createContext();
//Provider (provides all info for app)
//Consumer (whnever you want to use the info, use the Consumer) *no prop-drilling

class ProductProvider extends Component {
  state = {
    storeProducts,
    detailProduct,
  };

  handleDetail = () => {
    console.log('hello from detail');
  };
  addToCart = () => {
    console.log('hello from addToCart');
  };

  render() {
    return (
      //this provider is from the context obj, needs to sit on top of application
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {/* all children within this component */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
