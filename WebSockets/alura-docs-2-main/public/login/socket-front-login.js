import { definirCookie } from "../utils/cookies.js";

const socket=io();
function emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados);
}
socket.on("autenticação_sucesso", (tokenJwt)=>{
    definirCookie("tokenJwt", tokenJwt);
    alert("Usuário autenticado com sucesso =)");
    window.location.href="/";
});
socket.on("autenticação_erro", ()=>{
    alert("Erro na autenticação =(");
});
socket.on("usuario_nao_encontrado", ()=>{
    alert("Usuário não encontrado =(");
});
export{emitirAutenticarUsuario};