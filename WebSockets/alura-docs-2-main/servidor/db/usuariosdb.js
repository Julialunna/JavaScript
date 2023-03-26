import criaHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuarioscolecao } from "./dbConnect.js";

function encontrarUsuario(nome){
    return usuarioscolecao.findOne({nome});
}
function cadastrarUsuario({nome,senha}){
    const {hashSenha, salSenha}=criaHashESalSenha(senha);
    return usuarioscolecao.insertOne({nome, hashSenha, salSenha});
}

export {cadastrarUsuario, encontrarUsuario}