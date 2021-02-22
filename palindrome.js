let str = 'racecar'

function checkIfPalidrome(str) {
  if (str == str.split('').reverse().join('')) {
    return true
  } else {
    return false
  }
}

checkIfPalidrome(str)
