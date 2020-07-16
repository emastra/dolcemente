import React from 'react';
import PropTypes from 'prop-types';

import { generateDate, calculateCurrentPrice} from '../../utilities/utils';

import { ContextConsumer } from '../../context';

import { FaTrash } from 'react-icons/fa';

export default function tableRow({ product }) {
    return (
        <ContextConsumer>
            {(ctx) => {
                const { removeProduct } = ctx;

                return (
                    <tr>
                        <td>{generateDate(product.createdAt)}</td>
                        <td>{product.name}</td>
                        <td>
                            <div>
                                <span className='text-title text-muted mx-3'>{product.quantity}</span>
                            </div>
                        </td>
                        <td>{`${product.price}€`}</td>
                        <td>{`${calculateCurrentPrice(product.price, product.createdAt)}€`}</td>
                        <td>
                            <FaTrash className='text-danger icon' onClick={() => removeProduct(product.id)} />
                        </td>
                    </tr>
                );
            }}
        </ContextConsumer>
    );
}

tableRow.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        createdAt: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })
};
