const express = require('express')
const path = require('path');
const morgan = require('morgan')
const handlebars = require('express-handlebars').engine;
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
    extname: ".hbs"
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/post', (req, res) => {
    res.render('post');
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})