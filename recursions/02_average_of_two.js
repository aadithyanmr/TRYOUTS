//start
// function max(num1, num2) {
//   return num1 > num2 ? num1 : num2;
// }

// function min(num1, num2) {
//   return num1 < num2 ? num1 : num2;
// }

// function __average(largeNumber, smallNumber) {
//   if (largeNumber === smallNumber) {
//     return largeNumber;
//   }

//   return __average(largeNumber - .5, smallNumber + .5);
// }

// function average(num1, num2) {
//   const largeNumber = max(num1, num2);
//   const smallNumber = min(num1, num2);

//   return __average(largeNumber, smallNumber);
// }
// end

//start
function __average(largeNumber, smallNumber) {
  if (largeNumber === smallNumber) {
    return largeNumber;
  }

  return average(largeNumber - .5, smallNumber + .5);
}

function average(num1, num2) {
  if (num1 < num2) {
    return __average(num2, num1);
  }

  return __average(num1, num2);
}
//end

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(number1, number2, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'The average of ' + number1 + ' and ' + number2;
  const segment2 = ' is ' + expectedResult;
  const segment3 = ' and got ' + result
  
  return (mark + segment1 + segment2 + segment3);
}

function testAverage(number1, number2, expectedResult) {
  const result = average(number1, number2);
  return getMessage(number1, number2, expectedResult, result);
}

function testAll() {
  console.log(testAverage(1, 1, 1));
  console.log(testAverage(2, 1, 1.5));
  console.log(testAverage(3, 1, 2));
  console.log(testAverage(0, 1, .5));
  console.log(testAverage(10, 20, 15));
  console.log(testAverage(11, 20, 15.5));
}

testAll();