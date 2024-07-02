// el usuario nos proporciona los valores de los números
alert("Hola, vamos a sumar dos números!");

// el prompt es una función que nos permite pedirle al usuario que ingrese un valor
let numeroUnoDelUsuario = prompt("ingresar primer número");

console.log("El número del user: " + numeroUnoDelUsuario);

let confirmacion = confirm("El número que ingresaste es " + numeroUnoDelUsuario + " ¿Es correcto?");

console.log("La confrimación del usuario es " + confirmacion);