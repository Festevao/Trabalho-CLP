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

function loadItemSaleMenu() {
  clearContainer()
  const containerSelector = document.querySelector('.container')
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

  salesAddButton.addEventListener('click', addClient)
  backButton.addEventListener('click', loadMainMenu)
}

function addProduct () {
  const productCode = window.prompt("Insira o codigo do Produto")
  const productName = window.prompt("Insira o nome do Produto")
  const productValue = window.prompt("Insira o valor do Produto", "X.YZ")
  if ((!(Number(productCode)) && Number(productCode) % 1 !== 0) || !(Number(productValue))) {
    alert("O formato de alguma das informações esta errado")
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
    productCode.innerHTML = arrayProdutos[i].codigo

    const productName = document.createElement('button')
    productName.innerHTML = arrayProdutos[i].nome

    const productValue = document.createElement('button')
    productValue.innerHTML = arrayProdutos[i].valor

    const deletButton = document.createElement('button')
    deletButton.innerHTML = "Deletar"
    deletButton.style.backgroundColor ="red"

    productLine.appendChild(productCode)
    productLine.appendChild(productName)
    productLine.appendChild(productValue)
    productLine.appendChild(deletButton)
    productLine.appendChild(createLine())
    productsDisplay.appendChild(productLine)
  }

  const productsAddButton = document.createElement('button')
  productsAddButton.innerHTML = 'Adicionar Produto'
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
}

function addClient() {
  const clientName = window.prompt("Insira o nome do cliente")
  const clientAdress = window.prompt("Insira o endereço do cliente")
  const clientRg = window.prompt("Insira o RG do cliente")
  const clientBDate = window.prompt("Insira a data de nascimento do cliente", "MM/DD/AAAA")
  const arrayAux = clientBDate.split("/")
  if (clientBDate.match(/\//g).length !== 2 || arrayAux[0].length !== 2 || arrayAux[1].length !== 2 || arrayAux[2].length !== 4 || !(Number(arrayAux[0])) || !(Number(arrayAux[1])) || !(Number(arrayAux[2]))) {
    alert("O formato de data esta errado")
    return
  }
  const clientBDateObj = new Date(clientBDate)
  clientBDateObj.setMonth(clientBDateObj.getMonth() - 1)
  arrayClientes.push(new Cliente(clientName, clientAdress, clientRg, clientBDateObj))
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
    clientName.innerHTML = arrayClientes[i].nome

    const clientAdress = document.createElement('button')
    clientAdress.innerHTML = arrayClientes[i].endereco

    const clientRg = document.createElement('button')
    clientRg.innerHTML = arrayClientes[i].rg

    const clientBDate = document.createElement('button')
    clientBDate.innerHTML = arrayClientes[i].dataNascimento.toLocaleDateString('pt-BR', options)

    const deletButton = document.createElement('button')
    deletButton.innerHTML = "Deletar"
    deletButton.style.backgroundColor ="red"

    clientLine.appendChild(clientName)
    clientLine.appendChild(clientAdress)
    clientLine.appendChild(clientRg)
    clientLine.appendChild(clientBDate)
    clientLine.appendChild(deletButton)
    clientLine.appendChild(createLine())
    clientsDisplay.appendChild(clientLine)
  }

  const clientsAddButton = document.createElement('button')
  clientsAddButton.innerHTML = 'Adicionar Cliente'
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

  containerSelector.appendChild(clientsButton)
  containerSelector.appendChild(productsButton)
  containerSelector.appendChild(salesButton)

  clientsButton.addEventListener('click', loadClientsMenu)
  productsButton.addEventListener('click', loadProductsMenu)
  salesButton.addEventListener('click', loadSalesMenu)
}

loadMainMenu()