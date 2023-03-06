const mostra = document.querySelector("[data-mostra]");
const esconde = document.querySelector("[data-esconde]");
const tintas = document.querySelectorAll(".item");


mostra.addEventListener("click", ()=>{
    tintas.forEach(element => {
        element.setAttribute("data-tintas", "mostra");
        element.style.display='block';
    });
})

esconde.addEventListener("click", ()=>{
    tintas.forEach(element => {
        element.setAttribute("data-tintas", "esconde");
        element.style.display='none';
    });
})

