
const express = require('express'); // ==> Importacion de archivos de express

const app = express(); // ==> Crear una aplicación en express

// Asignamos un puerto a la apliacion
const PORT = 9000;

// Creamos una ruta para la raíz de la aplicación
// LE paso 2 parametros, la ruta y la funcion
app.get('/', function(req, res){
    res.send('Bienvenido a mi primer servidor con Express');
});

app.get('/productos', (req, res)=>{
    //enviar una respuesta tipo html
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>
                Soy la página de Productos
            </h1>
        </body>
        </html>`);
});

app.get('/database', (req,res)=>{

    console.log('Tenemos conexión con una database');
    
    res.json({
        nombre: 'Juan',
        apellido: 'Pérez',
        edad: 42
    });
});

//LEvantamos el servidor
app.listen(PORT,()=>{
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

