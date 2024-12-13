function torrar1(pao1) {
  console.log("Torrada feita com: " + pao1);
}
torrar1("Pão de forma.");
torrar1("Pão integral.");

console.log("---------------------------------------");

function torrar2(pao2, nome2) {
  console.log("Torrada feita com: " + pao2);
  console.log("Ela é um pedido de: " + nome2);
}
torrar2("Pão de forma", "Marcelo");
torrar2("Pão integral", "Sebastiana");

console.log("---------------------------------------");
//nome3 = "Cliente" é um valor padrão, caso não é passado o valor nome no parâmentro da chamada da função
function torrar3(pao3, nome3 = "Cliente") {
  console.log("Torrada feita com: " + pao3);
  console.log("Ela é um pedido de: " + nome3);
}
torrar3("Pão de forma");

console.log("---------------------------------------");

function torrar4(pao4, nome4 = "Cliente", valor4) {
  console.log("Torrada feita com: " + pao4);
  console.log("Ela é um pedido de: " + nome4);
  console.log("O valor total é: " + valor4);
}
torrar4("Pão de forma", "Safira", 10.90);

console.log("---------------------------------------");

function createStringConnection(databaseName, user, pass) {
  console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}
createStringConnection("db_products", "Safira", "1977")