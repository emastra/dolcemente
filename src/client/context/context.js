import React, { Component } from 'react';
import cakes from './cakes.json';
import Client from '../utilities/productClient';
import { config } from '../utilities/constants';

const Context = React.createContext();
const ContextConsumer = Context.Consumer;

class ContextProvider extends Component {
    state = {
        cakeList: [],
        productList: [],
        adminFields: {}
    };

    async componentDidMount() {
        const products = await this.client.getProducts();

        this.setState({
            cakeList: cakes,
            productList: products,
            adminFields: {
                selectedProduct: 'none',
                quantityInput: ''
            }
        });
    }

    // Instantiate product client for requests to server
    client = new Client(config.API_URL);

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // deep copy adminFields from state
        const adminFields = Object.assign({}, this.state.adminFields);
        // update adminFields
        adminFields[name] = value;

        this.setState({ adminFields });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { selectedProduct, quantityInput } = this.state.adminFields;
        const cake = this.state.cakeList.filter(cake => cake.id == selectedProduct)[0];

        const product = {
            name: cake.name,
            quantity: quantityInput,
            price: cake.price
        }

        // post new product
        await this.client.postProduct(product);

        // get updated product list
        const products = await this.client.getProducts();

        this.setState({
            productList: products,
            adminFields: {
                selectedProduct: 'none',
                quantityInput: ''
            }
        });
    }

    removeProduct = async (id) => {
        await this.client.deleteProduct(id);

        const products = await this.client.getProducts();

        this.setState({
            productList: products
        });
    }

    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,

                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                    removeProduct: this.removeProduct
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export { 
    ContextProvider, 
    ContextConsumer 
};
