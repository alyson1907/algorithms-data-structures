class ArrayHelper {
  static create(length = 0) {
    const array = []
    for (let i = 0; i < length; i++) {
      array.push(i)
    }
    return array
  }

  static shuffle(array) {
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * array.length)
      const aux = array[i]
      array[i] = array[j]
      array[j] = aux
    }
    return array
  }

  static show(array, width, height) {
    function colorByState(stateValue, defaultColor) {
      switch(stateValue) {
        case "PIVOT": return 360
        case "PROCESSING": return 150
        case "FINISHED": return defaultColor
      }
    }
    const Wincr = width / array.length
    const Hincr = height / Math.max(...array)
    colorMode(HSL)
    strokeWeight(Wincr)
    for (let i = 0; i < array.length; i++) {
      stroke(colorByState(state[i], array[i]), 100, 50)
      line(i * Wincr, height, i * Wincr, height - (array[i] * Hincr))
    }

  }
}
