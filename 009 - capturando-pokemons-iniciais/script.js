const prompt = require("prompt-sync")({ sigint: true });

let escolhaDoTreinador = prompt(
  "Escolha o treinador 1, 2, 4 ou qualquer outro numero inteiro: "
);
escolhaDoTreinador = Number(escolhaDoTreinador);
let pokemonEscolhido;

if (escolhaDoTreinador === 1) {
  pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
  pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
  pokemonEscolhido = "Pikachu";
} else {
  pokemonEscolhido = "Mewtwo";
}
if (pokemonEscolhido) {
  console.log(`Você escolheu (${pokemonEscolhido}) como pokemon inicial`);
}
