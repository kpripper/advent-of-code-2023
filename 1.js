//@ts-check

let input = require("./input1")

let input2 = `
383nineeight9eightjfdhmjfrj

`

let rows = input2.split("\n")

let res = 0

function replaceWords(row) {
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
  }

  console.log("row", row)
  //   let regex = new RegExp(Object.keys(wordsToNumbers).join("|"), "g")
  //   let matches = row.match(regex)
  //   if (matches) {
  //   console.log(`Слово  знайдено ${matches} `)
  //     let firstWord = matches[0]
  //     let lastWord = matches[matches.length - 1]

  //     row = row.replace(firstWord, wordsToNumbers[firstWord])
  //     row = row.replace(lastWord, wordsToNumbers[lastWord])
  //   } else {
  //  //   console.log(`Слово не знайдено у ${row}`)
  //   }

  let keys = Object.keys(wordsToNumbers)
  let matches = []

  for (let i = 0; i < row.length; i++) {
    for (let key of keys) {
      if (row.substring(i).startsWith(key)) {
        matches.push(key)
      }
    }
  }

  console.log(matches)

  let firstWord = matches[0]
  let lastWord = matches[matches.length - 1]

  row = row.replace(firstWord, wordsToNumbers[firstWord])
  row = row.replace(lastWord, wordsToNumbers[lastWord])

  console.log("row", row)
  return row
}

for (let rowInit of rows) {
  let row = replaceWords(rowInit)

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
  console.log(firstNumber, lastNumber)
  res = res + +(firstNumber + lastNumber)
}

console.log(res)
