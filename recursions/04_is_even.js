//start
function isEven(num) {
  if (num === 1) {
   return false;
  }
  
  if (num === 0) {
    return true;
  }

  return isEven(num - 2);
}
//end

// start
// function isEven(num) {
//    return num < 2 ? num === 0 : isEven(num - 2);
//   }
//end

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(num, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = ' Is ' + num + ' even';
  const segment2 = ' should be ' + expectedResult;
  const segment3 = ' and got ' + result
  
  return (mark + segment1 + segment2 + segment3);
}

function testIsEven(num, expectedResult) {
  const result = isEven(num);

  return getMessage(num, expectedResult, result);
}

function testAll() {
  console.log(testIsEven(0, true));
  console.log(testIsEven(1, false));
  console.log(testIsEven(2, true));
  console.log(testIsEven(3, false));
  console.log(testIsEven(4, true));
  console.log(testIsEven(5, false));
  console.log(testIsEven(6, true));
}

testAll();
