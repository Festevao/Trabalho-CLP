import { Cliente } from './class/cliente.js'
import { Produto } from './class/produto.js'
import { Venda } from './class/venda.js'
import { ItemVenda } from './class/itemVenda.js'

const arrayClientes = []
const arrayProdutos = []
const arrayVendas = []

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

//cria uma linha horizontal no arquivo html
function createLine() {
  const line = document.createElement('hr')
  line.setAttribute("size", "5px")
  const spanLine = document.createElement('span')
  spanLine.appendChild(line)
  return spanLine
}

//limpa o container principal da aplicacao, tirando todos os elementos html presentes dentro do mesmo
function clearContainer() {
  const containerSelector = document.querySelector('.container')
  while (containerSelector.firstChild) {
    containerSelector.removeChild(containerSelector.lastChild);
  }
}

function deleteItem(event) {
  const saleIndex = event.target.myParam
  const clickSelector = event.target
  const idText = clickSelector.getAttribute("id")
  if (idText !== "" && idText !== null) { //confere se o click aconteceu em um botao
    const venda = arrayVendas[saleIndex]
    const auxArray = idText.split('_')
    const clickOption = auxArray[0]
    const itemIndex = Number(auxArray[1])
    if (clickOption === "delet") { //se foi o botao de delet
      if (confirm(`Voce esta prestes a exluir o Item: ${arrayVendas[saleIndex].itens[itemIndex].produto.nome} na quantidade: ${arrayVendas[saleIndex].itens[itemIndex].quantidade}`)) {
        arrayVendas[saleIndex].itens.splice(itemIndex, 1)
        loadIndividualSaleMenu(saleIndex)
      }
    }
  }
}

function addItem(event) {
  const saleIndex = event.currentTarget.myParam
  const venda = arrayVendas[saleIndex]
  //captura as informacoes fornecidas pelo usuario
  const count = document.querySelector('#inputCount').value
  const productIndex = document.querySelector('#selectProduct').value
  if (count === null || count == "" || productIndex === "") { //se algum input crucial esta vazio
    alert("Preencha corretamente os dados da venda")
    return
  }
  // console.log(`quantidade: ${count}\nproduto: ${arrayProdutos[productIndex].nome}`)
  venda.addItens(new ItemVenda(arrayProdutos[Number(productIndex)], Number(count)))
  loadIndividualSaleMenu(saleIndex)
}


