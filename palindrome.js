let str = 'Racecar'

function checkIfPalidrome(str) {
  if (str.toLowerCase() == str.split('').reverse().join('').toLowerCase()) {
    return true
  } else {
    return false
  }
}

checkIfPalidrome(str)

// Ternary Version

let str = 'RaceCar'

function checkIfPalidrome(str) {
  return str.toLowerCase() == str.split('').reverse().join('').toLowerCase()
}

checkIfPalidrome(str)
