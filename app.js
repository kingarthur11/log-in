const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const data = require('./util/dataBase');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/login');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.routes);

app.listen(3000);