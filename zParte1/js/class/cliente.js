import { Pessoa } from './pessoa.js'
/**
 * Cliente.
 *
 * @class Cliente
 * @extends {Pessoa}
 */
const _rg = Symbol('rg_cliente')
const _dataNascimento = Symbol('dataNascimento_cliente')
class Cliente extends Pessoa {
  constructor(nome, endereco, rg, dataNascimento) {
    if (typeof rg !== 'string' || !(dataNascimento instanceof Date)) throw new TypeError('Invalid parameter type')
    super(nome, endereco)
    this[_rg] = rg
    this[_dataNascimento] = dataNascimento
  }

  get rg() {
    return this[_rg]
  }

  get dataNascimento() {
    return this[_dataNascimento]
  }

  set rg(value) {
    if (typeof value !== 'string') return
    this[_rg] = value
  }

  set dataNascimento(value) {
    if (!(value instanceof Date)) return
    this[_dataNascimento] = value
  }
}

export { Cliente }