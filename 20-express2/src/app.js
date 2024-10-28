// 1. Importamos Express
const express = require('express');

// creamos un puerto para que escuche el servidor
const PORT = 8080; 

// 2. creamos una instancia de express
const app = express();

//3. definimos una ruta
app.get('/', (req, res)=>{
    res.send('Hola Mundo');
}); // método http

app.get('/productos', (req,res)=>{
    //console.log(process);
    //res.send(process.env);
    res.send('<h1>Soy la página productos</h1>')
})// método http para obtener información/datos/archivos

app.get('/*', (req,res)=>{
    res.send(`<h1 style="color: red;" >Tenemos un error</h1>`)
});//Método http para cualquier ruta que no exista

// 4. Creamos un post (Mi app recibe datos)
app.post('/login', (req,res)=>{

    let email = req.body.email;
    let password = req.body.password;

    console.log(email);
    console.log(password);
    
    res.send('Datos recibidos')

})

// 5. activamos el servidor/ levantamos el servidor
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en https://localhost:${PORT}`);
});







//app.get('/productos',);