const valorTriangulo = document.querySelector("#valorTriangulo");
const envio = document.querySelector("#enviar");

envio.addEventListener("click", ()=>{
    console.log(valorXadrez.value);
})

function decide_exercicio(){
    var exercicio=prompt("Qual exercício deseja executar?");
    switch(exercicio){
        case 't':imprime_triangulo();
        case 'x': imprime_jogo_xadrez();
        case 'p':verifica_palindromo();
        case'pd':contagem_diferente();
        case 'min': min(9,19);
        case'max':max();
        case 'mod2': mod2(4);
    }
}

function  imprime_triangulo(){
    const resposta=document.querySelector("#resposta");
    const numLinhas = prompt("Digite a quantidade de linhas que deseja no triângulo");
    var i=0, j=0;
    var string="";
    for(i=0;i<numLinhas;i++){
        string="";
        for(j=0;j<=i;j++){
            string+="#";
        }
        console.log(string);
    }
}

function imprime_jogo_xadrez(){
    const numLinhas = prompt("Digite a quantidade de linhas que deseja no tabuleiro de xadrez");
    var i=0, j=0;
    var string="";
    for(i=0;i<numLinhas;i++){
        string="";
        if(i%2===0){
            for(j=0;j<4;j++){
                string+="#";
                string+=" ";
            }
        }else{
            for(j=0;j<4;j++){
                string+=" ";
                string+="#";
            }
        }
        console.log(string);
    }
}

function verifica_palindromo(){
    var palavra = prompt("Digite o possível palíndromo");
    var palavra_reversa=palavra;
    var ehPalindromo=true;
    palavra_reversa=palavra_reversa.split("");
    palavra=palavra.split("");
    palavra=palavra.filter((letra)=>letra!==" ");
    palavra_reversa=palavra_reversa.filter((letra)=>letra!==" ");
    palavra_reversa.reverse();
    for(var i=0;i<palavra.length;i++){
        if(palavra[i]!==palavra_reversa[i]){
            ehPalindromo=false;
        }
    }
    if(ehPalindromo){
        alert("A expressão dada é um palíndromo!");
    }else{
        alert("A expressão dada não é um  palíndromo");
    }
    
}

function contagem_diferente(){
    var str="";
    for(var i=1;i<=100;i++){
        str="";
        if(i%3===0){
            str+="Fizz";
        }
        if(i%5===0){
            str+="Buzz";
        }
        if(str===""){
            console.log(i);
        }else{

            console.log(str);
        }
    }
}

function min(a,b){
    var menor;
    if(a<b){
        menor=a;
    }else{
        menor=b;
    }
    console.log(menor)
}

function max(a,b){
    var maior;
    if(a>b){
        maior=a;
    }else{
        maior=b;
    }
    console.log(maior)
}

function mod2(number){
    
}
//verifica_palindromo();
decide_exercicio();
    