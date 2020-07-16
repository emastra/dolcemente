import React from 'react';

import TableRow from './tableRow';

import { ContextConsumer } from '../../context';

export default function ProductTable() {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Data</th>
                    <th scope='col'>Nome</th>
                    <th scope='col'>Quantità</th>
                    <th scope='col'>Prezzo iniziale</th>
                    <th scope='col'>Prezzo corrente</th>
                    <th scope='col'>Rimuovi</th>
                </tr>
            </thead>
            <ContextConsumer>
                {(context) => {
                    const { productList } = context;

                    return (
                        <tbody>
                            {productList.map(product => 
                                <TableRow key={product.id} product={product} />
                            )}
                        </tbody>
                    );
                }}
            </ContextConsumer>
        </table>
    );
}
