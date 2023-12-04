//@ts-check

let input = require("./input2")

let input2 = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

function calcLimits(input) {
  let res = 0
  let power = 0
  let games = input.split("\n")

  let limits = {
    red: 12,
    green: 13,
    blue: 14,
  }

  let maxNumber = {
    red: 0,
    green: 0,
    blue: 0,
  }

  games.forEach((game, index) => {
    let colorCounts = game.match(/(\d+)\s+(\w+)/g)
    let posibleGame = true

    colorCounts.forEach((countAndColor) => {
      let [count, color] = countAndColor.split(/\s+/)
      count = parseInt(count)

      if (count > limits[color]) {
        posibleGame = false
      }

      if (count > maxNumber[color]) {
        maxNumber[color] = count
      }
    })

    if (posibleGame) {
      res = res + (index + 1)
    }

    power = power + maxNumber["red"] * maxNumber["blue"] * maxNumber["green"]

    maxNumber = {
      red: 0,
      green: 0,
      blue: 0,
    }
  })

  console.log("res", res)
  console.log("power", power)
}

calcLimits(input)
