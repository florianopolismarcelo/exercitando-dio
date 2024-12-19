const prompt = require("prompt-sync")({ sigint: true });

const posicaoInicial = prompt("Informe sua posição inicial: ");
const totalPassos = prompt("Informe o total de passos dados: ");

const posicaoFinal = Number(posicaoInicial) + Number(totalPassos);

//console.log("Posição final do herói: " + posicaoFinal);
console.log(`A posição final do herói = ${posicaoFinal}`);
