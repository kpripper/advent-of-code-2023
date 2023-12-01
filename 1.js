//@ts-check

let input = require("./input1")

let rows = input.split("\n")

let res = 0

for (const row of rows) {
  let firstNumber = ""
  let lastNumber = ""

  for (let char of row) {
    if (!isNaN(+char)) {
      firstNumber = char
      break
    }
  }

  for (let i = row.length - 1; i >= 0; i--) {
    if (!isNaN(+row[i])) {
      lastNumber = row[i]
      break
    }
  }
  
  res = res + +(firstNumber + lastNumber)
}

console.log(res)
