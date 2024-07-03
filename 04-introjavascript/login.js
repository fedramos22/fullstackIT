//database
let email = "admin@gmail.com";
let password = "12345";

//Recibimos datos del user
let emailUser = prompt("Introduce tu email:");
let passwordUser = prompt("Introduce tu password:");

// comparamos los datos del user con la database
if(emailUser == email && passwordUser == password){
    window.location=("./index.html");
} else {
    alert("Ha ocurrido un error.");
}