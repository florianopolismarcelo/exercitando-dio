function torrar() {
  console.log("Torrando pão");
}
function injetarPao() {
  console.log("Preparando para injetar pão");
  console.log("finalizando");
}
torrar();
injetarPao();

//-----------------------------------------------------------
//Função main ou principal é responsáver por chamar todas as outras funções
function main() {
  getData();
  checkValues();
  sendToDatabase();
}

function getData() {
  console.log("Pegando dados do usuário");
  if (1 < 3) {
    console.log("Número encontrado");
  }
}

function checkValues() {
  console.log("Validando dados");
}

function sendToDatabase() {
  console.log("Cadastrando dados");
}

main();
