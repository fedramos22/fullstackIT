
const personajes = ["Mario", "Luigi", "Bowser Morton Koopa", "Princesa Peach Toadstool", "T. Yoshisaur Munchakoopas", "Toad", "Toadette", "Princesa Daisy"];

let span = document.getElementById("nombrePersonaje");

let botonPresentar = document.getElementById("botonPresentar");

let div = document.get

botonPresentar.addEventListener('click', (e) => {
    e.preventDefault();
    const user = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)").toLowerCase();
    console.log(user);   
    mostrarPersonajes(user);
    reset(user);
});


const mostrarPersonajes = (user) => {
    let div = document.getElementById(`${user}`);
    switch (user) {
        case 'mario':
            span.innerHTML = `${personajes[0]}`;
            div.setAttribute("title", "Presentado");
            // console.log(personajes[0]);
            break;
        case 'luigi':
            span.innerHTML = `${personajes[1]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'bowser':
            span.innerHTML = `${personajes[2]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'peach':
            span.innerHTML = `${personajes[3]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'yoshi':
            span.innerHTML = `${personajes[4]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'toad':
            span.innerHTML = `${personajes[5]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'toadette':
            span.innerHTML = `${personajes[6]}`;
            div.setAttribute("title", "Presentado");
            break;
        case 'daisy':
            span.innerHTML = `${personajes[7]}`;
            div.setAttribute("title", "Presentado");
            break;
        default:
            span.innerHTML= "Desconocido";
            break;
        //botonPresentar.style.display = "none";
    };
};

const reset = (user) => {
    let div = document.getElementById(`${user}`);
    switch (user) {
        case 'mario':
            span.innerHTML = `${personajes[0]}`;
            div.setAttribute("title", "Presentado");
        break;
        case 'luigi':
            span.innerHTML = `${personajes[1]}`;
            div.setAttribute("title", "");
            break;
        case 'bowser':
            span.innerHTML = `${personajes[2]}`;
            div.setAttribute("title", "");
            break;
        case 'peach':
            span.innerHTML = `${personajes[3]}`;
            div.setAttribute("title", "");
            break;
        case 'yoshi':
            span.innerHTML = `${personajes[4]}`;
            div.setAttribute("title", "");
            break;
        case 'toad':
            span.innerHTML = `${personajes[5]}`;
            div.setAttribute("title", "");
            break;
        case 'toadette':
            span.innerHTML = `${personajes[6]}`;
            div.setAttribute("title", "");
            break;
        case 'daisy':
            span.innerHTML = `${personajes[7]}`;
            div.setAttribute("title", "");
            break;
        default :
            div.getElementsByClassName("cerrar");
            div.setAttribute("title", "");
            break;
    }; 
}; 

if (user == "mario") {
    span.innerHTML = `${personajes[0]}`;
    div.setAttribute("title", "Presentado");
} else {
    div.getElementsByTagName();
}