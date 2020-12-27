class MazeSolver {
  constructor(maze, start, end) {
    this.maze = maze
    this.start = start
    this.end = end
    const initCell = this.maze.grid[start.x][start.y]
    this.stack = [initCell]
    initCell.visited = true
    this.setCurrentCell(initCell)
  }

  // Finds the first unvisited neighbour with no walls between
  findUnvisitedNeighbour(cell) {
    // prettier-ignore
    // Checking order: Top, Right, Bottom, Left
    const neighbours = [
      { x: cell.x     , y: cell.y - 1 },
      { x: cell.x + 1 , y: cell.y     },
      { x: cell.x     , y: cell.y + 1 },
      { x: cell.x - 1 , y: cell.y     },
    ]
    const coords = neighbours.find((n) => {
      const neighbour = this.maze.grid[n.x] && this.maze.grid[n.x][n.y]
      return neighbour && !neighbour.visited && !cell.hasWallBetween(neighbour)
    })
    return coords && this.maze.grid[coords.x][coords.y]
  }

  setCurrentCell(next) {
    if (next) {
      if (this.curr) this.curr.isCurrent = false
      next.isCurrent = true
      this.curr = next
    }
  }

  nextIteration() {
    if (this.stack.length === 0 || this.curr.isEnd) {
      noLoop()
      console.log(this.stack)
      return {
        maze: this.maze,
        stack: this.stack,
      }
    }
    const cell = this.stack.pop()
    const neighbour = this.findUnvisitedNeighbour(cell)
    if (neighbour) {
      neighbour.visited = true
      this.stack.push(cell)
      this.stack.push(neighbour)
      this.setCurrentCell(neighbour)
    }
    return {
      maze: this.maze,
      stack: this.stack,
    }
  }
}
