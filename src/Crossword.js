import BaseClass from 'constructor-decorator'

import Grid from './Grid'

class Crossword extends BaseClass {
  get args () {
    return {
      grid: Grid,
    }
  }

  constructor () {
    super(...arguments)

    this.mode = 'grid'
  }

  get horizontalWords () {
    return this.createWordsMap(
      this.grid.words.filter(({ isVertical }) => !isVertical)
    )
  }

  get verticalWords () {
    return this.createWordsMap(
      this.grid.words.filter(({ isVertical }) => isVertical)
    )
  }

  toggleMode () {
    this.mode = this.mode === 'grid' ? 'fill' : 'grid'
  }

  createWordsMap (words) {
    return new Map(words.map((word) => [word.index, word]))
  }

  setLetter (x, y, value) {
    if (typeof value === 'undefined') {
      if (typeof x === 'string' && x.split(':').length === 2 && typeof y === 'string') {
        value = y
        y = x.split(':')[1]
        x = x.split(':')[0]
      }
    }
    this.grid.cells.get(`${x}:${y}`).letter = value
  }
}

export default Crossword
