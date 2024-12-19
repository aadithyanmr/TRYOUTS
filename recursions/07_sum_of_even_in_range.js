//start
function isDivisible(divident, divisor) {
  return divident % divisor === 0;
}

function isEven(number) {
  return isDivisible(number, 2);
}

function __sumOfEvenInRange(from, to) {
  if (from > to) {
    return 0;
  }

  return to + __sumOfEvenInRange(from, to - 2);
}

function sumOfEvenInRange(from, to) {
  const lastEvenInRange = isEven(to) ? to : to - 1;

  return __sumOfEvenInRange(from, lastEvenInRange);
}
//end

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(from, to, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'sum of even numbers from "' + from + '" to "' + to;
  const segment2 = '" is "' + expectedResult;
  const segment3 = '" and got "' + result + '"'

  return (mark + segment1 + segment2 + segment3);
}

function testSumOfEvenInRange(from, to, expectedResult) {
  const result = sumOfEvenInRange(from, to);

  return getMessage(from, to, expectedResult, result);
}

function testAll() {
  console.log(testSumOfEvenInRange(0, 3, 2));
  console.log(testSumOfEvenInRange(2, 3, 2));
  console.log(testSumOfEvenInRange(2, 5, 6));
  console.log(testSumOfEvenInRange(2, 5, 6));
  console.log(testSumOfEvenInRange(10, 15, 36));
  console.log(testSumOfEvenInRange(10, 16, 52));
  console.log(testSumOfEvenInRange(10, 10, 10));
  console.log(testSumOfEvenInRange(12, 10, 0));
  console.log(testSumOfEvenInRange(9, 11, 10));
  console.log(testSumOfEvenInRange(7, 11, 18));
}

testAll();