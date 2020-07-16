import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../components/Hero';
import ProductInfo from '../components/ProductPage/ProductInfo';

import { ContextConsumer } from '../context';

export default function ProductPage(props) {
    const productId = props.match.params.id;

    return (
        <ContextConsumer>
            {(context) => {
                const { productList, cakeList } = context;

                const product = productList.filter(p => p.id == productId)[0];
                const cake = cakeList.filter(c => c.name === product.name)[0];

                return (
                    <>
                        <Hero 
                            title={product.name}
                            subtitle={`${product.price}€`}
                        />
                        <ProductInfo 
                            ingredients={cake.ingredients}
                        />
                    </>
                );
            }}
        </ContextConsumer>
    );
}

ProductPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    })
};
