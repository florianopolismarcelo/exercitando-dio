const prompt = require("prompt-sync")({ sigint: true });

class ItemMagico {
  constructor(tipo, dano, resistencia) {
    this.tipo = tipo;
    this.dano = dano;
    this.resistencia = resistencia;
  }
  calcularDano() {
    return this.tipo === "" ? this.dano * 2 : this.dano;
  }
}

const tipoItem = prompt("Digite um item Espada, Cajado, Arco ou outro: ");
const danoItem = prompt("Digite o número de dano: ");
const resistenciaItem = prompt("Digite o item Espada, Cajado ou Arco: ");

const itemPersonalizado = new ItemMagico(tipoItem, danoItem, resistenciaItem);

console.log(`Tipo: ${itemPersonalizado.tipo}`);
console.log(`Dano: ${itemPersonalizado.dano}`);
console.log(`Resistência: ${itemPersonalizado.resistencia}`);

const danoTotal = itemPersonalizado.calcularDano();
console.log(`O nome completo do pokemon é = ${danoTotal}`);

