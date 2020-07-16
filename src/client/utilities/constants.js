const prod = {
    API_URL: 'http://localhost:3000/api/products', // will be https://myapp.herokuapp.com
};

const dev = {
    API_URL: 'http://localhost:8080/api/products'
};


export const config = process.env.NODE_ENV === 'development' ? dev : prod;