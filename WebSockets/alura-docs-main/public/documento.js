import { emitirExcluirDocumento, emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search)
const nomeDoDocumento=parametros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDocumento=document.getElementById("titulo-documento");
const botaoExclui=document.getElementById("excluir-documento");

tituloDocumento.textContent= nomeDoDocumento || " Documento sem título";

selecionarDocumento(nomeDoDocumento);

textoEditor.addEventListener("keyup", ()=>{
    emitirTextoEditor({
        texto:textoEditor.value, 
        nomeDoDocumento,
    });
})

function atualizaTextoEditor(texto){
    textoEditor.value=texto;
}
botaoExclui.addEventListener("click", ()=>{
    emitirExcluirDocumento(nomeDoDocumento);
})

export{atualizaTextoEditor};