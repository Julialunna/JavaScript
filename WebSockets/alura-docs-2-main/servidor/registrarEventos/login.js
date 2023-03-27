import { encontrarUsuario } from "../db/usuariosdb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";

function registrarEventosLogin(socket,io){
    socket.on("autenticar_usuario", async ({nome, senha})=>{
        const usuario = await encontrarUsuario(nome);

        if(usuario){
            const autenticado=autenticarUsuario(senha, usuario);
            if(autenticado){
                socket.emit("autenticação_sucesso");
            }else{
                socket.emit("autenticação_erro");
            }

        }else{
            socket.emit("usuario_nao_encontrado");
        }
    });
}
export default registrarEventosLogin;