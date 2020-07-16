import React from 'react';
import PropTypes from 'prop-types';

import './Hero.css';

export default function Hero({ title, subtitle }) {
    return (
        <section id='hero'>
            <div className='hero-container'>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        </section>
    );
}

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

