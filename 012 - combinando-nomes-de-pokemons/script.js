const prompt = require("prompt-sync")({ sigint: true });

function combinandoNomesPokemons(palavra){
  let palavraPokemon = palavra + "saur"
  return palavraPokemon;
}
const nomeEntrada = prompt("Difite o nome Bulba, Ivy ou Venu: ");
var palavraGerada = combinandoNomesPokemons(nomeEntrada)

console.log(`O nome completo do pokemon é = ${palavraGerada}`);
