let data = require('../data/data.json');
const helper = require('../helpers/helper');

const dataPath = __dirname + '/../data/data.json';

const getProducts = () => {
    return data;
}

const getProduct = (id) => {
    return data.filter(p => p.id == id)[0];
}

const insertProduct = (product) => {
    const id = helper.getNewId(data);
    const createdAt = helper.newDate();

    const newProduct = {
        id,
        createdAt,
        ...product
    }

    data.push(newProduct);
    helper.writeJSONFile(dataPath, data);

    return id;
}

const deleteProduct = (id) => {
    data = data.filter(p => p.id != id);

    helper.writeJSONFile(dataPath, data);

    return id;
}

module.exports = {
    getProducts,
    getProduct,
    insertProduct,
    deleteProduct
}