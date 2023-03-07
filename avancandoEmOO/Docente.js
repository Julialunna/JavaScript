import User from './User.js';
export default class Docente extends User{
    constructor(nome, email, nasciemtno, role='docente', ativo=true){
        super(nome, email, nasciemtno, role, ativo)
    }
    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} passou no curso ${curso}`
    }
}
