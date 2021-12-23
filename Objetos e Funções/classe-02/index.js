const carro = {
    ligado: false,
    velocidade: 0
}
carro.ligar = function (){
    if(this.ligado) {
        console.log("Este carro já está ligado.")
    } else{
        this.ligado = true;
        console.log(`carro ${this.ligado? "ligado": "desligado"}. velocidade ${this.velocidade}`);
    }
}
carro.desligar = function(){
    if(!this.ligado){
        console.log("Este carro já está desligado.");
    } else{
        this.ligado = false;
        this.velocidade = 0;
        console.log(`carro ${this.ligado? "ligado": "desligado"}. velocidade ${this.velocidade}`);
    }
}
carro.acelerar = function(){
    if(!this.ligado){
        console.log("Não é possível acelerar um carro desligado.");
    } else{
        this.velocidade += 10; 
        console.log(`carro ${this.ligado? "ligado": "desligado"}. velocidade ${this.velocidade}`);
    }
}
carro.desacelerar = function(){
    if(!this.ligado){
        console.log("Não é possível desacelerar um carro desligado.");
    } else{
        this.velocidade -= 10;
        console.log(`carro ${this.ligado? "ligado": "desligado"}. velocidade ${this.velocidade}`);
    }
}
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();






