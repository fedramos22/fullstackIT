

/* Un bucle es un ciclo que repite unna pequeña estructura de código */
console.log('Imprimo el archivo de JS');
console.log('Imprimo el archivo de JS');
console.log('Imprimo el archivo de JS');
console.log('Imprimo el archivo de JS');

// variable del arreglo con array
let pepe = 'Pepe';
let pepes = 'Pepe';
let pepess = 'Pepe';


// index =       0       1      2       3      4      5       6       7
let alumnos = ['Juan','Pepe','Marta','Pedro','Luis','Rosa','María','Jorge'];

let productos = ['Coca','Fanta','Pespsi','Mirinda']

console.log(alumnos);//Imprimimos el array
console.log(productos);//Imprimimos el array

console.log(alumnos[0]);
console.log(alumnos[1]);
console.log(alumnos[2]);
console.log(productos[3]);

// función de contar los elementos de un arroz
console.log(alumnos.length);

// info 
// 1. variable local
// 2. condicion
// 3. incremento

//Imprimo el array de alumnos
for( let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}

console.log('-----------------------------------');


// Los arreglos tienen algunas funciones por defecto 
// agregar ellementos al final del array
alumnos.push('Javier');

for( let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i]);
}

console.log('---------------------------------------------');

let persona = [12345678, 'Juan', 'Perez', 25, 'Calle 123', true, 9.5, 'Argentina' ];
console.log(persona[1]);

//Objetos literales de JS
let personaDos = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion:'Calle 123',
    casado: true,
    calificacion: 9.5,
    pais: 'Argentina'
};

console.log(personaDos.nombre);
console.log(personaDos.pais);

console.log(persona);
console.log(personaDos);

let empleadosEmpresa = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25,
        direccion:'Calle 123',
        casado: true,
        calificacion: 9.5,
        pais: 'Argentina'
    },{
        nombre: 'Fede',
        apellido: 'Perez',
        edad: 25,
        direccion:'Calle 123',
        casado: true,
        calificacion: 9.5,
        pais: 'Argentina'
    },{
        nombre: 'Pedro',
        apellido: 'Perez',
        edad: 25,
        direccion:'Calle 123',
        casado: true,
        calificacion: 9.5,
        pais: 'Argentina'
    },{
        nombre: 'Maria',
        apellido: 'Perez',
        edad: 25,
        direccion:'Calle 123',
        casado: true,
        calificacion: 9.5,
        pais: 'Argentina'
    }
];

console.log(empleadosEmpresa);
console.log(empleadosEmpresa[1].nombre);

for (let i = 0; i < empleadosEmpresa.length; i++) {
    console.log(empleadosEmpresa[i].nombre);
    
}

