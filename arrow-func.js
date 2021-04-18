const double = arr => arr.map(val => val * 2)
// console.log(double([1,2,3]))

const squareAndFindEvens = numbers => {
    const squares = numbers.map(num=>num ** 2)
    const evens = squares.filter(square => square % 2 === 0)
    return evens;
  }

// console.log(squareAndFindEvens([1,2,3,4,5,6,7,8]))





