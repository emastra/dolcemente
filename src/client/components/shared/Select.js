import React from 'react';
import PropTypes from 'prop-types';

export default function Select(props) {
    const { name, label, selectedProduct, cakeList, onChange } = props;

    return (
        <div className='col-md-6 mb-3'>
            <label htmlFor={name}>{label}</label>
            <select
                className='form-control'
                name={name}
                value={selectedProduct}
                onChange={onChange}
            >
                <option value='none'>--Select--</option>
                {cakeList.map(product => 
                    <option key={product.id} value={product.id}>{product.name}</option>
                )}
            </select>
        </div>
    );
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    selectedProduct: PropTypes.string.isRequired,
    cakeList: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};