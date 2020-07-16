import React from 'react';

import Hero from '../components/Hero';

import { Link } from 'react-router-dom';

export default function Default() {
    return (
        <>
            <Hero title='Page Not Found' />
            <section>
                <div className='container'>
                    <div className='section-title'>
                        <Link to='/'>
                            <h5>Torna alla Homepage</h5>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
