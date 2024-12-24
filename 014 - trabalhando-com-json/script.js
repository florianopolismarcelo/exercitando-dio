let name2 = "Marcelo"
let age2 = 47
let products2 = ["mouse 2xwm", "Teclado mecânico", "Monitor"]
let productsValues2 = [29.90, 129.90, 899.99]

function generateInvoce(name2, products2, productsValues2, age2) {
  console.log("O comprador é: " + name2)
  console.log("A idade é: " + age2)
  console.log("---------------------")
  console.log("O produto é: " + products2[1])
  console.log("O valor é: " + productsValues2[0])
}
generateInvoce(name2, products2, productsValues2, age2)
 