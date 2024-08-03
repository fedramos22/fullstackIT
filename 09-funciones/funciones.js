// Funciones: estructura de código que ejecuta una tarea especifica y puede ser utilizada en diferentes partes del
// codigo
console.log('=========================================');

// estructura de una funcion
//function saludoInicial(){}

function saludoInicial() {
    console.log('Hola Mundo desde una función');
}

// Las funciones no se ejecutan hasta que son llamadas o invocadas
saludoInicial();

console.log('=========================================');

// Funciones con parametros / argumentos / info que necesita la funcion
// Variables locales son las que viven dentro de una funcion y no pueden ser accedidos fuera de la funcion

function sumar(num1, num2) {
    resultado = num1 + num2;
    console.log('el resultado de la suma es:', resultado);
}

sumar(2, 4);

console.log('=========================================');

// Funciones flecha

const restar = (num1, num2) => {
    resultado = num1 - num2;
    console.log('el resultado de la resta es:', resultado)
}

restar(2, 4);

console.log('=========================================');

const dividir = (num1, num2) => {
    let resultado = num1 / num2;
    return resultado;
    console.log('Hola mundo!'); // No se ejecuta porque esta detrás del return, que corta el script
}

dividir(4, 2);
let iva = dividir(4, 2) * 20;

console.log(`El iva a pagar es de: ${iva}`);
console.log('=========================================');

function decirNombre(nombre) {
    let saludo = 'Hola ' + nombre;
    return saludo;
}

decirNombre('Juan'); // Si se ejecuta solamente que no lo imprimimos en consola o no la guardamos en una variable
console.log(decirNombre('Jane'));

let saludo = decirNombre('Juan');
console.log(saludo);

console.log('=========================================');