//carrega o menu de Item venda
function loadIndividualSaleMenu(saleIndex) {
  clearContainer()
  const venda = arrayVendas[saleIndex]
  const containerSelector = document.querySelector('.container')
  //display de informacoes de ItemVenda
  const itensDisplay = document.createElement('div')
  //titulo do menu, subtitulo de informacoes da venda e ultimo titulo com o total da venda
  const itemLabel = document.createElement('h1')
  itemLabel.innerHTML = 'ITENS DA VENDA'
  const itemSubLabel = document.createElement('h3')
  itemSubLabel.innerHTML = `${venda.numero}, ${venda.cliente.nome}, ${venda.data.toLocaleDateString('pt-BR', dateOptions)}`
  itemSubLabel.style.color = 'blue'
  const itemTotalLabel = document.createElement('h3')
  itemTotalLabel.innerHTML = `Total: ${venda.total()}`
  itemTotalLabel.style.color = 'green'
  //botoes de adicionar item e voltar ao menu anterior
  const itemAddButton = document.createElement('button')
  itemAddButton.innerHTML = 'Adicionar item'
  itemAddButton.myParam = saleIndex
  const backButton = document.createElement('button')
  backButton.innerHTML = 'Voltar'
  const buttonsContent = document.createElement('div')
  buttonsContent.appendChild(itemAddButton)
  buttonsContent.appendChild(backButton)
  //formulario para adicionar item
  const formItemAdd = document.createElement('form')
  const countInput = document.createElement('input')
  countInput.setAttribute("id", "inputCount")
  countInput.setAttribute("type", "number")
  countInput.setAttribute("step", "1")
  countInput.setAttribute("min", "1")
  countInput.setAttribute("placeholder", "Quantidade")
  countInput.setAttribute("onchange", "this.value = parseInt(this.value);")

  const productSelect = document.createElement('select')
  productSelect.setAttribute("id", "selectProduct")

  const optionLabel = document.createElement('option')
  optionLabel.setAttribute("value", "")
  optionLabel.setAttribute("disable", "true")
  optionLabel.setAttribute("selected", "true")
  optionLabel.innerHTML = "Selecione o produto"
  productSelect.appendChild(optionLabel)

  for (let i = 0; i < arrayProdutos.length; i++) { //preenche as opcoes do select com o nome dos produtos ja cadastrados
    const auxOption = document.createElement('option')
    auxOption.setAttribute("value", i)
    auxOption.innerHTML = arrayProdutos[i].nome
    productSelect.appendChild(auxOption)
  }

  //organizando inputs do formulario na ordem de preenchimento
  formItemAdd.appendChild(countInput)
  formItemAdd.appendChild(productSelect)

  //preenchendo as informacoes do display de itens com as itens da venda ja cadastradas
  for (let i = 0; i < venda.itens.length; i++) {
    const itemLine = document.createElement('div')

    const itemCount = document.createElement('span')
    itemCount.innerHTML = venda.itens[i].quantidade

    const itemName = document.createElement('span')
    itemName.innerHTML = venda.itens[i].produto.nome

    const itensTotal = document.createElement('span')
    itensTotal.innerHTML = `Total: ${venda.itens[i].total()}`

    //botoes de visualizar e deletar venda
    const deletButton = document.createElement('button')
    deletButton.setAttribute("id", "delet_" + i)
    deletButton.innerHTML = "Deletar"
    deletButton.style.backgroundColor = "red"
    deletButton.myParam = saleIndex

    itemLine.appendChild(itemCount)
    itemLine.appendChild(itemName)
    itemLine.appendChild(itensTotal)
    itemLine.appendChild(deletButton)
    itemLine.appendChild(createLine())
    itensDisplay.appendChild(itemLine)
  }

  //organizando elementos criados no container principal
  containerSelector.appendChild(itemLabel)
  containerSelector.appendChild(itemSubLabel)
  containerSelector.appendChild(itemTotalLabel)
  containerSelector.appendChild(formItemAdd)
  containerSelector.appendChild(buttonsContent)
  containerSelector.appendChild(createLine())
  containerSelector.appendChild(itensDisplay)

  //definindo comportamento dos botoes
  itemAddButton.addEventListener('click', addItem, false)
  backButton.addEventListener('click', loadSalesMenu)
  itensDisplay.addEventListener('click', deleteItem, false)
}

//funcao que dispara apos clicar em um botao no menu de vendas
function viewOrDeleteSale(event) {
  const clickSelector = event.target
  const idText = clickSelector.getAttribute("id")
  if (idText !== "" && idText !== null) { //confere se o local clicado foi um dos botoes
    const auxArray = idText.split('_')
    const saleOption = auxArray[0]
    const saleIndex = Number(auxArray[1])
    if (saleOption === "delet") { //se foi o botao de deletar
      if (confirm(`Voce esta prestes a exluir a venda ${arrayVendas[saleIndex].numero}`)) arrayVendas.splice(saleIndex, 1)
      loadSalesMenu()
    } else if (saleOption === "view") { //se foi o botao de visualizar
      loadIndividualSaleMenu(saleIndex)
    }
  }
}

//funcao que dispara apos clicar no botao de adicionar nova venda
function addSale() {
  //recupera dos valores digitados pelo usuario
  const numero = document.querySelector('#inputNumero').value
  let data = document.querySelector('#inputDate').value
  const clientIndex = document.querySelector('#selectClient').value

  if (numero === null || clientIndex == "") { //se algum input crucial esta vazio
    alert("Preencha corretamente os dados da venda")
    return
  } else if (data === "" || data === null) { //se o valor da data esta vazio
    const auxDate = new Date()
    data = auxDate.getFullYear() + '-' + (auxDate.getMonth() + 1) + '-' + (auxDate.getDate() - 1)//define a data com dia e hora atuais no formato AAAA-MM-DD
  }
  // console.log(`numero: ${numero}\ndata: ${data}\nclientIndex: ${clientIndex}`)
  let dataRefac = new Date(data)
  dataRefac.setDate(dataRefac.getDate() + 1)
  arrayVendas.push(new Venda(numero, dataRefac, arrayClientes[clientIndex]))
  loadSalesMenu()
}

