// utils

// random unique (history + steps to remember)
// distance
// radtodeg
// degtorad
// color to hsl
// hsl to color

// threejs specific
// load .obj and create mesh
// visible area (raycasted)


// random element from array
function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)]
}

// random number between min and max
//
// Randomly pick a number between min and max.
// When max wasn't given, the range automatically start from 0 to max,
// so randomInt(5) returns a random number between 0 and 5
function randomBetween(min, max) {
  if(!max) {
    max = min
    min = 0
  }
  return Math.random() * (max - min) + min
}

// random integer between min (included) and max (included)
//
// Randomly pick an integer between min and max.
// When max wasn't given, the range automatically start from 0 to max,
// so randomInt(5) returns a random integer between 0 and 5
function randomInt(min, max) {
  if(!max) {
    max = min
    min = 0
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// random yes/no (true/false)
function randomBool() {
  return Math.random() < 0.5
}

// random from two given options
function randomSwitch(one, two) {
  if(!one || !two) throw "Can't randomly choose a value, at least one of them were invalid."
  return randomBool() ? one : two
}

// check if parameter was given, when not, return the default
function defaultParameter(parameter, defaultValue) {
  return !parameter || parameter === undefined || parameter === null ? defaultValue : parameter
}

// normalized cursor (centered)
//
// Keep the cursor between -1 and 1 in both the x and y axes
// When the cursor is Top Left of the screen the returned value is -1, -1
// When the cursor is in the Center of the screen, the returned value is 0, 0
// When the cursor is Bottom Right of the screen, the returned value is 1, 1
//
// Optionally, give width and height if you don't want the function to use the window inner width/height
function normalizeMouse(event, width, height) { normalizeCursor(event, width, height) }
function normalizePointer(event, width, height) { normalizeCursor(event, width, height) }
function normalizeCursor(event, width, height) {
  if(!event) throw "Couldn't normalize cursor, event was undefined"
  return {
    x: (event.clientX / defaultParameter(width, window.innerWidth)) * 2 - 1,
    y: (event.clientY / defaultParameter(height, window.innerHeight)) * 2 - 1
  }
}

// clamp the cursor (top left)
//
// Keep the cursor between 0 and 1 in both the x and y axes
// When the cursor is Top Left of the screen the returned value is 0, 0
// When the cursor is Bottom Right of the screen, the returned value is 1, 1
//
// Optionally, give width and height if you don't want the function to use the window inner width/height
function clampMouse(event, width, height) { clampCursor(event, width, height) }
function clampPointer(event, width, height) { clampCursor(event, width, height) }
function clampCursor(event, width, height) {
  if(!event) throw "Couldn't clamp cursor, event was undefined"
  return {
    x: (event.clientX / defaultParameter(width, window.innerWidth)),
    y: (event.clientY / defaultParameter(height, window.innerHeight))
  }
}

// remap
//
// Given a value and an input range, map the value to an output range.
// Linearly maps the given value to a new value given an input and output
// range.  Thus if value is 50% of the way between inputMin and inputMax, then
// output value will be 50% of the way between outputMin and outputMax.
function remap(value, inputMin, inputMax, outputMin, outputMax) {
  return Math.abs(inputMin - inputMax) !== 0 ?
    ((value - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin) : outputMin
}

// clamp
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}