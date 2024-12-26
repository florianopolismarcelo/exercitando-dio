const prompt = require("prompt-sync")({ sigint: true });

//Abaixo classe
class formaDeBolo {
  constructor(saborDaMassa, saborRecheio) {
    this.saborDaMassa = saborDaMassa;
    this.saborRecheio = saborRecheio;
  }
}
//Abaixo Objeto
let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella");

console.log(boloFesta);