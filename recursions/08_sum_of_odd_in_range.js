//start
function isDivisible(divident, divisor) {
  return divident % divisor === 0;
}

function isEven(number) {
  return isDivisible(number, 2);
}

function __sumOfOddInRange(from, to) {
  if (from > to) {
    return 0;
  }

  return to + __sumOfOddInRange(from, to - 2);
}

function sumOfOddInRange(from, to) {
  const lastOddInRange = isEven(to) ? to - 1 : to;

  return __sumOfOddInRange(from, lastOddInRange);
}
//end

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(from, to, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'sum of odd numbers from "' + from + '" to "' + to;
  const segment2 = '" is "' + expectedResult;
  const segment3 = '" and got "' + result + '"'

  return (mark + segment1 + segment2 + segment3);
}

function testSumOfEvenInRange(from, to, expectedResult) {
  const result = sumOfOddInRange(from, to);

  return getMessage(from, to, expectedResult, result);
}

function testAll() {
  console.log(testSumOfEvenInRange(0, 3, 4));
  console.log(testSumOfEvenInRange(2, 3, 3));
  console.log(testSumOfEvenInRange(2, 5, 8));
  console.log(testSumOfEvenInRange(2, 7, 15));
  console.log(testSumOfEvenInRange(10, 15, 39));
  console.log(testSumOfEvenInRange(10, 16, 39));
  console.log(testSumOfEvenInRange(10, 10, 0));
  console.log(testSumOfEvenInRange(1, 2, 1));
  console.log(testSumOfEvenInRange(12, 10, 0));
  console.log(testSumOfEvenInRange(9, 11, 20));
  console.log(testSumOfEvenInRange(7, 11, 27));
}

testAll();