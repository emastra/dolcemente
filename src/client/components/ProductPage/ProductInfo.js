import React from 'react';
import PropTypes from 'prop-types';

import productImage from '../../images/bake.jpg';

export default function ProductInfo({ ingredients }) {
    return (
        <section id='product'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={`/${productImage}`} className='img-fluid' alt='product-image' />
                    </div>
                    <div className='col-lg-6 pt-4 pt-lg-0'>
                        <h3>Ingredienti</h3>
                        <ul>
                            {ingredients.map(item => 
                                <li key={item.id}>
                                    <span className='font-weight-bold mr-2'>{item.name}</span>
                                    <span>{`${item.quantity}${item.unit}`}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

ProductInfo.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
    })).isRequired
};
