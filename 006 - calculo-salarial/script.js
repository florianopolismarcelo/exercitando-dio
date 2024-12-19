const prompt = require("prompt-sync")({ sigint: true });
const valorSalario = prompt("Digite o valor do salário: ");
const valorBeneficio = prompt("Digite o valor do benefício: ");

const valorImposto = calcularImposto(valorSalario);
const saida = Number(valorSalario) - Number(valorImposto) + Number(valorBeneficio);

function calcularImposto(salario) {
  var aliquota = 0;
  if (salario >= 0 && salario <= 1100) {
    aliquota = 0.05;
  } else if (salario >= 1100.01 && salario <= 2500.0) {
    aliquota = 0.10;
  } else {
    aliquota = 0.15;
  }
  return aliquota * salario;
}
console.log(saida.toFixed(2));
