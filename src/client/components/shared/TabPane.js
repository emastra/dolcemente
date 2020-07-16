import React from 'react';
import PropTypes from 'prop-types';

import './TabPane.css';

export default function TabPane({ children }) {
    return (
        <div className='tab-pane fade show active' role='tabpanel'> 
            {children}
        </div>
    );
}

TabPane.propTypes = {
    children: PropTypes.node.isRequired,
};
