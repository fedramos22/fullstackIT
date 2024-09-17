
//declaro las variables
let email;
let password; 

// base de datos

let emailDatos = "pepe@gmail.com";
let passwordDatos = "1234";
let botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener('click', (e) =>{
    e.preventDefault();

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    
    if(email === "" || password === ""){

        alert("Complete los campos");
        return;
    }
    
    //DOM avanzado con JS
    // guardamos datos en el localstorage: es la mermoria local del navegador
    //                     key    value
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    
    if(email === emailDatos && password === passwordDatos) {
        window.location.href = "../pages/cargarProductos.html";
    }else{
        window.location.href = "../pages/error.html";
    }
});