//carrega o menu de vendas
function loadSalesMenu() {
  clearContainer()
  const containerSelector = document.querySelector('.container')
  //display de informacoes de venda
  const salesDisplay = document.createElement('div')
  //titulo do menu
  const salesLabel = document.createElement('h1')
  salesLabel.innerHTML = 'VENDAS'
  //botoes de adicionar venda e voltar ao menu anterior
  const salesAddButton = document.createElement('button')
  salesAddButton.innerHTML = 'Cadastrar Venda'
  const backButton = document.createElement('button')
  backButton.innerHTML = 'Voltar'
  const buttonsContent = document.createElement('div')
  buttonsContent.appendChild(salesAddButton)
  buttonsContent.appendChild(backButton)
  //formulario para adicionar venda
  const formSaleAdd = document.createElement('form')
  const numberInput = document.createElement('input')
  numberInput.setAttribute("id", "inputNumero")
  numberInput.setAttribute("type", "number")
  numberInput.setAttribute("step", "1")
  numberInput.setAttribute("min", "0")
  numberInput.setAttribute("placeholder", "Codigo")
  numberInput.setAttribute("onchange", "this.value = parseInt(this.value);")

  const dateInput = document.createElement('input')
  dateInput.setAttribute("id", "inputDate")
  dateInput.setAttribute("type", "date")

  const clientSelect = document.createElement('select')
  clientSelect.setAttribute("id", "selectClient")

  const optionLabel = document.createElement('option')
  optionLabel.setAttribute("value", "")
  optionLabel.setAttribute("disable", "true")
  optionLabel.setAttribute("selected", "true")
  optionLabel.innerHTML = "Selecione o cliente"
  clientSelect.appendChild(optionLabel)

  for (let i = 0; i < arrayClientes.length; i++) { //preenche as opcoes do select com o nome dos clientes ja cadastrados
    const auxOption = document.createElement('option')
    auxOption.setAttribute("value", i)
    auxOption.innerHTML = arrayClientes[i].nome
    clientSelect.appendChild(auxOption)
  }

  //organizando inputs do formulario na ordem de preenchimento
  formSaleAdd.appendChild(numberInput)
  formSaleAdd.appendChild(dateInput)
  formSaleAdd.appendChild(clientSelect)

  //preenchendo as informacoes do display de vendas com as vendas ja cadastradas
  for (let i = 0; i < arrayVendas.length; i++) {
    const saleLine = document.createElement('div')

    const saleNumber = document.createElement('span')
    saleNumber.innerHTML = arrayVendas[i].numero

    const saleDate = document.createElement('span')
    saleDate.innerHTML = arrayVendas[i].data.toLocaleDateString('pt-BR', dateOptions)

    const saleClient = document.createElement('span')
    saleClient.innerHTML = arrayVendas[i].cliente.nome

    //botoes de visualizar e deletar venda
    const deletButton = document.createElement('button')
    deletButton.setAttribute("id", "delet_" + i)
    deletButton.innerHTML = "Deletar"
    deletButton.style.backgroundColor = "red"

    const viewButton = document.createElement('button')
    viewButton.setAttribute("id", "view_" + i)
    viewButton.innerHTML = "Visualizar"

    saleLine.appendChild(saleNumber)
    saleLine.appendChild(saleDate)
    saleLine.appendChild(saleClient)
    saleLine.appendChild(deletButton)
    saleLine.appendChild(viewButton)
    saleLine.appendChild(createLine())
    salesDisplay.appendChild(saleLine)
  }

  //preenchendo o container principal com os elementos montados
  containerSelector.appendChild(salesLabel)
  containerSelector.appendChild(formSaleAdd)
  containerSelector.appendChild(buttonsContent)
  containerSelector.appendChild(createLine())
  containerSelector.appendChild(salesDisplay)

  //definindo comportamento dos botoes
  salesAddButton.addEventListener('click', addSale)
  backButton.addEventListener('click', loadMainMenu)
  salesDisplay.addEventListener('click', viewOrDeleteSale)
}

