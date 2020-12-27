class Maze {
  constructor(width, canvasDimensions) {
    this.width = width
    this.canvasDimensions = canvasDimensions
    this.cellsSize = canvasDimensions / width
    this.grid = []
    for (let i = 0; i < width; i++) {
      this.grid.push([])
      for (let j = 0; j < width; j++) {
        this.grid[i].push(new Cell(i, j))
      }
    }
  }

  /** There are 3 possible states for a Cell:
   * - Cell not visited yet
   * - Cell visited but still processing (currently on stack)
   * - Cell processing finished
   * @param {*} currProcessing current cell being processed in this iteration
   * @param {*} stack current stack state
   */
  show(currProcessing, stack = []) {
    const colors = {
      walls: [255, 255, 255],
      current: [255, 68, 140],
      inProgress: [130, 130, 200],
      finished: [180, 80, 0],
    }
    const size = this.cellsSize

    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width; j++) {
        const cell = this.grid[i][j]
        const x = i * this.cellsSize
        const y = j * this.cellsSize

        // Handling cell states
        if (currProcessing === cell)
          // current being processed
          fill(...colors.current)
        else if (stack.includes(cell))
          // not finished
          fill(...colors.inProgress)
        else noFill() // not visited

        noStroke()
        rect(x, y, this.cellsSize, this.cellsSize, 4)

        // Walls
        stroke(...colors.walls)
        strokeWeight(100 / this.width)
        cell.walls.top && line(x, y, x + size, y)
        cell.walls.right && line(x + size, y, x + size, y + size)
        cell.walls.bottom && line(x, y + size, x + size, y + size)
        cell.walls.left && line(x, y, x, y + size)
      }
    }
  }
}
