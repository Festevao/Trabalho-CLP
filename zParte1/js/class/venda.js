import { Cliente } from './cliente.js'
import { ItemVenda } from './itemVenda.js'
import {Totalizavel} from './totalizavel.js'

const _numero = Symbol('numero_Venda')
const _data = Symbol('data_Venda')
const _cliente = Symbol('cliente_Venda')
const _itens = Symbol('itens_Venda')

class Venda extends Totalizavel {
  constructor(numero, data, cliente) {
    let isAllItemVenda = true
    for (let i = 3; i < arguments.length; i++) { // checa se todos os argumentos restantes sao do tipo ItemVenda
      if (!(arguments[i] instanceof ItemVenda)) {
        isAllItemVenda = false
      }
    }
    if (!(Number(numero) === numero && numero % 1 === 0) || !(data instanceof Date) || !(cliente instanceof Cliente) || !(arguments[3]) || !isAllItemVenda) throw new TypeError('Invalid parameter type')
    this[_numero] = numero
    this[_data] = data
    this[_cliente] = cliente
    arguments.splice(0, 3)
    this[_itens] = arguments
  }

  get numero() {
    return this[_numero]
  }

  get data() {
    return this[_data]
  }

  get cliente() {
    return this[_cliente]
  }

  get itens() {
    return this[_itens]
  }

  addItens() {
    for (let item of arguments) { // checa se todos os argumentos restantes sao do tipo ItemVenda
      if (!(item instanceof ItemVenda)) {
        throw new TypeError('Invalid parameter type')
      }
    }
    this[_itens] = this[_itens].concat(arguments)
  }

  total() {
    let sum = 0
    for(let i = 0; i < this[_itens].length; i++) {
      sum += this[_itens].total()
    }
    return sum
  }
}

export { Venda }