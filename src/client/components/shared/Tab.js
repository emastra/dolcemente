import React from 'react';
import PropTypes from 'prop-types';

export default function Tab({ children }) {
    return (
        <li className='nav-item'>
            {children}
        </li>
    );
}

Tab.propTypes = {
    children: PropTypes.node.isRequired,
};