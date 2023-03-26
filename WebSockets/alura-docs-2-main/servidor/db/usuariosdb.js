import { usuarioscolecao } from "./dbConnect.js";

function cadastrarUsuario({nome,senha}){
    return usuarioscolecao.insertOne({nome, senha})
}

function encontrarUsuario(nome){
    return usuarioscolecao.findOne({nome});
}
export {cadastrarUsuario, encontrarUsuario}