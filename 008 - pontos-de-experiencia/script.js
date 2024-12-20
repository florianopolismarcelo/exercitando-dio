const prompt = require("prompt-sync")({ sigint: true });

const num1 = prompt("Informe um valor numérico inteiro do nivel do mostro: ");
const num2 = prompt("Informe um valor númerico inteiro da dificuldade da batalha: ");

const xpGanho = Number(num1) * Number(num2) * 100;

console.log(`Você ganhou ${xpGanho} XP!`);
