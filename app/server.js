const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log(__dirname);

//app.use(express.static(path.join(__dirname, '/')));
app.use(express.static(__dirname));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', index);

app.listen(5001, () => console.log('App running on port 5000 🔥'));
