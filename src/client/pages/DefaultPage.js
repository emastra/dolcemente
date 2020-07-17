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
                        <h5>
                            <Link to='/'>
                                Torna alla Homepage
                            </Link>
                        </h5>
                    </div>
                </div>
            </section>
        </>
    );
}
