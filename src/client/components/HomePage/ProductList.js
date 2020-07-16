import React from 'react';

import './ProductList.css';

import Product from './Product';

import { calculateCurrentPrice } from '../../utilities/utils';
import { ContextConsumer } from '../../context';

export default function Products() {
    return (
        <ContextConsumer>
            {(context) => {
                let { productList } = context;

                productList = productList.filter((product) => {
                    const currentPrice = calculateCurrentPrice(product.price, product.createdAt);
                    return currentPrice != 0 && product.quantity != 0;
                });

                return (
                    <section id='products'>
                        <div className='container'>
                            <div className='section-title'>
                                <h3>I nostri Prodotti</h3>
                            </div>
                            <div className='row'>
                                {productList.length === 0 
                                    ? (
                                        <div className='col text-title text-center'>
                                            There are no cakes in stock
                                        </div>
                                    ) : (
                                        productList.map((product) => {
                                            return <Product key={product.id} product={product} />;
                                        })
                                    )
                                }
                            </div>
                        </div>
                    </section>
                );
            }}
        </ContextConsumer>
    );
}