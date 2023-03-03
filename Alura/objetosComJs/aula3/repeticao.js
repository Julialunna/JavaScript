const cliente = {
    nome:"João", 
    idade:24, 
    email:"joão@firma.com",
    telefone:["31999998888", "31333334444"],
};

cliente.enderecos=[
    {
        rua: "R. Joseph Climber", 
        numero:1337,
        apartamento: true, 
        complemento:"ap 934",
    }, 
];

for(let chave in cliente){
    let tipo=typeof cliente[chave];
    if(tipo!="object"&&tipo!="function"){
        console.log(`a chave ${chave} tem o valor ${cliente[chave]}`);
    }   
}