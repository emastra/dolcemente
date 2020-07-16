import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ type, children }) {
    return (
        <div className='col-md-3 mb-3'>
            <button className='btn btn-primary btn-lg btn-block' type={type}>
                {children}
            </button>
        </div>
    );
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};