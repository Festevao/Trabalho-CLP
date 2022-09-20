/*
-Cliente: entidade de pessoa
cadastrar, alterar, excluir

-Produto: entidade de produto
cadastrar, alterar, excluir

-Venda: entidade de venda que contem array de item venda
cadastrar, excluir
    -ItemVenda: entidade de item que contem item e quantidade
    cadastrar, excluir*/

import { Cliente } from './class/cliente.js'
import { Produto } from './class/produto.js'
import { Venda } from './class/venda.js'
import { ItemVenda } from './class/itemVenda.js'

const arrayClientes = []
const arrayProdutos = []
const arrayVendas = []

function createLine() {
  const line = document.createElement('hr')
  line.setAttribute("size", "5px")
  const spanLine = document.createElement('span')
  spanLine.appendChild(line)
  return spanLine
}

function clearContainer() {
  const containerSelector = document.querySelector('.container')
  while (containerSelector.firstChild) {
    containerSelector.removeChild(containerSelector.lastChild);
  }
}

function addSale() {

}

function loadSalesMenu() {
  clearContainer()
  const containerSelector = document.querySelector('.container')
  const salesDisplay = document.createElement('div')

  const salesAddButton = document.createElement('button')
  salesAddButton.innerHTML = 'Cadastrar Venda'
  const backButton = document.createElement('button')
  backButton.innerHTML = 'Voltar'

  const salesLabel = document.createElement('h1')
  salesLabel.innerHTML = 'VENDAS'
  containerSelector.appendChild(salesLabel)
  containerSelector.appendChild(createLine())
  containerSelector.appendChild(salesDisplay)
  containerSelector.appendChild(salesAddButton)
  containerSelector.appendChild(backButton)

  salesAddButton.addEventListener('click', addSale)
  backButton.addEventListener('click', loadMainMenu)
}

function alterOrDeleteProduct(event) {
  const clickSelector = event.target
  const idText = clickSelector.getAttribute("id")
  if (idText !== "" && idText !== null) {
    const auxArray = idText.split('_')
    const productAtribute = auxArray[0]
    const productIndex = Number(auxArray[1])
    if (productAtribute === "delet") {
      if(confirm(`Voce esta prestes a exluir o produto ${arrayProdutos[productIndex].nome}`)){
        arrayProdutos.splice(productIndex, 1)
      } else {
        return
      }
    } else {
      const newPropertyValue = prompt(`Qual sera o novo valor de ${productAtribute} ?`)
      if (newPropertyValue === null) {
        alert("Campo nao preenchido")
        return
      } else if (productAtribute === "codigo" && (!Number(newPropertyValue) || Number(newPropertyValue) % 1 !== 0)) {
        alert("Codigo deve ser um numero inteiro")
        return
      } else if (productAtribute === "valor" && !Number(newPropertyValue)) {
        alert("O formato de valor deve ser um numero")
        return
      }
      (arrayProdutos[productIndex])[productAtribute] = newPropertyValue
    }
    loadProductsMenu()
  }
}

function addProduct() {
  const productCode = prompt("Insira o codigo do Produto")
  const productName = prompt("Insira o nome do Produto")
  const productValue = prompt("Insira o valor do Produto", "X.YZ")
  if (productCode === null || productName === null || productValue === null) {
    alert("Algum campo nao foi preenchido")
    return
  }
  if ((!(Number(productCode)) && Number(productCode) % 1 !== 0) || !(Number(productValue))) {
    alert("O formato de alguma das informacoes esta errado")
    return
  }
  arrayProdutos.push(new Produto(Number(productCode), productName, Number(productValue)))
  loadProductsMenu()
}

function loadProductsMenu() {
  clearContainer()
  const containerSelector = document.querySelector('.container')
  const productsDisplay = document.createElement('div')

  for (let i = 0; i < arrayProdutos.length; i++) {
    const productLine = document.createElement('div')

    const productCode = document.createElement('button')
    productCode.setAttribute("id", "codigo_" + i)
    productCode.innerHTML = arrayProdutos[i].codigo

    const productName = document.createElement('button')
    productName.setAttribute("id", "nome_" + i)
    productName.innerHTML = arrayProdutos[i].nome

    const productValue = document.createElement('button')
    productValue.setAttribute("id", "valor_" + i)
    productValue.innerHTML = arrayProdutos[i].valor

    const deletButton = document.createElement('button')
    deletButton.setAttribute("id", "delet_" + i)
    deletButton.innerHTML = "Deletar"
    deletButton.style.backgroundColor = "red"

    productLine.appendChild(productCode)
    productLine.appendChild(productName)
    productLine.appendChild(productValue)
    productLine.appendChild(deletButton)
    productLine.appendChild(createLine())
    productsDisplay.appendChild(productLine)
  }

  const productsAddButton = document.createElement('button')
  productsAddButton.innerHTML = 'Cadastrar Produto'
  const backButton = document.createElement('button')
  backButton.innerHTML = 'Voltar'

  const productsLabel = document.createElement('h1')
  productsLabel.innerHTML = 'PRODUTOS'
  containerSelector.appendChild(productsLabel)
  containerSelector.appendChild(createLine())
  containerSelector.appendChild(productsDisplay)
  containerSelector.appendChild(productsAddButton)
  containerSelector.appendChild(backButton)

  productsAddButton.addEventListener('click', addProduct)
  backButton.addEventListener('click', loadMainMenu)
  productsDisplay.addEventListener('click', alterOrDeleteProduct)
}

