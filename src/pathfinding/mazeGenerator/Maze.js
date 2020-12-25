class Maze {
  constructor(width, canvasDimensions) {
    this.width = width
    this.canvasDimensions = canvasDimensions
    this.cellsSize = canvasDimensions / width
    this.maze = []
    for (let i = 0; i < width; i++) {
      this.maze.push([])
      for (let j = 0; j < width; j++) {
        this.maze[i].push(new Cell())
      }
    }
  }

  show() {
    const w = this.width
    for (let i = 0; i < w; i++) {
      for (let j = 0; j < w; j++) {
        const cell = this.maze[i][j]
        const x = i * this.cellsSize
        const y = j * this.cellsSize
        stroke(220)
        cell.walls.top && line(x, y, x + w, y)
        cell.walls.right && line(x + w, y, x + w, y + w)
        cell.walls.bottom && line(x, y + w, x + w, y + w)
        cell.walls.left && line(x, y, x, y + w)
      }
    }
  }
}