//funcao que dispara apos clicar em um botao no menu de produtos
function alterOrDeleteProduct(event) {
  const clickSelector = event.target
  const idText = clickSelector.getAttribute("id")
  if (idText !== "" && idText !== null) { //confere se o click aconteceu em um botao
    const auxArray = idText.split('_')
    const productAtribute = auxArray[0]
    const productIndex = Number(auxArray[1])
    if (productAtribute === "delet") { //se foi o botao de delet
      if (confirm(`Voce esta prestes a exluir o produto ${arrayProdutos[productIndex].nome}`)) {
        arrayProdutos.splice(productIndex, 1)
      } else {
        return
      }
    } else { //se foi algum outro botao
      const newPropertyValue = prompt(`Qual sera o novo valor de ${productAtribute} ?`) //pede o valor a ser alterado no botao clicado
      if (newPropertyValue === null) { //se o usuario nao digitou nada
        alert("Campo nao preenchido")
        return
      } else if (productAtribute === "codigo" && (!Number(newPropertyValue) || Number(newPropertyValue) % 1 !== 0)) { //se o usuario digitou um codigo invalido para o produto
        alert("Codigo deve ser um numero inteiro")
        return
      } else if (productAtribute === "valor" && !Number(newPropertyValue)) { //se o usuario digitou um valor invalido para o produto
        alert("O formato de valor deve ser um numero")
        return
      }
      (arrayProdutos[productIndex])[productAtribute] = newPropertyValue
    }
    loadProductsMenu()
  }
}

//funcao que dispara apos clicar no botao de adicionar novo produto
function addProduct() {
  //recupera as inforamcoes digitadas pelo usuario
  const productCode = document.querySelector('#inputCode').value
  const productName = document.querySelector('#inputName').value
  const productValue = document.querySelector('#inputValue').value
  if (productCode === null || productName === null || productValue === null) { //se algum dos campos estiver vazio
    alert("Preencha as informacoes do produto corretamente")
    return
  }
  // console.log(`codigo: ${productCode}\nnome: ${productName}\nvalor: ${productValue}`)
  arrayProdutos.push(new Produto(Number(productCode), productName, Number(productValue)))
  loadProductsMenu()
}

//carrega o menu de produtos
function loadProductsMenu() {
  clearContainer()
  const containerSelector = document.querySelector('.container')
  //display de informacoes dos produtos ja cadastrados
  const productsDisplay = document.createElement('div')
  //titulo do menu de produtos
  const productsLabel = document.createElement('h1')
  productsLabel.innerHTML = 'PRODUTOS'
  //botoes de adicionar produto e voltar para o menu anterior
  const productsAddButton = document.createElement('button')
  productsAddButton.innerHTML = 'Cadastrar Produto'
  const backButton = document.createElement('button')
  backButton.innerHTML = 'Voltar'
  const buttonsContent = document.createElement('div')
  buttonsContent.appendChild(productsAddButton)
  buttonsContent.appendChild(backButton)
  //fomrulario para adicionar novo produto
  //codigo, nome, valor
  const formProductAdd = document.createElement('form')
  const codeInput = document.createElement('input')
  codeInput.setAttribute("id", "inputCode")
  codeInput.setAttribute("type", "number")
  codeInput.setAttribute("step", "1")
  codeInput.setAttribute("min", "0")
  codeInput.setAttribute("placeholder", "Codigo")
  codeInput.setAttribute("onchange", "this.value = parseInt(this.value);")

  const nameInput = document.createElement('input')
  nameInput.setAttribute("id", "inputName")
  nameInput.setAttribute("placeholder", "Nome")

  const valueInput = document.createElement('input')
  valueInput.setAttribute("id", "inputValue")
  valueInput.setAttribute("type", "number")
  valueInput.setAttribute("min", "0")
  valueInput.setAttribute("placeholder", "Valor")
  valueInput.setAttribute("onchange", "this.value = parseFloat(this.value);")

  //organizando inputs do formulario na ordem de preenchimento
  formProductAdd.appendChild(codeInput)
  formProductAdd.appendChild(nameInput)
  formProductAdd.appendChild(valueInput)

  //adiciona os produtos ja cadastrados no display
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

  //adicionando os componentes ja montados ao container principal
  containerSelector.appendChild(productsLabel)
  containerSelector.appendChild(formProductAdd)
  containerSelector.appendChild(buttonsContent)
  containerSelector.appendChild(createLine())
  containerSelector.appendChild(productsDisplay)

  //definindo eventos de click dos botoes
  productsAddButton.addEventListener('click', addProduct)
  backButton.addEventListener('click', loadMainMenu)
  productsDisplay.addEventListener('click', alterOrDeleteProduct)
}

