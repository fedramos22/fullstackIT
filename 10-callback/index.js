let password = '12345678';

// Longitud de la constraseña
console.log(password.length);
/* 
let alumnos = ['Juan','Pedro','Pablo','Maria'];
console.log(alumnos.length);
 */

// Ejemplo de validación nativa de JS

function validarPassword() {
    if (password.length >= 8 && typeof String) {
        console.log('Contraseña válida');
    } else {
        console.log(`Tu contraseña tiene ${password.length} caracteres y no es válida`);
        location.reload();
    }
}

validarPassword();
