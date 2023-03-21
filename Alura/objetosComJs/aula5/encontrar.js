const clientes = require("./clientes.json");
function encontra(lista, chave, valor){
    return lista.find(((item)=>item[chave].includes(valor)));
}

const encontrado = encontra(clientes, "nome", "Kirby");
const encontrado2 = encontra(clientes, "telefone", "1918820860");
console.log(encontrado);
console.log(encontrado2);