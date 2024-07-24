
// POO ==> Programación Orientada a Objetos
// Java - PHP - C - C++ - C# - Python - Ruby - TypeScript

//Instanciar una clase en un objeto
let tuAuto = {
    color: 'verde',
    marca: 'Ford',
    modelo: 'Fiesta',
    puertas: 2,
    encender: function () {
        console.log(`El auto esta encendido`);
    },
    apagar: function () {
        console.log(`El auto esta apagado`);
    },
    acelera: function () {
        console.log(`El auto esta acelerado`);
    }
};

tuAuto.acelera();

//Base de datos
//JSON => JavaScript Object Notation
let personaTres = {
    "nombre": 'Pepe',
    "apellido": 'Perez',
    "edad": 34,
    "pais": 'Argentina',
    "saldo": 1500,
};

console.log(typeof personaTres);




