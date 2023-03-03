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


const chavesDoObjeto = Object.keys(cliente);
console.log(chavesDoObjeto)
if(!chavesDoObjeto.includes("enderecos")){
    console.error("erro é necessário ter um erro cadastrado")
}