
console.log(document);

//console.log(document.getElementById('email'));

//declaro las variables
let email;
let password;



// base de datos

let emailDatos = "pepe@gmail.com"
let passwordDatos = '123456789'

// 1. declaramos una variable para manejar el formulario
let formulario = document.getElementById('formulario');

// 2. agregamos un evento al formulario
formulario.addEventListener('submit', function(evento) {
});

formulario.addEventListener('submit', (e)=>{

    // 3. evitamos que el formulario envie datos vacios
    e.preventDefault();

    // 4. Invocamos a la funcion
    //loginUser();

    // 5. O podemos hacerlo directamente
    email = e.target.email.value;
    password = e.target.password.value;

    let futbol = e.target.futbol.value;
    let voley = document.getElementById("voley").value;
    let natacion = document.getElementById("natacion").value;

    let checkFutbol = document.getElementById("futbol").checked;

    console.log(checkFutbol)

    if(checkFutbol){
        console.log("Enviamos a la base de datos futbol seleccionado")
    }

    console.log("=============================================")
    console.log(futbol);
    console.log(voley);
    console.log(natacion);
    console.log("=============================================")

    if (email == "" || password == "") {
        alert('Complete los campos' )

        return;
    }

    if (email == emailDatos && password == passwordDatos) {
        alert('Usuario logueado' )
    } else {
        alert('Usuario no logueado');

    }

    console.log(email);
    console.log(password);
    console.log(evento);
})






const loginUser = () => {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (email == emailDatos && password == passwordDatos) {
        alert('Usuario logueado' )
    } else {
        alert('Usuario no logueado');

    }

    console.log(email);
    console.log(password);
}

//modoOscuro()
const modoOscuro = () =>{

    //tomamos el body
    let fondo = document.getElementById('fondo');

    //tomamos el titulo
    let titulo = document.getElementById('titulo');

    //tomamos el boton
    let boton = document.getElementById('boton');

    if (boton.innerHTML === 'Modo oscuro'){
        console.log('Activamos el modo oscuro');
        fondo.style.backgroundColor = 'black';
        titulo.style.color = 'white';
        boton.innerHTML = 'Modo claro';
    } else {
        console.log('Activamos el modo claro');
        fondo.style.backgroundColor = 'white';
        titulo.style.color = 'black';
        boton.innerHTML = 'Modo oscuro';
    }
}