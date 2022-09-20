/**
 * Abstract Class Totalizavel.
 *
 * @class Totalizavel
 */
class Totalizavel {
  constructor() {
    if (this.constructor === Totalizavel) throw new TypeError('Totalizavel is an abstract class')
  }

  total() {
    throw new Error("Total ethod has no implementation")
  }
}

export { Totalizavel }