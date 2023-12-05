//@ts-check

let input = require("./input3")

let input2 = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

let arr = input2
  .split("\n")
  .filter((row) => row.length > 0)
  .map((row) => row.split(""))

console.log(arr)

run(arr)

function run(arr) {
  let rows = arr.length
  let cols = arr[0].length
  let res = 0

  arr.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element !== "." && isNaN(element)) {
        console.log("symbol at", i, j)
        let numbersAround = findNumbersAround(arr, i, j)
        res = res + numbersAround.reduce((sum, curr) => sum + curr, 0)
      }
    })
  })

  console.log("res", res)
}

function findNumbersAround(arr, i, j) {
  // console.log('findNumbersAround arr', arr)
  console.log("findNumbersAround", i, j)
  let nearCells = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ]

  let numbers = []

  nearCells.forEach((cell) => {
    i = i + cell[0]
    j = j + cell[1]

    console.log('near check', i, j)

    if (
      i >= 0 &&
      i < arr[0].length &&
      j >= 0 &&
      j < arr.length &&
      !isNaN(arr[i][j])
    ) {
      
      let number = getNumber(arr[i], j)
      console.log("check nearcell", i, j, "-", arr[i][j], "number", number)
      numbers.push(number)
    } 
  })

  console.log("found numbers", numbers)

  return numbers
}

function getNumber (row, index)  {

    let digits = row[index];
    
    let i = index - 1;
    while (i >= 0 && !isNaN(row[i])) {
      digits = row[i] + digits;
      i--;
    }
  
    i = index + 1;
    while (i < row.length && !isNaN(row[i])) {
      digits += row[i];
      i++;
    }
   console.log("Number(digits)", Number(digits))
    return Number(digits);
  }
