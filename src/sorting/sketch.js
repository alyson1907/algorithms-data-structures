/**
 * PIVOT -> element is a pivot
 * PROCESSING -> element is currently being processed
 * FINISHED -> finished
 */
const state = []

const width = 1000
const height = 800
let shuffled

/* eslint-disable-next-line */
function setup() {
  createCanvas(width, height)
  background(155)
  const array = ArrayHelper.create(360)
  shuffled = ArrayHelper.shuffle(array)
  frameRate(60)
  quickSort(shuffled, 0, shuffled.length - 1)
}

/* eslint-disable-next-line */
function draw() {
  clear()
  ArrayHelper.show(shuffled, width, height)
}
