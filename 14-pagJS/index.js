// Crear una página desde JavaScript

let header = document.createElement("header");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
nav.appendChild(ul);

ul.className = "listas";

const items = ['Inicio', 'Productos', 'Contacto', 'Nosotros'];

items.forEach (items => {
    // Creamos las anclas para los li
    let li = document.createElement("li");   

    let a = document.createElement("a");
    a.innerHTML= items;
    a.style.cursor = "pointer";

    items = items.toLowerCase();
    if (items == "inicio") {
        a.href = `./${items}.html`;
    }else{
        a.href = `./pages/${items}.html`;
    };
    
    li.appendChild(a);
    ul.appendChild(li);
});

nav.style.backgroundColor ="black";
nav.style.padding ="10px";


/*
ul.style.display = "flex";
ul.style.justifyContent = "space-around";
ul.style.listStyle = "none";
ul.style.padding = "0";
ul.style.color = "white"; 
*/

header.appendChild(nav);
document.body.appendChild(header);

//=============================================================

let titulo = document.createElement("h1"); // Creamos un elemento h1
titulo.id = "titulo";
titulo.innerHTML= "Ecommerce de Tecnología"; // Agregamos un texto
titulo.className = "text-center"; //bootstrap

// estilos nativos
titulo.style.color = "blue";//LE damos estilo al titulo
//titulo.style.textAlign ="center"
titulo.style.fontFamily = "sans-serif";
titulo.style.marginTop = "35px";

document.body.appendChild(titulo); // Lo agregamos al body

//=============================================================
