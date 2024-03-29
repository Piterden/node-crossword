import BaseClass from 'constructor-decorator'

class Cell extends BaseClass {
  get args () {
    return {
      x: Number,
      y: Number,
    }
  }

  constructor (...args) {
    super(...args)

    this.letter = ''
  }

  toString () {
    return `${this.x}:${this.y}`
  }
}

export default Cell
