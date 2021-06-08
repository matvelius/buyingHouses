let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let lineIndex = 0

let numberOfHousesToConsider = 0
let budget = 0
let housePrices = []


rl.on('line', function (line) {

  if (lineIndex == 0) {

    let input = line.split(' ')
    numberOfHousesToConsider = parseInt(input[0])
    budget = parseInt(input[1])

    if (numberOfHousesToConsider < 1 || budget < 1) {
      rl.close()
      console.log(0)
      return
    }

  } else {

    let inputHousePrices = line.split(' ').map(el => parseInt(el))

    rl.close()

    for (let i = 0; i < inputHousePrices.length; i++) {
      const price = inputHousePrices[i]
      if (price <= budget) {
        housePrices.push(price)
      }
    }

    housePrices.sort(function (a, b) { return a - b })

    calculateNumberOfHousesToBuy()

    return

  }

  lineIndex += 1

})

function calculateNumberOfHousesToBuy() {

  let index = 0
  let numberOfHousesToBuy = 0

  if (housePrices == [] || housePrices[0] > budget) {
    console.log(0)
    return
  }

  while (budget - housePrices[index] >= 0) {
    budget = budget - housePrices[index]
    index++
    numberOfHousesToBuy++
  }

  console.log(numberOfHousesToBuy)

}