import User from './User.js';

export default class Admin extends User{
    constructor(nome, email, nasciemtno, role='admin', ativo=true){
        super(nome, email, nasciemtno, role, ativo)
    }

      
    exibirInfos(){
        return `${this.nome}, ${this.email}`
    }

    criarCurso(nomeDoCurso, vagas){
        return`Curso de ${nomeDoCurso}, criado com ${vagas} vagas`
    }
}
