const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'))

const hbs = require('hbs');
require('./hbs/helpers')
hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
const port = process.env.port || 3000;
//express hbs
app.set('view engine', 'hbs');

//helper


app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Manuel'

    });
})

app.get('/about', function(req, res) {

    res.render('about')
})




app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
})