//@ts-check

let input = require("./input1")

let input2 = `eighttwo257djtdp5two`

let rows = input.split("\n")

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

  let wordIndexes = {}

  for (let word in wordsToNumbers) {
    if (row.includes(word)) {
      let startIndex = row.indexOf(word)
      wordIndexes[word] = startIndex
    }
  }

  let indexedWords = Object.entries(wordIndexes) //[ [ 'two', 4 ], [ 'three', 7 ], [ 'eight', 0 ] ]

  indexedWords.sort((a, b) => a[1] - b[1])

  let sortedKeys = indexedWords.map((entry) => entry[0]) // ['eight', 'two', 'three']

  row = row.replace(sortedKeys[0], wordsToNumbers[sortedKeys[0]])

  row = row.replaceAll(
    sortedKeys[sortedKeys.length - 1],
    wordsToNumbers[sortedKeys[sortedKeys.length - 1]]
  )

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

  res = res + +(firstNumber + lastNumber)
}

console.log(res)
