import React from 'react';

import './Navbar.css';

import { Link } from 'react-router-dom';
import { ContextConsumer } from '../context/context';

export default function Navbar() {
    return (
        <ContextConsumer>
            {(context) => {
                const { cartItems, toggleSidebar, toggleSideCart } = context;

                return (
                    <header>
                        <div className='container-fluid'>

                            <div className='logo float-left'>
                                <h1 className='title'>
                                    <Link to={'/'}>Dolcemente</Link>
                                </h1>
                            </div>

                            <ul className='nav justify-content-end'>
                                <li className='nav-item'>
                                    <Link to={'/admin'} className='nav-link'>Admin</Link>
                                </li>
                            </ul>
                        </div>
                    </header>
                );
            }}
        </ContextConsumer>
    );
}

