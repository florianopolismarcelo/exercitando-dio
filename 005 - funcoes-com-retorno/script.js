function soma1(numA1, numB1) {
  somatorio1 = numA1 + numB1;
  console.log(somatorio1);
}
soma1(4, 3);

console.log("---------------------------------------");
// Usando variável
let resultado2 = soma2(4, 3);
function soma2(numA2, numB2) {
  let somatorio2 = numA2 + numB2;
  return somatorio2;
}
console.log("O Resultado dessa função é = " + resultado2);

console.log("---------------------------------------");

function soma3(numA3, numB3) {
  let somatorio3 = numA3 + numB3;
  return somatorio3;
}
//Chamando a função diretamente no console.log
console.log("O Resultado dessa função é = " + soma3(4, 3));

console.log("---------------------------------------");

let userName1 = getFirstName1("Safira Motta Souza Oliveira");
function getFirstName1(name1) {
  // split corta e coloca no vetor, nesse caso cortou o nome e buscou na posição 0
  let firstName1 = name1.split(" ")[0];
  return firstName1;
}
console.log("Seja bem vindo " + userName1);

console.log("---------------------------------------");

//Pega o primeiro nome e tira o - (traço)
let userName2 = getFirstName2("Motta-Safira-Souza-Oliveira", "-");
console.log("Seja bem vindo " + userName2);
//Pega o primeiro nome e tira o espaço
userName2 = getFirstName2("Safira Souza Motta Oliveira", " ");
console.log("Seja bem vindo " + userName2);

function getFirstName2(name2, splitChar) {
  let firstName2 = name2.split(splitChar)[0];
  return firstName2;
}