function alterOrDeleteClient(event) {
  const clickSelector = event.target
  const idText = clickSelector.getAttribute("id")
  if (idText !== "" && idText !== null) {
    const auxArray = idText.split('_')
    const clientAtribute = auxArray[0]
    const clientIndex = Number(auxArray[1])
    if (clientAtribute === "delet") {
      if(confirm(`Voce esta prestes a exluir o cliente ${arrayClientes[clientIndex].nome}`)){
        arrayClientes.splice(clientIndex, 1)
      } else {
        return
      }
    } else {
      const newPropertyValue = prompt(`Qual sera o novo valor de ${clientAtribute} ?`)
      if (newPropertyValue === null) {
        alert("Campo nao preenchido")
        return
      } else if (clientAtribute !== "dataNascimento") {
        (arrayClientes[clientIndex])[clientAtribute] = newPropertyValue
      } else {
        const arrayAux = newPropertyValue.split("/")
        if (newPropertyValue.match(/\//g).length !== 2 || arrayAux[0].length !== 2 || arrayAux[1].length !== 2 || arrayAux[2].length !== 4 || !(Number(arrayAux[0])) || !(Number(arrayAux[1])) || !(Number(arrayAux[2]))) {
          alert("O formato de data esta errado")
          return
        }
        (arrayClientes[clientIndex])[clientAtribute] = newPropertyValue
      }
    }
    loadClientsMenu()
  }
}

function addClient() {
  const clientName = prompt("Insira o nome do cliente")
  const clientAdress = prompt("Insira o endereco do cliente")
  const clientRg = prompt("Insira o RG do cliente")
  const clientBDate = prompt("Insira a data de nascimento do cliente", "MM/DD/AAAA")
  if (clientName === null || clientAdress === null || clientRg === null || clientBDate === null) {
    alert("Algum campo nao foi preenchido")
    return
  }
  const arrayAux = clientBDate.split("/")
  if (clientBDate.match(/\//g).length !== 2 || arrayAux[0].length !== 2 || arrayAux[1].length !== 2 || arrayAux[2].length !== 4 || !(Number(arrayAux[0])) || !(Number(arrayAux[1])) || !(Number(arrayAux[2]))) {
    alert("O formato de data esta errado")
    return
  }
  arrayClientes.push(new Cliente(clientName, clientAdress, clientRg, new Date(clientBDate)))
  loadClientsMenu()
}

function loadClientsMenu() {
  clearContainer()
  const containerSelector = document.querySelector('.container')
  const clientsDisplay = document.createElement('div')
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  for (let i = 0; i < arrayClientes.length; i++) {
    const clientLine = document.createElement('div')

    const clientName = document.createElement('button')
    clientName.setAttribute("id", "nome_" + i)
    clientName.innerHTML = arrayClientes[i].nome

    const clientAdress = document.createElement('button')
    clientAdress.setAttribute("id", "endereco_" + i)
    clientAdress.innerHTML = arrayClientes[i].endereco

    const clientRg = document.createElement('button')
    clientRg.setAttribute("id", "rg_" + i)
    clientRg.innerHTML = arrayClientes[i].rg

    const clientBDate = document.createElement('button')
    clientBDate.setAttribute("id", "dataNascimento_" + i)
    clientBDate.innerHTML = arrayClientes[i].dataNascimento.toLocaleDateString('pt-BR', options)

    const deletButton = document.createElement('button')
    deletButton.setAttribute("id", "delet_" + i)
    deletButton.innerHTML = "Deletar"
    deletButton.style.backgroundColor = "red"

    clientLine.appendChild(clientName)
    clientLine.appendChild(clientAdress)
    clientLine.appendChild(clientRg)
    clientLine.appendChild(clientBDate)
    clientLine.appendChild(deletButton)
    clientLine.appendChild(createLine())
    clientsDisplay.appendChild(clientLine)
  }

  const clientsAddButton = document.createElement('button')
  clientsAddButton.innerHTML = 'Cadastrar Cliente'
  const backButton = document.createElement('button')
  backButton.innerHTML = 'Voltar'

  const clientsLabel = document.createElement('h1')
  clientsLabel.innerHTML = 'CLIENTES'
  containerSelector.appendChild(clientsLabel)
  containerSelector.appendChild(createLine())
  containerSelector.appendChild(clientsDisplay)
  containerSelector.appendChild(clientsAddButton)
  containerSelector.appendChild(backButton)

  clientsAddButton.addEventListener('click', addClient)
  backButton.addEventListener('click', loadMainMenu)
  clientsDisplay.addEventListener('click', alterOrDeleteClient)
}

function loadMainMenu() {
  clearContainer()
  const containerSelector = document.querySelector('.container')

  const clientsButton = document.createElement('button')
  clientsButton.innerHTML = 'Clientes'

  const productsButton = document.createElement('button')
  productsButton.innerHTML = 'Produtos'

  const salesButton = document.createElement('button')
  salesButton.innerHTML = 'Vendas'

  const menuLabel = document.createElement('h1')
  menuLabel.innerHTML = 'OPCOES'
  containerSelector.appendChild(menuLabel)
  containerSelector.appendChild(clientsButton)
  containerSelector.appendChild(productsButton)
  containerSelector.appendChild(salesButton)

  clientsButton.addEventListener('click', loadClientsMenu)
  productsButton.addEventListener('click', loadProductsMenu)
  salesButton.addEventListener('click', loadSalesMenu)
}

loadMainMenu()