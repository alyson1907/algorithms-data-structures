const inputs = [
  [
    [
      { x: 0, y: 0, visited: true, walls: { top: true, right: true, bottom: false, left: true } },
      { x: 0, y: 1, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 0, y: 2, visited: true, walls: { top: false, right: false, bottom: false, left: true } },
      { x: 0, y: 3, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 0, y: 4, visited: true, walls: { top: false, right: true, bottom: true, left: true } },
      { x: 0, y: 5, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 0, y: 6, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 0, y: 7, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 0, y: 8, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 0, y: 9, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 0, y: 10, visited: true, walls: { top: true, right: true, bottom: false, left: true } },
      { x: 0, y: 11, visited: true, walls: { top: false, right: false, bottom: false, left: true } },
      { x: 0, y: 12, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 0, y: 13, visited: true, walls: { top: true, right: true, bottom: false, left: true } },
      { x: 0, y: 14, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
    ],
    [
      { x: 1, y: 0, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 1, y: 1, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 1, y: 2, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 1, y: 3, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 1, y: 4, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 1, y: 5, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 1, y: 6, visited: true, walls: { top: true, right: false, bottom: true, left: true } },
      { x: 1, y: 7, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 1, y: 8, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 1, y: 9, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 1, y: 10, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 1, y: 11, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 1, y: 12, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 1, y: 13, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 1, y: 14, visited: true, walls: { top: false, right: false, bottom: true, left: false } },
    ],
    [
      { x: 2, y: 0, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 2, y: 1, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 2, y: 2, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 2, y: 3, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 2, y: 4, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 2, y: 5, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 2, y: 6, visited: true, walls: { top: false, right: false, bottom: true, left: false } },
      { x: 2, y: 7, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 2, y: 8, visited: true, walls: { top: true, right: true, bottom: false, left: true } },
      { x: 2, y: 9, visited: true, walls: { top: false, right: false, bottom: false, left: true } },
      { x: 2, y: 10, visited: true, walls: { top: false, right: false, bottom: true, left: false } },
      { x: 2, y: 11, visited: true, walls: { top: true, right: true, bottom: false, left: true } },
      { x: 2, y: 12, visited: true, walls: { top: false, right: false, bottom: false, left: true } },
      { x: 2, y: 13, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 2, y: 14, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
    ],
    [
      { x: 3, y: 0, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 3, y: 1, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 3, y: 2, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 3, y: 3, visited: true, walls: { top: true, right: true, bottom: false, left: true } },
      { x: 3, y: 4, visited: true, walls: { top: false, right: true, bottom: false, left: false } },
      { x: 3, y: 5, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 3, y: 6, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 3, y: 7, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 3, y: 8, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 3, y: 9, visited: true, walls: { top: true, right: true, bottom: true, left: false } },
      { x: 3, y: 10, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 3, y: 11, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 3, y: 12, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 3, y: 13, visited: true, walls: { top: true, right: true, bottom: false, left: true } },
      { x: 3, y: 14, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
    ],
    [
      { x: 4, y: 0, visited: true, walls: { top: true, right: false, bottom: false, left: false } },
      { x: 4, y: 1, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 4, y: 2, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 4, y: 3, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 4, y: 4, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 4, y: 5, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 4, y: 6, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 4, y: 7, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 4, y: 8, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 4, y: 9, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 4, y: 10, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 4, y: 11, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 4, y: 12, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 4, y: 13, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 4, y: 14, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
    ],
    [
      { x: 5, y: 0, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 5, y: 1, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 5, y: 2, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 5, y: 3, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 5, y: 4, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 5, y: 5, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 5, y: 6, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 5, y: 7, visited: true, walls: { top: true, right: true, bottom: true, left: false } },
      { x: 5, y: 8, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 5, y: 9, visited: true, walls: { top: false, right: false, bottom: true, left: false } },
      { x: 5, y: 10, visited: true, walls: { top: true, right: true, bottom: false, left: true } },
      { x: 5, y: 11, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 5, y: 12, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 5, y: 13, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 5, y: 14, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
    ],
    [
      { x: 6, y: 0, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 6, y: 1, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 6, y: 2, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 6, y: 3, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 6, y: 4, visited: true, walls: { top: false, right: false, bottom: false, left: true } },
      { x: 6, y: 5, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 6, y: 6, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 6, y: 7, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 6, y: 8, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 6, y: 9, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 6, y: 10, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 6, y: 11, visited: true, walls: { top: true, right: false, bottom: false, left: false } },
      { x: 6, y: 12, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 6, y: 13, visited: true, walls: { top: true, right: true, bottom: false, left: true } },
      { x: 6, y: 14, visited: true, walls: { top: false, right: false, bottom: true, left: false } },
    ],
    [
      { x: 7, y: 0, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 7, y: 1, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 7, y: 2, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 7, y: 3, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 7, y: 4, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 7, y: 5, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 7, y: 6, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 7, y: 7, visited: true, walls: { top: true, right: true, bottom: true, left: false } },
      { x: 7, y: 8, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 7, y: 9, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 7, y: 10, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 7, y: 11, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 7, y: 12, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 7, y: 13, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 7, y: 14, visited: true, walls: { top: false, right: false, bottom: true, left: false } },
    ],
    [
      { x: 8, y: 0, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 8, y: 1, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 8, y: 2, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 8, y: 3, visited: true, walls: { top: false, right: true, bottom: true, left: true } },
      { x: 8, y: 4, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 8, y: 5, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 8, y: 6, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 8, y: 7, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 8, y: 8, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 8, y: 9, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 8, y: 10, visited: true, walls: { top: false, right: false, bottom: false, left: true } },
      { x: 8, y: 11, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 8, y: 12, visited: true, walls: { top: false, right: true, bottom: true, left: true } },
      { x: 8, y: 13, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 8, y: 14, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
    ],
    [
      { x: 9, y: 0, visited: true, walls: { top: true, right: true, bottom: true, left: false } },
      { x: 9, y: 1, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 9, y: 2, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 9, y: 3, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 9, y: 4, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 9, y: 5, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 9, y: 6, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 9, y: 7, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 9, y: 8, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 9, y: 9, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 9, y: 10, visited: true, walls: { top: true, right: true, bottom: true, left: false } },
      { x: 9, y: 11, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 9, y: 12, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 9, y: 13, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 9, y: 14, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
    ],
    [
      { x: 10, y: 0, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 10, y: 1, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 10, y: 2, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 10, y: 3, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 10, y: 4, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 10, y: 5, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 10, y: 6, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 10, y: 7, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 10, y: 8, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 10, y: 9, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 10, y: 10, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 10, y: 11, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 10, y: 12, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 10, y: 13, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 10, y: 14, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
    ],
    [
      { x: 11, y: 0, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 11, y: 1, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 11, y: 2, visited: true, walls: { top: false, right: false, bottom: true, left: false } },
      { x: 11, y: 3, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 11, y: 4, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 11, y: 5, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 11, y: 6, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 11, y: 7, visited: true, walls: { top: true, right: true, bottom: false, left: true } },
      { x: 11, y: 8, visited: true, walls: { top: false, right: false, bottom: false, left: true } },
      { x: 11, y: 9, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 11, y: 10, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 11, y: 11, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 11, y: 12, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 11, y: 13, visited: true, walls: { top: false, right: false, bottom: false, left: true } },
      { x: 11, y: 14, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
    ],
    [
      { x: 12, y: 0, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 12, y: 1, visited: true, walls: { top: true, right: true, bottom: true, left: false } },
      { x: 12, y: 2, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 12, y: 3, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 12, y: 4, visited: true, walls: { top: false, right: false, bottom: false, left: true } },
      { x: 12, y: 5, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 12, y: 6, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 12, y: 7, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 12, y: 8, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 12, y: 9, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 12, y: 10, visited: true, walls: { top: true, right: true, bottom: true, left: false } },
      { x: 12, y: 11, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 12, y: 12, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 12, y: 13, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
      { x: 12, y: 14, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
    ],
    [
      { x: 13, y: 0, visited: true, walls: { top: true, right: false, bottom: false, left: false } },
      { x: 13, y: 1, visited: true, walls: { top: false, right: false, bottom: true, left: true } },
      { x: 13, y: 2, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 13, y: 3, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 13, y: 4, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 13, y: 5, visited: true, walls: { top: true, right: false, bottom: false, left: true } },
      { x: 13, y: 6, visited: true, walls: { top: false, right: false, bottom: false, left: true } },
      { x: 13, y: 7, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 13, y: 8, visited: true, walls: { top: false, right: true, bottom: true, left: true } },
      { x: 13, y: 9, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 13, y: 10, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 13, y: 11, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 13, y: 12, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 13, y: 13, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 13, y: 14, visited: true, walls: { top: true, right: false, bottom: true, left: false } },
    ],
    [
      { x: 14, y: 0, visited: true, walls: { top: true, right: true, bottom: true, left: false } },
      { x: 14, y: 1, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 14, y: 2, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 14, y: 3, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 14, y: 4, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 14, y: 5, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
      { x: 14, y: 6, visited: true, walls: { top: true, right: true, bottom: false, left: false } },
      { x: 14, y: 7, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 14, y: 8, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 14, y: 9, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 14, y: 10, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 14, y: 11, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 14, y: 12, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 14, y: 13, visited: true, walls: { top: false, right: true, bottom: false, left: true } },
      { x: 14, y: 14, visited: true, walls: { top: false, right: true, bottom: true, left: false } },
    ],
  ], // end input 1
]
