import React from 'react';

import Hero from '../components/Hero';
import Admin from '../components/AdminPage/Admin';

const title = 'Admin Page';
const subtitle = 'Qui puoi gestire i tuoi prodotti';

export default function AdminPage() {
    return (
        <>
            <Hero title={title} subtitle={subtitle} />
            <Admin />
        </>
    )
}
