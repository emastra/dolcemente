const prod = {
    API_URL: 'https://serene-beyond-47829.herokuapp.com'
};

const dev = {
    API_URL: 'http://localhost:8080/api/products'
};


export const config = process.env.NODE_ENV === 'development' ? dev : prod;