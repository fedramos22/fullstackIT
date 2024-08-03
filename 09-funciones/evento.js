// Sin funciones
let nombre = prompt("Ingrese su nombre");
alert('Bienvenido Administrador ' + nombre + ' a la sección de eventos');
console.log('Bienvenido Administrador ' + nombre + ' a la sección de eventos');

// Con funciones
function saludarAdmin() {
    let codigo = prompt("Ingrese su código");
    alert('Bienvenido Administrador a la sección de eventos');
    console.log('El código de acceso es ' + codigo);
    console.log('Bienvenido Administrador a la sección de eventos');
}

//saludarAdmin(); 1:40

const titulo = () => {
  alert('Hiciste click en el título de la página');
}