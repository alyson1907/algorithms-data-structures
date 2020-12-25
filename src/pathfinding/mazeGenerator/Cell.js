class Cell {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.visited = false
    this.walls = { top: true, right: true, bottom: true, left: true }
  }
}
