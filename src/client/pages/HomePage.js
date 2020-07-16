import React from 'react';

import Hero from '../components/Hero';
import ProductList from '../components/HomePage/ProductList';

const title = 'Benvenuto da Dolcemente';
const subtitle = 'Ordina on line i nostri prodotti, te li consegnamo a casa in giornata!';

export default function HomePage() {
    return (
        <>
            <Hero title={title} subtitle={subtitle} />
            <ProductList />
        </>
    );
}
