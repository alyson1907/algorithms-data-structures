
const width = 1000
const height = 800
let shuffled

/* eslint-disable-next-line */
function setup() {
  createCanvas(width, height)
  background(155)
  const array = ArrayHelper.create(360)
  shuffled = ArrayHelper.shuffle(array)
  frameRate(2)
  
}

/* eslint-disable-next-line */
function draw() {
  ArrayHelper.show(ArrayHelper.create(360), width, height)
}
