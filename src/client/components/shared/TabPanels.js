import React from 'react';
import PropTypes from 'prop-types';

export default function TabPanels({ children }) {
    return (
        <div className='tab-content'>
            {children}
        </div>
    );
}

TabPanels.propTypes = {
    children: PropTypes.node.isRequired,
};