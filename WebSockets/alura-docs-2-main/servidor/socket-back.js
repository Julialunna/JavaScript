import "dotenv/config";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";
import registrarEventosCadastro from "./registrarEventos/Cadastro.js";
import registrarEventosDocumento from "./registrarEventos/Documento.js";
import registrarEventosInicio from "./registrarEventos/Inicio.js";
import registrarEventosLogin from "./registrarEventos/login.js";

import io from "./servidor.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);
nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, nspUsuarios);
  registrarEventosDocumento(socket, nspUsuarios);
});

/*io.use((socket, next)=>{
  next(new Error("Usuário não logado =("));
});*/

io.on("connection", (socket) => {
  registrarEventosCadastro(socket,io);
  registrarEventosLogin(socket, io);
});
