require('env2')('.env');
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookiParsar = require('cookie-parser');
const router = require('./routes/index');

const {notFoundError , serverError} = require('./controllers/index')
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(cookiParsar());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, '..', 'public','assets')));

app.use('/api/v1', router);
app.use(notFoundError);
app.use(serverError);

module.exports = app;