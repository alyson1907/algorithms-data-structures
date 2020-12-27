class Cell {
  constructor(cell) {
    this.x = cell.x
    this.y = cell.y
    this.visited = false
    this.isCurrent = false
    this.isStart = false
    this.isEnd = false
    this.walls = cell.walls
  }

  equalsCellPos(x, y) {
    return this.x === x && this.y === y
  }

  hasWallBetween(cell) {
    if (this.x < cell.x) return this.walls.right && cell.walls.left
    else if (this.x > cell.x) return this.walls.left && cell.walls.right
    else if (this.y < cell.y) return this.walls.bottom && cell.walls.top
    else if (this.y > cell.y) return this.walls.top && cell.walls.bottom
    return true
  }
}
