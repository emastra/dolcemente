export default class productClient {
    constructor(url) {
        this.apiURL = url;
    }

    getProducts = async () => {
        const response = await fetch(this.apiURL);
        const products = await response.json();

        return products;
    }

    postProduct = async (product) => {
        const response = await fetch(this.apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        });

        const id = await response.json();

        return id;
    }

    deleteProduct = async (id) => {
        const response = await fetch(`${this.apiURL}/${id}`, {
            method: 'DELETE',
        });

        const deletedId = await response.json();

        return deletedId;
    }

    getProduct = async (id) => {
        const response = await fetch(`${this.apiURL}/${id}`);
        const product = await response.json();

        return product;
    }
}