import React, { Component } from 'react';
import Product from '../Product/Product';
import Title from '../Title/Title';
import { ProductConsumer } from '../../context';

//parent container for each product
export default class ProductList extends Component {
  render() {
    return (
      <>
        {/* py-5 is padding bottom 5 for bootstrap */}
        <div className='py-5'>
          <div className='container'>
            <Title name='our' title='products' />

            <div className='row'>
              <ProductConsumer>
                {(value) => {
                  return value.storeProducts.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
      // <Product />
    );
  }
}
