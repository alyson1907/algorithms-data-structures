// Parameters
const canvasDimensions = 800
const width = 40
const maze = new Maze(width, canvasDimensions)
console.log(maze)

/* eslint-disable-next-line */
function setup() {
  createCanvas(canvasDimensions, canvasDimensions)
  background(80)
  frameRate(4)
}

/* eslint-disable-next-line */
function draw() {
  maze.show()
}
