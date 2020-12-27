class Maze {
  constructor(input, canvasDimensions, start, end) {
    this.width = input.length
    this.canvasDimensions = canvasDimensions
    this.cellsSize = canvasDimensions / this.width
    this.grid = input.map((row) => row.map((cell) => {
      const c = new Cell(cell)
      if (c.equalsCellPos(start.x, start.y)) c.isStart = true
      if (c.equalsCellPos(end.x, end.y)) c.isEnd = true
      return c
    })
    )
  }

  /** There are 3 possible states for a Cell:
   * - Cell not visited yet
   * - Cell visited but still processing (currently on stack)
   * - Cell processing finished
   * @param {*} currProcessing current cell being processed in this iteration
   * @param {*} stack current stack state
   */
  show() {
    const size = this.cellsSize
    const colors = {
      walls: [255, 255, 255],
      start: [204, 68, 204],
      end: [180, 80, 0],
    }

    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width; j++) {
        const cell = this.grid[i][j]
        const x = i * this.cellsSize
        const y = j * this.cellsSize

        if (cell.isStart) fill(...colors.start)
        else if (cell.isEnd) fill(...colors.end)
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
