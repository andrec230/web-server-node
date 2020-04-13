const http = require('http') // paquete incluido en node

http.createServer( (req, res) => {
    // Enviamos un texto
    // res.write('Hola Mundo')
    
    // También podríamos especificar qué tipo de contenido mandar
    // Enviemos un JSON
    res.writeHead(200, {'Content-Type': 'application/json'})

    let salida = {
        nombre: 'Andrés',
        edad: 42,
        url: req.url
    }
    res.write(JSON.stringify(salida))
    res.end() // Ojo no olvidar
}).listen(8080)

console.log('Listening 8080 port')