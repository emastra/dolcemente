const fs = require('fs');

const getNewId = (array) => {
    if (array.length > 0) 
        return array[array.length - 1].id + 1;

    return 1;
}

const newDate = () => new Date().getTime();

const writeJSONFile = (filename, data) => {
    fs.writeFileSync(filename, JSON.stringify(data), 'utf8', (err) => {
        if (err) console.log(err);
    });
}

module.exports = {
    getNewId,
    newDate,
    writeJSONFile
}