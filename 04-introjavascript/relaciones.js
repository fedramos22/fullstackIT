
// operadores relacionales en javascript
let uno = 500;
let dos = "500";

let mayor = (uno > dos);
console.log("El número " + uno + " es mayor que " + dos + ": " + mayor);

let menor = (uno < dos);
console.log("El número " + uno + " es menor que " + dos + ": " + menor);

let igual = (uno == dos);
console.log("El número " + uno + " es igual que " + dos + ": " + igual);

let distinto = (uno != dos);
console.log("El número " + uno + " es distinto que " + dos + ": " + distinto);


// combinaciones 
let mayorIgual = (uno >= dos);
console.log("El número " + uno + " es mayor o igual que " + dos + ": " + mayorIgual);

let menorIgual = (uno <= dos);
console.log("El número " + uno + " es menor o igual que " + dos + ": " + menorIgual);

let identicoTodo = (uno === dos); //valor, tipo de dato, es su clon
console.log("El número " + uno + " es idéntico que " + dos + ": " + identicoTodo);

// condicionales
// () => condicion que evalúa el si lógico;
// {} => bloque de código que se ejecuta si la condición se cumple;
// La condicion se cumple con un booleano: true/false;
let cuartos = true;
if (cuartos == true) {
    console.log("El partidos de cuartos de final se juego el 4 de Julio");
}

console.log("-----------------------------------------------");

let edad = 18;
let inscripto = true;
let argentino = true;

if(edad >= 18){
    console.log("Puede votar");
}

console.log("-----------------------------------------------");

if(edad >= 18){
    if(inscripto){
        if(argentino){
            console.log("2. Puede votar");
        }
    }
}

console.log("-----------------------------------------------");

// Operadores lógicos && (and), || (or), !(not);

if(edad >= 18 && inscripto && argentino){
    console.log("3. Puede votar")
}

console.log("-----------------------------------------------");

let email = "pepe@gmail.com";
let password = "123456";

//          true                true
if(email = "pepe@gmail.com" && password == "123456"){
    console.log("4. Bienvenido a la plataforma");
} else {
    console.log("Datos erroneos.");
}

console.log("-----------------------------------------------");

let email1 = "pepe@gmail.com";
let password1 = "123456";

if(email1 == "pepe@gmail.com" || password1 == "123456"){
    console.log("5. Bienvenido a la plataforma");
} else {
    console.log("Datos erroneos.");
}

console.log("-----------------------------------------------");

let club = true;
if(!club){
    console.log("6. Genial con tu club")
} else {
    console.log("No tenes club");
}

console.log("-----------------------------------------------");