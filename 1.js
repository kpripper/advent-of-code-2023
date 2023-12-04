//@ts-check

let input = require("./input1")

let rows = input.split("\n")

let res = 0

function calc(row) {
  let wordsToNumbers = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
  }

  let keys = Object.keys(wordsToNumbers)
  let matches = []

  //finds occurrences in a string that overlap each other 
  for (let i = 0; i < row.length; i++) {
    for (let key of keys) {
      if (row.substring(i).startsWith(key)) {
        matches.push(key)
      }
    }
  }

  res =
    res +
    +(wordsToNumbers[matches[0]] + wordsToNumbers[matches[matches.length - 1]])
}

for (let row of rows) {
  if (row.trim() !== "") {
    calc(row)
  }
}

console.log(res)
