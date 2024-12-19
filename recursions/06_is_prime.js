//start
function isDivisible(divident, divisor) {
  return divident % divisor === 0;
}

function isDivisibleByAnyInRange(number, from, to) {
  if (from === to) {
    return false;
  }

  if (isDivisible(number, from)) {
    return true;
  }

  return isDivisibleByAnyInRange(number, from + 1, to)
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  return isDivisibleByAnyInRange(number, 2, number - 1);
}
//end

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(number, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = number;
  const segment2 = ' is a prime ? "' + expectedResult;
  const segment3 = '" and got ' + result + '"'

  return (mark + segment1 + segment2 + segment3);
}

function testIsPrime(number, expectedResult) {
  const result = isPrime(number);

  return getMessage(number, expectedResult, result);
}

function testAll() {
  console.log(testIsPrime(0, false));
  console.log(testIsPrime(1, false));
  console.log(testIsPrime(2, true));
}

testAll();
