/**
 * PIVOT -> element is a pivot
 * PROCESSING -> element is currently being processed
 * FINISHED -> finished
 */
const state = []
let shuffled

// Configs
const config = {
  width: 1100,
  height: 600,
  elements: 360,
  showPartitions: false,
}

/* eslint-disable-next-line */
function setup() {
  createCanvas(config.width, config.height)
  background(155)
  const array = ArrayHelper.create(config.elements)
  shuffled = ArrayHelper.shuffle(array)
  frameRate(60)
  quickSort(shuffled, 0, shuffled.length - 1)
}

/* eslint-disable-next-line */
function draw() {
  clear()
  ArrayHelper.show(shuffled, config.width, config.height)
}
