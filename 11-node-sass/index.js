// con los modulos de node no necesitamos instalar nada
// Estamos utilizando un módulo nativa con nodejs
const os = require('os'); //operative system

console.log(os.cpus());
console.log(os.platform());
console.log(os.version());
