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

  show() {
    const size = this.cellsSize
    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width; j++) {
        const cell = this.grid[i][j]
        const x = i * this.cellsSize
        const y = j * this.cellsSize
        stroke(220)
        cell.walls.top && line(x, y, x + size, y)
        cell.walls.right && line(x + size, y, x + size, y + size)
        cell.walls.bottom && line(x, y + size, x + size, y + size)
        cell.walls.left && line(x, y, x, y + size)
      }
    }
  }
}
