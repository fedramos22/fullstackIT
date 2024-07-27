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
    console.log('el resultado de la suma es:',resultado);
}

sumar(2, 4);

console.log('=========================================');

// Funciones flecha

const restar = (num1, num2) => {
    resultado = num1 - num2;
    console.log('el resultado de la resta es:',resultado)
}

restar(2, 4);

console.log('=========================================');
