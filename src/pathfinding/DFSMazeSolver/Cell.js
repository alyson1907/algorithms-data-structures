class Cell {
  constructor(cell) {
    this.x = cell.x
    this.y = cell.y
    this.visited = false
    this.isStart = false
    this.isEnd = false
    this.walls = cell.walls
  }

  equalsCellPos(x, y) {
    return this.x === x && this.y === y
  }
}
