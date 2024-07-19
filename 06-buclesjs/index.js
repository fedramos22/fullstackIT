// Bienvenida a la app
/* alert('Bienvenido a la carga de datos'); */

//Inicializamos el array de productos
let productos = [];

//Guardamos el producto del cliente en una variable
let producto = prompt('Ingrese nombre del producto');

//Guardamos el producto en el array
productos.push(producto);

//Imprimimos los productos que el cliente ingresa a la aplicación
for (let index = 0; index < productos.length; index++) {
    console.log(productos[index]);
}
