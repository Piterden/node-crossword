import BaseClass from 'constructor-decorator'

import Cell from './Cell'
import Word from './Word'

class Grid extends BaseClass {
  get args () {
    return {
      width: Number,
      height: Number,
      blanks: Array,
      name: String,
    }
  }

  constructor (width, height, blanks, name) {
    super(width, height, blanks, name)

    this.cells = this.rebuildCells()
    this.blanks = new Set(this.blanks)
    this.symmetry = {
      horizontal: true,
      vertical: true,
      diagonal: true,
    }
  }

  addBlanks (...ids) {
    ids.forEach((id) => {
      this.blanks.add(id)
    })
  }

  removeBlanks (...ids) {
    ids.forEach((id) => {
      this.blanks.delete(id)
    })
  }

  toggleBlank (id) {
    const [x, y] = id.split(':')
    const verticalId = `${this.width - x + 1}:${y}`
    const horizontalId = `${x}:${this.height - y + 1}`
    const diagonalId = `${this.width - x + 1}:${this.height - y + 1}`

    if (this.blanks.has(id)) {
      this.blanks.delete(id)

      if (this.symmetry.vertical) {
        this.blanks.delete(verticalId)
      }

      if (this.symmetry.horizontal) {
        this.blanks.delete(horizontalId)
      }

      if (this.symmetry.diagonal) {
        this.blanks.delete(diagonalId)
      }

      return
    }

    this.blanks.add(id)

    if (this.symmetry.vertical) {
      this.blanks.add(verticalId)
    }

    if (this.symmetry.horizontal) {
      this.blanks.add(horizontalId)
    }

    if (this.symmetry.diagonal) {
      this.blanks.add(diagonalId)
    }
  }

  rebuildGrid ({ width, height }) {
    this.blanks.clear()
    this.width = width
    this.height = height
    this.cells = this.rebuildCells()
  }

  rebuildCells () {
    return new Map(Array.from({ length: this.height }, (col, idx) => idx + 1)
      .flatMap((col) => Array.from(
        { length: this.width },
        (row, idx) => [`${idx + 1}:${col}`, new Cell(idx + 1, col)],
      )))
  }

  changeSize ({ width, height }) {
    if (width && this.width !== width) {
      this.width = width
    }
    if (height && this.height !== height) {
      this.height = height
    }
  }

  generateGrid (hSym, vSym, blankProb) {
    this.blanks.clear()
    let fillWidth
    let fillHeight

    if (hSym && vSym) {
      fillWidth = Math.round(this.width / 2)
      fillHeight = Math.round(this.height / 2)
    } else {
      fillWidth = hSym ? this.width : Math.round(this.width / 2)
      fillHeight = vSym ? this.height : Math.round(this.height / 2)
    }

    for (let x = 1; x <= fillWidth; x += 1) {
      for (let y = 1; y <= fillHeight; y += 1) {
        if (Math.random() > blankProb) {
          continue
        }

        this.toggleBlank(`${x}:${y}`)
      }
    }
  }

  singleDirectionWords (isVertical = false) {
    const words = []
    let row = 1

    for (row; row <= (isVertical ? this.width : this.height); row += 1) {
      const rowBlankCells = [...this.blanks]
        // eslint-disable-next-line no-loop-func
        .filter((cell) => Number(cell.split(':')[isVertical ? 0 : 1]) === row)
        .map((cell) => Number(cell.split(':')[isVertical ? 1 : 0]))

      if (rowBlankCells.length > 0) {
        const cols = Array.from({
          length: (isVertical ? this.height : this.width),
        }).map((el, idx) => idx + 1)

        if (cols) {
          `:${cols.join('::')}:`
            .split(new RegExp(`:${rowBlankCells.join(':|:')}:`))
            .filter((word) => {
              const match = word.match(/:\d+:/g)

              return match ? match.length > 1 : false
            })
            // eslint-disable-next-line no-loop-func
            .forEach((word) => {
              const match = word.match(/:\d+:/g)
              const length = match ? match.length : 0
              const x = Number(word.match(/^:(\d+)/)[1])

              words.push([
                isVertical ? row : x,
                isVertical ? x : row,
                length,
                isVertical,
              ])
            })
        }
      } else {
        words.push([
          isVertical ? row : 1,
          isVertical ? 1 : row,
          isVertical ? this.height : this.width,
          isVertical,
        ])
      }
    }

    return words
  }

  get words () {
    return this.addIndexes([
      ...this.singleDirectionWords(true),
      ...this.singleDirectionWords(false),
    ]).map((arr) => new Word(...arr))
  }

  addIndexes (words) {
    return words.map((word) => {
      const { index } = this.startCells(words)
        .find(({ x, y }) => word[0] === x && word[1] === y)

      return [...word, index]
    })
  }

  startCells (words) {
    return [...new Set(words.map(([x, y]) => ({ x, y })))]
      .sort((a, b) => a.y === b.y ? a.x - b.x : a.y - b.y)
      .map((word, index) => ({ ...word, index: index + 1 }))
  }

  // letterCells () {
  //   const cells = []
  //   let col = 1

  //   for (col; col <= this.width; col += 1) {
  //     let row = 1

  //     for (row; row <= this.height; row += 1) {
  //       if (this.blanks.includes(`${col}:${row}`)) {
  //         continue
  //       }
  //       cells.push({ x: col, y: row })
  //     }
  //   }

  //   return cells.reduce((acc, { x, y }) => {
  //     acc[`${x}:${y}`] = ''
  //     return acc
  //   }, {})
  // }
}

export default Grid
