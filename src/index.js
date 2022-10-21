const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

const routes = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
    extname: ".hbs"
}));

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));

// Routes
routes(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})