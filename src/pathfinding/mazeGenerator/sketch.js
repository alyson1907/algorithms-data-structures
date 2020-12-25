// Parameters
const canvasDimensions = 600
const width = 50
function findUnvisitedNeighbour(x, y) {
  // prettier-ignore
  // Order: Top, Right, Bottom, Left
  const neighbours = [
    { x       , y: y - 1  },
    { x: x + 1, y         },
    { x       , y: y + 1  },
    { x: x - 1, y         },
  ]
  const coords = neighbours.find((n) => {
    const cell = maze.grid[n.x] && maze.grid[n.x][n.y]
    return cell && cell.visited === false
  })
  return coords && maze.grid[coords.x][coords.y]
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
  const initCell = maze.grid[0][0]
  initCell.visited = true
  stack.push(initCell)
  createCanvas(canvasDimensions, canvasDimensions)
  background(90)
  frameRate(15)
}

/* eslint-disable-next-line */
function draw() {
  clear()
  if (stack.length > 0) {
    // console.log(stack)
    const cell = stack.pop()
    const firstNeighbour = findUnvisitedNeighbour(cell.x, cell.y)
    if (firstNeighbour) {
      stack.push(cell)
      removeWall(cell, firstNeighbour)
      firstNeighbour.visited = true
      stack.push(firstNeighbour)
    }
  } else {
    console.log('Finished', JSON.stringify(maze.grid))
    noLoop()
  }
  maze.show()
}
