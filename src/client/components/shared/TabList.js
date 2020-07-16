import React from 'react';
import PropTypes from 'prop-types';

export default function TabList({ children }) {
    return (
        <ul className='nav nav-tabs' role='tablist'>
            {children}
        </ul>
    );
}

TabList.propTypes = {
    children: PropTypes.node.isRequired,
};