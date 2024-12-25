//Estudando JSON 
let invoce = {
  name: "Safira",
  age: 2,
  products: {
    0: ["Mouse 2xwm", 29.90],
    1: ["Teclado mecânico", 129.99],
    2: ["Monitor", 899.99],
    3: ["TV 85 polegadas", 10000.01],
    4: ["Monitor phantom gaming", 1500.99]
  }
}
function generateInvoce(invoce) {
  console.log(`------------------`)
  console.log(`Comprador: ${invoce.name}`)
  console.log(`Idade: ${invoce.age} anos`)
  console.log(`------------------`)
  //for in para percorrer a lista de produtos, utilizado para pecorrer objetos.
  for(let index in invoce.products ){
    let [productName, productPrice] = invoce.products[index]
    console.log(`-  ${productName}: R$ ${productPrice}`)
  }
}
generateInvoce(invoce) 

//Abaixo como ficaria sem aplicar JSON

/*let name2 = "Marcelo"
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
 */