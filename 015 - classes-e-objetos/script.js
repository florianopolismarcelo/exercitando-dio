const prompt = require("prompt-sync")({ sigint: true });

//Abaixo classe
class formaDeBolo {
  constructor(saborDaMassa, saborRecheio) {
    this.saborDaMassa = saborDaMassa;
    this.saborRecheio = saborRecheio;
  }
  //Abaixo função, método como está dentro de uma classe não precisa usar na frente a palavra function
  escrever() {
    console.log(
      `Um delicioso bolo com ${this.saborDaMassa} e recheio de ${this.saborRecheio}`
    );
  }
  assar() {
    console.log("assando bolo de " + this.saborDaMassa);
  }
}
//Abaixo Objeto
let boloFesta = new formaDeBolo("massa de chocolate", "nutella");
let boloPremium = new formaDeBolo("baunilha", "coco");
boloFesta.escrever();
boloPremium.escrever();
boloFesta.assar();

//console.log(boloFesta);
//console.log(boloFesta.saborRecheio);
//console.log(boloFesta.saborDaMassa);
