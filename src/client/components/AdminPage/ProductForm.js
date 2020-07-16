import React from 'react';

import Select from '../shared/Select';
import Input from '../shared/Input';
import Button from '../shared/Button';

import { ContextConsumer } from '../../context';

export default function ProductForm() {
    return (
        <ContextConsumer>
            {(context) => {
                const { cakeList, adminFields, handleChange, handleSubmit } = context;

                return (
                    <form onSubmit={handleSubmit}>
                        <Select 
                            name='selectedProduct'
                            label='Scegli un prodotto'
                            selectedProduct={adminFields.selectedProduct}
                            cakeList={cakeList}
                            onChange={handleChange}
                        />

                        <Input 
                            name='quantityInput'
                            label='Quantità'
                            type='number'
                            quantityInput={adminFields.quantityInput}
                            onChange={handleChange}
                        />
                        
                        <Button type='submit'>
                            Aggiungi
                        </Button>
                    </form>
                );
            }}
        </ContextConsumer>
    );
}
