import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
console.log(novoAdmin.nome)
const novoDocente = new Admin('Guilherme', "g@g.com", "2021-01-01")
console.log(novoDocente.exibirInfos())