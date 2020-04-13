const express = require('express') // instalamos paquete express con --save
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000;

//Presentamos contenido estático con un middle ware
app.use( express.static(__dirname +'/public'))

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', { // enviamos parámetros al template
        nombre: 'andrés castro'
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})