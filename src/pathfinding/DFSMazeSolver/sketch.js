// Parameters
const canvasDimensions = 800
const start = { x: 4, y: 4 }
const end = { x: 14, y: 14 }

/* eslint-disable-next-line */
function setup() {
  maze = new Maze(input1, canvasDimensions)
  createCanvas(canvasDimensions, canvasDimensions)
  // frameRate(30)
}

/* eslint-disable-next-line */
function draw() {
  clear()
  maze.show(start, end)
}
