// Parameters
const canvasDimensions = 800
const start = { x: 4, y: 4 }
const end = { x: 14, y: 14 }
let maze
let mazeSolver

/* eslint-disable-next-line */
function setup() {
  maze = new Maze(input1, canvasDimensions, start, end)
  mazeSolver = new MazeSolver(maze, start, end)
  createCanvas(canvasDimensions, canvasDimensions)
  // frameRate(30)
}

/* eslint-disable-next-line */
function draw() {
  clear()
  maze = mazeSolver.nextIteration()
  maze.show()
}
