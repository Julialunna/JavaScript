function soma (num1, num2){
    return num1+num2;
}

console.log(soma(3,3));
console.log(soma(245,20));
console.log(soma(-500, 60));

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(40, "Júlia"));
function multiplica(numero1 = 1, numero2 =1){
    return numero1*numero2;
}
console.log(multiplica(soma(4,5), soma(3,3)));
console.log(multiplica(soma(4,5)));