// [5,1,4,2,3]
// [1,2,3,4,5]
function copyArray(array) {
  const copy = [];

  for (let index = 0; index < array.length; index++) {
    copy[index] = array[index];
  }

  return copy;
}

function findSmallesNew(array) {
  let smallestIndex = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] < array[smallestIndex]) {
      smallestIndex = index;
    }
  }

  return smallestIndex;
}

function removeByIndex(array, targetIndex) {
  let removedArray = [];

  for (let index = 0; index < array.length; index++) {
    if (index !== targetIndex) {
      removedArray.push(array[index]);
    }
  }

  return removedArray;
}

function sortArray(array) {
  const sortedArray = [];
  let copy = copyArray(array);

  for (let index = 0; index < array.length; index++) {
    const smallestIndex = findSmallesNew(copy);
    sortedArray.push(copy[smallestIndex]);
    copy = removeByIndex(copy, smallestIndex);
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