//funcao que dispara apos clicar em um botao no menu de produtos
function alterOrDeleteClient(event) {
  const clickSelector = event.target
  const idText = clickSelector.getAttribute("id")
  if (idText !== "" && idText !== null) { //checa se o elemento clicado foi um botao
    const auxArray = idText.split('_')
    const clientAtribute = auxArray[0]
    const clientIndex = Number(auxArray[1])
    if (clientAtribute === "delet") { //se foi o botao de delet
      if (confirm(`Voce esta prestes a exluir o cliente ${arrayClientes[clientIndex].nome}`)) arrayClientes.splice(clientIndex, 1)
      else {
        return
      }
    } else { //se foi algum outro botao
      const newPropertyValue = prompt(`Qual sera o novo valor de ${clientAtribute} ?`)
      if (newPropertyValue === null) { //se o valor digitado esta vazio
        alert("Campo nao preenchido")
        return
      } else if (clientAtribute !== "dataNascimento") { //se o valor da alteracao nao e o valor da data
        (arrayClientes[clientIndex])[clientAtribute] = newPropertyValue
      } else { //se o valor da alteracao e o valor da data
        const arrayAux = newPropertyValue.split("/")
        if (newPropertyValue.match(/\//g).length !== 2 || arrayAux[0].length !== 2 || arrayAux[1].length !== 2 || arrayAux[2].length !== 4 || !(Number(arrayAux[0])) || !(Number(arrayAux[1])) || !(Number(arrayAux[2]))) {
          alert("O formato de data esta errado (DD/MM/AAAA)")
          return
        }
        (arrayClientes[clientIndex])[clientAtribute] = new Date(arrayAux[2] + '-' + arrayAux[1] + '-' + Number(arrayAux[0])) //altera o forma da data para AAAA/MM/DD
      }
    }
    loadClientsMenu()
  }
}

//funcao que dispara apos clicar no botao de adicionar novo cliente
function addClient() {
  //recupera as informacoes digitadas pelo usuario
  const clientName = document.querySelector('#inputNome').value
  const clientAdress = document.querySelector('#inputEndereco').value
  const clientRg = document.querySelector('#inputRg').value
  const clientBDate = document.querySelector('#inputDate').value
  if (clientName === null || clientAdress === null || clientRg === null || clientBDate === null) { //se algum dos campos esta vazio
    alert("Preencha todos os campos para cadastrar um cliente")
    return
  }
  // console.log(`nome: ${clientName}\nendereco: ${clientAdress}\nRG: ${clientRg}\nnascimento ${clientBDate}`)
  let dataRefac = new Date(clientBDate)
  dataRefac.setDate(dataRefac.getDate() + 1)
  arrayClientes.push(new Cliente(clientName, clientAdress, clientRg, dataRefac))
  loadClientsMenu()
}

function loadClientsMenu() {
  clearContainer()
  const containerSelector = document.querySelector('.container')
  //titulodo menu de clientes
  const clientsLabel = document.createElement('h1')
  clientsLabel.innerHTML = 'CLIENTES'
  //botoes de adicionar cliente e voltar para o menu anterior
  const clientsAddButton = document.createElement('button')
  clientsAddButton.innerHTML = 'Cadastrar Cliente'
  const backButton = document.createElement('button')
  backButton.innerHTML = 'Voltar'
  const buttonsContent = document.createElement('div')
  buttonsContent.appendChild(clientsAddButton)
  buttonsContent.appendChild(backButton)
  //fomrulario de cadastro de um novo cliente
  const formClientAdd = document.createElement('form')

  const nomeInput = document.createElement('input')
  nomeInput.setAttribute("id", "inputNome")
  nomeInput.setAttribute("placeholder", "Nome")

  const enderecoInput = document.createElement('input')
  enderecoInput.setAttribute("id", "inputEndereco")
  enderecoInput.setAttribute("placeholder", "Endereco")

  const rgInput = document.createElement('input')
  rgInput.setAttribute("id", "inputRg")
  rgInput.setAttribute("placeholder", "RG")

  const dateInput = document.createElement('input')
  dateInput.setAttribute("id", "inputDate")
  dateInput.setAttribute("type", "date")
  dateInput.setAttribute("placeholder", "Data de nascimento")

  //adicionando os elementos ja montados do fomulario
  formClientAdd.appendChild(nomeInput)
  formClientAdd.appendChild(enderecoInput)
  formClientAdd.appendChild(rgInput)
  formClientAdd.appendChild(dateInput)

  //display de informacoes de clientes ja cadastrados
  const clientsDisplay = document.createElement('div')

  for (let i = 0; i < arrayClientes.length; i++) { //adiciona as informacoes de clientes ja cadastrados no display
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
    clientBDate.innerHTML = arrayClientes[i].dataNascimento.toLocaleDateString('pt-BR', dateOptions)

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

  //organiza os elementos ja criados no container principal
  containerSelector.appendChild(clientsLabel)
  containerSelector.appendChild(formClientAdd)
  containerSelector.appendChild(buttonsContent)
  containerSelector.appendChild(createLine())
  containerSelector.appendChild(clientsDisplay)
  //define os eventos de click dos botoes
  clientsAddButton.addEventListener('click', addClient)
  backButton.addEventListener('click', loadMainMenu)
  clientsDisplay.addEventListener('click', alterOrDeleteClient)
}

//carrega o menu principal
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
  menuLabel.innerHTML = 'MENU DO SISTEMA'
  containerSelector.appendChild(menuLabel)
  containerSelector.appendChild(createLine())
  containerSelector.appendChild(clientsButton)
  containerSelector.appendChild(productsButton)
  containerSelector.appendChild(salesButton)

  clientsButton.addEventListener('click', loadClientsMenu)
  productsButton.addEventListener('click', loadProductsMenu)
  salesButton.addEventListener('click', loadSalesMenu)
}

arrayClientes.push(new Cliente("Felipi", "Av Leite de castro, 1679", "MG20.187.308", new Date("1999-02-05")))
arrayClientes.push(new Cliente("Pedro", "Lagoa Dourada", "M17.145.457", new Date("1997-09-31")))
arrayClientes.push(new Cliente("Marcus", "Sampa", "SP14.784.425", new Date("1996-05-22")))

const bolaObj = new Produto(1, "Bola", 25.50)
const tenisObj = new Produto(2, "Tenis", 50.75)
const paierinhoObj = new Produto(3, "Paierinho", 1.25)
arrayProdutos.push(bolaObj)
arrayProdutos.push(tenisObj)
arrayProdutos.push(paierinhoObj)

arrayVendas.push(new Venda(1, new Date("2021-10-05"), arrayClientes[0]))
arrayVendas.push(new Venda(2, new Date(), arrayClientes[2]))
arrayVendas.push(new Venda(3, new Date(), arrayClientes[0]))

arrayVendas[0].addItens(new ItemVenda(bolaObj, 5), new ItemVenda(paierinhoObj, 3), new ItemVenda(tenisObj, 2))
arrayVendas[1].addItens(new ItemVenda(bolaObj, 2), new ItemVenda(tenisObj, 4))
arrayVendas[2].addItens(new ItemVenda(tenisObj, 3))

loadMainMenu()