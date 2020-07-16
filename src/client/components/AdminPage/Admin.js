import React from 'react';

import TabList from '../shared/TabList';
import Tab from '../shared/Tab';
import TabPanels from '../shared/TabPanels';
import TabPane from '../shared/TabPane';

import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

import { NavLink, Route } from 'react-router-dom';

export default function Admin() {
    return (
        <section id='admin'>
            <div className='container'>
                <TabList>
                    <Tab>
                        <NavLink exact to='/admin' className='nav-link'>Aggiungi Un Prodotto</NavLink>
                    </Tab>
                    <Tab>
                        <NavLink to='/admin/on-sale' className='nav-link'>Prodotti In Vendita</NavLink>
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPane>
                        <Route exact path='/admin' component={ProductForm}/>
                    </TabPane>
                    <TabPane>
                        <Route path='/admin/on-sale' component={ProductTable}/>
                    </TabPane>
                </TabPanels>
            </div>
        </section>
    )
}
