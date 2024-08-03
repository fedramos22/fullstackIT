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

//saludarAdmin();

const titulo = () => {
    alert('Hiciste click en el título de la página');
}

// Tarea: Crear una pequeña calculadora con funciones, suma y resta

// 1. Función parseInt me convierte el dato ingresado lo transforma a entero
const sumar = () => {
    let num1 = parseInt(prompt("Ingrese número a restar"));
    let num2 = parseInt(prompt("Ingrese otro número a restar"));
    let resultado = num1 + num2;
    alert('Resultado de la suma: ' + resultado);
}

const restar = () => {
    let num1 = parseInt(prompt("Ingrese número a restar"));
    let num2 = parseInt(prompt("Ingrese otro número a restar"));
    let resultado = num1 - num2;
    alert('Resultado de la resta: ' + resultado);
}


