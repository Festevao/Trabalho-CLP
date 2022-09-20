/**
 * Abstract Class Pessoa.
 *
 * @class Pessoa
 */
const _nome = Symbol('nome_Pessoa')
const _endereco = Symbol('endereco_Pessoa')
class Pessoa {
  constructor(nome, endereco) {
    if (typeof nome !== 'string' || typeof endereco !== 'string') throw new TypeError('Invalid parameter type')
    this[_nome] = nome
    this[_endereco] = endereco
    if (this.constructor === Pessoa) throw new TypeError('Pessoa is an abstract class')
  }

  get nome() {
    return this[_nome]
  }

  get endereco() {
    return this[_endereco]
  }

  set nome(value) {
    if (typeof value !== 'string') return
    this[_nome] = value
  }

  set endereco(value) {
    if (typeof value !== 'string') return
    this[_endereco] = value
  }
}

export { Pessoa }