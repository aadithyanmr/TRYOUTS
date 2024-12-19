function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

//testing starts here
const testCases = [
  ['MARK','ARRAY', 'ELEMENT', 'EXPECTED', 'RESULT'],
  [[1, 2, 3], 2, 1],
  [[1, 2, 3, 4, 5, 6], 3, 2],
  [[1], 2, -1],
  [[1], 1, 0],
  [[], 1, -1],
  [[1, 2], 1, 0]
];

const seperator = '          ';
const spacesBetween = '       ';

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function printHeading(headingElements) {
  console.log(headingElements.join(spacesBetween));
}

function printMessage(array, element, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);
  const message = [mark, array, element, expectedResult, result];

  console.log(message.join(seperator) + '\n');
}

function testFindIndex(array, element, expectedResult) {
  const result = findIndex(array, element);
  
  return printMessage(array, element, expectedResult, result);
}

function testAll(testCases) {
  const headingElements = testCases[0];
  printHeading(headingElements);
  
  for (let index = 1; index < testCases.length; index++) {
    const testCase = testCases[index];

    const input1 = testCase[0];
    const input2 = testCase[1];
    const expected = testCase[2];

    testFindIndex(input1, input2, expected);
  }
}

testAll(testCases);