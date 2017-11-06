import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../../webpack.config.dev';
import open from 'open';
import bodyParser from 'body-parser';
const index = require('./routes/index');
const api = require('./routes/api');

/* eslint-disable no-console */
const port = 5001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('App running on port 5000 🔥')
    }
});
