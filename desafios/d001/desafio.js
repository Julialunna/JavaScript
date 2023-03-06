const listaDeTeclas =  document.querySelectorAll('input[type=button]');

function imprimeNoCampo(valueTecla){
    //const informcao = document.querySelector('input[type=tel]').value
    document.querySelector('input[type=tel]').value=valueTecla;
    //informcao=informcao+valueTecla;
    //window.print(valueTecla);
}


for(let i=0; i<listaDeTeclas.length;i++){
    const tecla = listaDeTeclas[i];
    const valor= tecla.value;

    tecla.onclick=function(){
        imprimeNoCampo(valor);
    }
    tecla.onkeydown=function(){
        tecla.classList.add('ativa');
    }
    tecla.onkeyup=function(){
        tecla.classList.remove('ativa');
    }
    
}

