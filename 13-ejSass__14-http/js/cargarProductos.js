
// 1. Creamos las variables de nuestra app
let saludo = document.getElementById('bienvenida');
let botonCargar = document.getElementById('botonCargar');

// variable del array de los productos
let misProductos = [];

// Creamos funcion para cargar productos
botonCargar.addEventListener('click', (e) => {

    e.preventDefault();

    let formulario = document.getElementById("formulario");

    let nombreProducto = document.getElementById('nombreProducto').value;
    let precioProducto = document.getElementById('precioProducto').value;
    let stockProducto = document.getElementById('stockProducto').value;
    let descripcionProducto = document.getElementById('descripcionProducto').value;
    let imagenProducto = document.getElementById('imagenProducto').value;
    
    
    // 2. Creamos un objeto literal con los datos de un producto
    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        stock: stockProducto,
        descripcion: descripcionProducto,
        imagen: imagenProducto
    };
    
    // 3. Agregamos el producto al array de productos
    misProductos.push(producto);
    
    console.log(misProductos);
    
    // 4. Limpiamos los campos del formulario 
    /* limpiarCampos(); */

    // 4. Limpiamos los campos del formulario de otra forma
    //formulario.reset(); mas nuevo
    
    // 5. Guardamos los productos en el local storage
    //                                 pasa a tipo de dato a texto (esta en objeto)
    localStorage.setItem("productos", JSON.stringify(misProductos));

    cargarTabla();

});


// función para limpiar los campos del formulario
const limpiarCampos = () => {
    nombreProducto.value = "";
    precioProducto.value = "";
    stockProducto.value = "";
    descripcionProducto.value = "";
    imagenProducto.value = "";
};

// 6. creamos una función para cargar la tabla con los productos
let botonListar = document.getElementById("botonListar");

botonListar.addEventListener('click', (e) => {
    e.preventDefault();
    cargarTabla();
});

const cargarTabla = () => {
    let bodyTabla = document.getElementById("bodyTabla");

    //bodyTabla.innerHTML = "";

    // creamos la filas para cada producto
    let fila = document.createElement("tr");
    
    // creamos las columnas para cada producto
    let columnaNombre = document.createElement("td");
    let columnaPrecio = document.createElement("td");
    let columnaStock = document.createElement("td");
    let columnaImagen = document.createElement("td");

    // agregamos los valores a las columnas
    for (let i = 0; i < misProductos.length; i++) {
        columnaNombre.innerHTML = misProductos[i].nombre;
        columnaPrecio.innerHTML = misProductos[i].precio;
        columnaStock.innerHTML = misProductos[i].stock;
        columnaImagen.innerHTML = `<img src= "${misProductos[i].imagen}" width="100px"/>`;      
    };

    // Voy agregando los elementos a la fila
    fila.appendChild(columnaNombre);
    fila.appendChild(columnaPrecio);
    fila.appendChild(columnaStock);
    fila.appendChild(columnaImagen);

    // Subo la fila al body de la tabla
    bodyTabla.appendChild(fila);

};

// Ejemplos del DOM con las etiquetas de html
/* let titulosTabla = document.getElementsByTagName("th");
titulosTabla.style.color = "red";
console.log(titulosTabla);
 */

//imprimimos en la pantalla al cliente que se logueo
//tomamos el dato desde el localstorage: memoria local del navegador

saludo.innerHTML = `Bienvenido ${localStorage.getItem("email")}`;

let salir = document.getElementById("salir");

salir.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "./login.html";
});
