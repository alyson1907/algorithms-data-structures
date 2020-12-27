// Parameters
const canvasDimensions = 800
const start = { x: 1, y: 7 }
const end = { x: 14, y: 14 }
let maze
let mazeSolver

/* eslint-disable-next-line */
function setup() {
  maze = new Maze(inputs[1], canvasDimensions, start, end)
  mazeSolver = new MazeSolver(maze, start, end)
  createCanvas(canvasDimensions, canvasDimensions)
  // frameRate(6)
}

/* eslint-disable-next-line */
function draw() {
  clear()
  const { maze: nextMazeState, stack } = mazeSolver.nextIteration()
  maze = nextMazeState
  maze.show(stack)
}
