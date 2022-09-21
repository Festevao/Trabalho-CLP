import { Produto } from './produto.js'
import {Totalizavel} from './totalizavel.js'

/**
 * ItemVenda.
 *
 * @class ItemVenda
 * @extends {Totalizavel}
 */
const _produto = Symbol('produto_ItemVenda')
const _quantidade = Symbol('quantidade_ItemVenda')
class ItemVenda extends Totalizavel {
  constructor(produto, quantidade) {
    if (!(Number(quantidade) === quantidade && quantidade % 1 === 0) || !(produto instanceof Produto)) throw new TypeError('Invalid parameter type')
    super()
    this[_produto] = produto
    this[_quantidade] = quantidade
  }

  get produto() {
    return this[_produto]
  }

  get quantidade() {
    return this[_quantidade]
  }

  get valor() {
    return this[_produto].valor
  }

  total() {
    return this[_produto].valor * this[_quantidade]
  }
}

export { ItemVenda }