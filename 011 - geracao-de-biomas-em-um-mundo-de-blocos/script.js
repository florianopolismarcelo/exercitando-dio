const prompt = require("prompt-sync")({ sigint: true });

const totalSalas = 4;
const salasComTesouro = [2, 4, 7];
const salasComMostro = [3, 6, 8];

for (let sala = 1; sala <= totalSalas; sala++) {
  const temTesouro = salasComTesouro.includes(sala);
  const temMonstro = salasComMostro.includes(sala);
  if (temTesouro) {
    console.log(`Tesouro na sala ${sala}!`);
  } else if (temMonstro) {
    console.log(`Monstro na sala ${sala}!`);
  }
}
