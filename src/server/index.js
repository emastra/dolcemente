const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

const productRouter = require('./routes/products');

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../../dist')));

app.use('/api/products', productRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.use((req, res, next) => {
  next(createError(404));
});

app.listen(app.get('port'), () => {
	console.log(`Server started on port ${app.get('port')}`);
});
