//start
const EMPTY = '';

function trimString(string, from, to) {
  if (from > to) {
    return EMPTY;
  }

  return string[from] + trimString(string, from + 1, to);
}

function reverseOfString(string) {
  if (string === EMPTY) {
    return string;
  }

  const endIndex = string.length - 1;
  const remainingString = trimString(string, 1, endIndex);

  return reverseOfString(remainingString) + string[0];
}
//end

// function reverseOfNumber(number) {
//   return +reverseOfString(number + "");
// }

// testing
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(string, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = ' reverse of "' + string;
  const segment2 = '" should be "' + expectedResult;
  const segment3 = '" and got "' + result + '"';

  return (mark + segment1 + segment2 + segment3);
}

function testReverseOfString(string, expectedResult) {
  const result = reverseOfString(string);

  return getMessage(string, expectedResult, result);
}

function testAll() {
  console.log(testReverseOfString('the', 'eht'));
  console.log(testReverseOfString('reverse', 'esrever'));
  console.log(testReverseOfString('abcd', 'dcba'));
  console.log(testReverseOfString('12345678', '87654321'));
  console.log(testReverseOfString('', ''));
}

testAll();
