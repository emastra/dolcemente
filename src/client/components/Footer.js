import React from 'react';

import './Footer.css';

import { ContextConsumer } from '../context/context';

export default function Footer() {
    return (
        <ContextConsumer>
            {(context) => {
                const { socialIcons } = context;

                return (
                    <footer>
                        <div className='container'>
                            
                            <div className='footer-content'>
                                Developed by <a href='http://mastragostino.herokuapp.com/'>Emiliano Mastragostino</a>
                            </div>
                        </div>
                    </footer>
                );
            }}
        </ContextConsumer>
    );
}
