function copyArray(array) {
  const copy = [];

  for (let index = 0; index < array.length; index++) {
    copy[index] = array[index];
  }

  return copy;
}

function removeElementAtIndex(array, removeIndex) {
  let removedArray = [];

  for (let index = 0; index < array.length; index++) {
    if (index != removeIndex) {
      removedArray.push(array[index]);
    }
  }

  return removedArray;
}

function getSmallestValueIndex(array) {
  let smallestValueIndex = 0;

  for (let index = 1; index < array.length; index++) {
    if (array[index] < array[smallestValueIndex]) {
      smallestValueIndex = index;
    }
  }

  return smallestValueIndex;
}

//main funcion
function sortArray(array) {
  const copyOfArray = copyArray(array);
  const sortedArray = [];

  while (array.length > 0) {
    const smallestValueIndex = getSmallestValueIndex(array);
    sortedArray.push(copyOfArray[smallestValueIndex]);
    copyOfArray = removeElementAtIndex(copyOfArray, smallestValueIndex);
  }

  return sortedArray;
}

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function printMessage(array, expectedResult, result) {
  const isEqual = areEqual(result, expectedResult);
  const mark = getMark(isEqual);

  const segment1 = 'The sorted array of  "' + array + '" in increasing order';
  const segment2 = '" is "' + expectedResult + '"';
  const segment3 = ' and got "' + result + '"';

  console.log(mark + segment1 + segment2 + segment3);
}

function testFilterAbove(array, expectedResult) {
  const result = sortArray(array);

  return printMessage(array, expectedResult, result);
}

function testAll() {
  testFilterAbove([2, 1, 3], [1, 2, 3]);
  testFilterAbove([2, 1, 3, 10], [1, 2, 3, 10]);
  testFilterAbove([20, 2, 1, 3, 10], [1, 2, 3, 10, 20]);
  testFilterAbove([10, 25, 93, 673], [10, 25, 93, 673]);
  testFilterAbove([10, 673, 25, 93, 673], [10, 25, 93, 673, 673]);
}

testAll();