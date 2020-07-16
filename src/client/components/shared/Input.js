import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
    const { name, label, type, quantityInput, onChange } = props;

    return (
        <div className='col-md-6 mb-3'>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className='form-control'
                name={name}
                value={quantityInput}
                onChange={onChange}
            />
        </div>
    );
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    quantityInput: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};