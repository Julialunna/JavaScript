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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`ligando para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`);
}
ligaParaCliente(...cliente.telefone);

const encomenda={
    destinatario: cliente.nome, 
    ...cliente.enderecos[0],
}
console.log(encomenda);