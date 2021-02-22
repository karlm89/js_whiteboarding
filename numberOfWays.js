function numberOfWays(arr, k) {
  let counter = 0
  for (let i = 0; i < arr.length; i++)
    arr.forEach((num) => {
      console.log(`${num} + ${arr[i]} = ${num + arr[i]}`)
      console.log(num)
      if (num + arr[i] == k) {
        counter++
      }
    })
  return counter
}

var k_2 = 6
var arr_2 = [1, 5, 3, 3, 3]
numberOfWays(arr_2, k_2)
