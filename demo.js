const blanks = [
  '1:10', '1:10', '1:11', '1:13', '1:7', '1:9',
  '2:1', '2:15', '2:17', '2:19', '2:3', '2:5',
  '3:1', '3:10', '3:10', '3:11', '3:13', '3:15', '3:17', '3:19', '3:3', '3:5', '3:7', '3:9',
  '4:11', '4:13', '4:7', '4:9',
  '5:1', '5:11', '5:13', '5:15', '5:17', '5:19', '5:3', '5:5', '5:7', '5:9',
  '6:1', '6:11', '6:13', '6:15', '6:17', '6:19', '6:3', '6:5', '6:7', '6:9',
  '7:11', '7:12', '7:13', '7:15', '7:5', '7:7', '7:8', '7:9',
  '8:1', '8:11', '8:13', '8:15', '8:16', '8:17', '8:18', '8:19', '8:2', '8:3', '8:4', '8:5', '8:7', '8:9',
  '9:11', '9:9',
  '10:1', '10:13', '10:15', '10:16', '10:17', '10:18', '10:19', '10:2', '10:3', '10:4', '10:5', '10:7',
  '11:11', '11:13', '11:7', '11:9',
  '12:10', '12:10', '12:11', '12:13', '12:14', '12:15', '12:16', '12:18', '12:2', '12:4', '12:5', '12:6', '12:7', '12:9',
  '13:13', '13:14', '13:6', '13:7',
  '14:11', '14:16', '14:18', '14:2', '14:4', '14:9',
  '15:11', '15:12', '15:13', '15:14', '15:16', '15:18', '15:2', '15:4', '15:6', '15:7', '15:8', '15:9',
  '16:14', '16:16', '16:17', '16:18', '16:2', '16:3', '16:4', '16:6',
  '17:11', '17:11', '17:12', '17:12', '17:13', '17:13', '17:14', '17:14', '17:6', '17:6', '17:7', '17:7', '17:8', '17:8', '17:9', '17:9',
  '18:14', '18:16', '18:17', '18:18', '18:2', '18:3', '18:4', '18:6',
  '19:11', '19:12', '19:13', '19:14', '19:16', '19:18', '19:2', '19:4', '19:6', '19:7', '19:8', '19:9',
  '20:11', '20:16', '20:18', '20:2', '20:4', '20:9',
  '21:13', '21:14', '21:6', '21:7',
  '22:10', '22:10', '22:11', '22:13', '22:14', '22:15', '22:16', '22:18', '22:2', '22:4', '22:5', '22:6', '22:7', '22:9',
  '23:11', '23:13', '23:7', '23:9',
  '24:1', '24:13', '24:15', '24:16', '24:17', '24:18', '24:19', '24:2', '24:3', '24:4', '24:5', '24:7',
  '25:11', '25:9',
  '26:1', '26:11', '26:13', '26:15', '26:16', '26:17', '26:18', '26:19', '26:2', '26:3', '26:4', '26:5', '26:7', '26:9',
  '27:11', '27:12', '27:13', '27:15', '27:5', '27:7', '27:8', '27:9',
  '28:1', '28:11', '28:13', '28:15', '28:17', '28:19', '28:3', '28:5', '28:7', '28:9',
  '29:1', '29:11', '29:13', '29:15', '29:17', '29:19', '29:3', '29:5', '29:7', '29:9',
  '30:11', '30:13', '30:7', '30:9',
  '31:1', '31:10', '31:10', '31:11', '31:13', '31:15', '31:17', '31:19', '31:3', '31:5', '31:7', '31:9',
  '32:1', '32:15', '32:17', '32:19', '32:3', '32:5',
  '33:10', '33:10', '33:11', '33:13', '33:7', '33:9',
]

const { Grid, Crossword } = window.X

const initialGrid = new Grid(33, 19, blanks, 'test')
const crossword = new Crossword(initialGrid)

console.log(crossword)
const el = document.getElementById('crossword')
const vertical = document.getElementById('vertical')
const horizontal = document.getElementById('horizontal')
const startCells = new Map(
  crossword.grid.words.map(({ x, y, index }) => [`${x}:${y}`, index])
)

const createWordForm = (word) => {
  const letters = Array.from(
    { length: word.length },
    (item, idx) => `<div class="letter-wrap">
<input type="text"
  size="1"
  minlength="1"
  maxlength="1"
  readonly />
</div>`,
  ).join('')

  return `
<div class="form">
  <div class="letters-wrapper">
    ${letters}
  </div>

</div>
`
}

const render = () => {
  const grid = Array.from(crossword.grid.cells.values())
    .map((cell) => `<div
    class="cell${crossword.grid.blanks.has(cell + []) ? ' blank' : ''}"
    data-id="${cell + []}"
  >
  ${startCells.get(cell + []) ? '<sup>' + startCells.get(cell + []) + '</sup>' : ''}
  </div>`)
    .join('')

  el.innerHTML = `
  <div id="grid"
    style="
      grid-template-columns:repeat(${crossword.grid.width}, 30px);
      grid-template-rows:repeat(${crossword.grid.height}, 30px);
    ">
    ${grid}
  </div>
  `

  vertical.innerHTML = [...crossword.verticalWords.values()]
    .map((word) => createWordForm(word)).join('')
  horizontal.innerHTML = [...crossword.horizontalWords.values()]
    .map((word) => createWordForm(word)).join('')

  const cellEls = Array.from(document.querySelectorAll('.cell'))

  cellEls.forEach((cellEl) => {
    cellEl.addEventListener('click', (e) => {
      crossword.grid.toggleBlank(e.target.dataset.id)
      render()
    })
  })
}

render()
