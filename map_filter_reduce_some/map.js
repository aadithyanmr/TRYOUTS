const inclusiveRange = function (from, to, step) {
  const array = [];

  for (let start = from; start <= to; start += step) {
    array.push(start);
  }

  return array;
}

const isEven = function (number) {
  return (number & 1) === 0;
}

const sum = function (num1, num2) {
  return num1 + num2;
}

const twoIncludes = function (element) {
  return element === 2;
}


const isPrime = function (number) {
  if (number < 2) {
    return false;
  }

  const divisors = inclusiveRange(2, number / 2, 1);
  const isDivisible = function (element) {
    return number % element === 0;
  }

  return !divisors.some(isDivisible);
}

const theThing = function (array) {
  return array.filter(isEven).filter(isPrime).reduce(sum, 0)
}

// const array = [1, 2, 3, 4, 5,];

const someFn = function (init, element) {
  init.push(init.length + 1);
  return init;
}
const array = Array(7).fill(1);
const enthelum = array.reduce(someFn, [])

