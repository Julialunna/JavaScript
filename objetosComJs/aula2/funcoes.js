const cliente = {
    nome:"João", 
    idade:24, 
    email:"joão@firma.com",
    telefone:["31999998888", "31333334444"],
    saldo:200,
    efetuaPagamento:function(valor){
        if(valor>this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo-=valor;
            console.log(`Pagamento realizado. Novo saldo ${this.saldo}`);
        }
    }
};
cliente.efetuaPagamento(150);

