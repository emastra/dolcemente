import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

import { generateDate, calculateCurrentPrice} from '../../utilities/utils';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import productImage from '../../images/bake.jpg';

export default function Product({ product }) {
    return (
        <div className='col-lg-4 col-md-6 d-flex align-items-stretch'>
            <div className='card'>
                <img src={`/${productImage}`} className='card-img-top' alt='product-image' />
                <div className='card-body'>
                    <h5 className='card-title'>
                        <Link to={`/products/${product.id}`}>
                            {`${product.name} (${generateDate(product.createdAt)})`}
                        </Link>
                    </h5>
                    <p className='card-text'>{product.description}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <span className='price'>{`${calculateCurrentPrice(product.price, product.createdAt)}€`}</span>
                        <span className='quantity'>Disponibilità: {`${product.quantity}`}</span>
                        <Link to={`/products/${product.id}`}>
                            <FaSearch className='icon' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        createdAt: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })
};
