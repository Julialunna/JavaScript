const dados = require("./clientes.json")
console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados)
console.log(clienteEmString);

console.log(typeof clienteEmString);

const obejtoCliente=JSON.parse(clienteEmString);
console.log(obejtoCliente);