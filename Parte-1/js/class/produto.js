/**
 * Produto.
 *
 * @class Produto
 */
const _codigo = Symbol('codigo_Produto')
const _nome = Symbol('nome_Produto')
const _valor = Symbol('valor_Produto')
class Produto {
  constructor(codigo, nome, valor) {
    if(!(Number(codigo) === codigo && codigo % 1 === 0) || typeof nome !== 'string' || !Number(valor)) throw new TypeError('Invalid parameter type')
    this[_codigo] = Number(codigo)
    this[_nome] = nome
    this[_valor] = parseFloat(valor)
  }

  get codigo() {
    return this[_codigo]
  }

  get nome() {
    return this[_nome]
  }

  get valor() {
    return this[_valor]
  }

  set codigo(value) {
    if(!(Number(value) && Number(value) % 1 === 0)) return
    this[_codigo] = Number(value)
  }

  set nome(value) {
    if(typeof value !== 'string') return
    this[_nome] = value
  }

  set valor(value) {
    if(!Number(value)) return
    this[_valor] = parseFloat(value)
  }
}

export { Produto }