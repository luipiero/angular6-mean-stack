const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const {
    mongoose
} = require('./database');

// settings
app.set('port', process.env.PORT || 3000);
// middlewares
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

// routes
const apiRouter = require('./router/api_v1');
app.use('/', apiRouter);
// static
app.use(express.static(path.resolve('./public/dist/public')));

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'))
});

// starting the server
app.listen(app.get('port'),
    () => console.log(`server on port ${app.get('port')}`));