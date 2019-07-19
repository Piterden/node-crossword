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

  inputLetter ({ x, y, value }) {
    this.letters[`${x}:${y}`] = value
  }
}

export default Crossword
