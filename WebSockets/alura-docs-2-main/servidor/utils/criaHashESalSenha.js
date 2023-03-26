import {randomBytes, scryptSync} from "crypto";
function criaHashESalSenha(senhaDigitada){
    const salSenha=randomBytes(16).toString("hex");
    const hashSsenha=scryptSync(senhaDigitada, salSenha, 64).toString("hex")
    return{salSenha, hashSsenha};
}
export default criaHashESalSenha;