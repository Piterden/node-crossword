import Cell from './Cell'
import Grid from './Grid'
import Word from './Word'
import Builder from './Builder'
import Crossword from './Crossword'

const X = {
  Cell,
  Grid,
  Word,
  Builder,
  Crossword,
}

if (window) {
  window.X = X
}

export default X
