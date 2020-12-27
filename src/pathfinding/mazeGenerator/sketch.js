// Parameters
const canvasDimensions = 800
const width = 15
function findUnvisitedNeighbour(x, y) {
  // prettier-ignore
  const neighbours = [
    { x       , y: y - 1  },
    { x: x + 1, y         },
    { x       , y: y + 1  },
    { x: x - 1, y         },
  ]

  while (neighbours.length > 0) {
    const idx = parseInt(Math.random() * neighbours.length)
    const n = neighbours[idx]
    neighbours.splice(idx, 1)
    const neighbour = maze.grid[n.x] && maze.grid[n.x][n.y]
    if (neighbour && neighbour.visited === false) return neighbour
  }
}

function removeWall(cell1, cell2) {
  const deltaX = cell1.x - cell2.x
  const deltaY = cell1.y - cell2.y
  // cell2 is on Top side from cell1
  if (deltaY === 1) {
    cell1.walls.top = false
    cell2.walls.bottom = false
  }

  // cell2 is on Right side from cell1
  if (deltaX === -1) {
    cell1.walls.right = false
    cell2.walls.left = false
  }

  // cell2 is on Bottom side from cell1
  if (deltaY === -1) {
    cell1.walls.bottom = false
    cell2.walls.top = false
  }

  if (deltaX === 1) {
    cell1.walls.left = false
    cell2.walls.right = false
  }
}

/* eslint-disable-next-line */
const stack = []
let maze
function setup() {
  maze = new Maze(width, canvasDimensions)
  const iniX = parseInt(Math.random() * width)
  const iniY = parseInt(Math.random() * width)
  const initCell = maze.grid[iniX][iniY]
  initCell.visited = true
  stack.push(initCell)
  createCanvas(canvasDimensions, canvasDimensions)
  // frameRate(30)
}

/* eslint-disable-next-line */
function draw() {
  clear()
  if (stack.length > 0) {
    const cell = stack.pop()
    maze.show(cell, stack)
    const firstNeighbour = findUnvisitedNeighbour(cell.x, cell.y)
    if (firstNeighbour) {
      stack.push(cell)
      removeWall(cell, firstNeighbour)
      firstNeighbour.visited = true
      stack.push(firstNeighbour)
    }
  } else {
    console.log(JSON.stringify(maze.grid))
    noLoop()
  }
  maze.show()
}
