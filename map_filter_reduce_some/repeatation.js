const pushIfNotPresent = function (array, element) {

  if (!array.includes(element)) {
    array.push(element);
  }

  return array;
};

const counter = function (target) {
  return function (count, element) {
    if (target === element) {
      return count + 1;
    }

    return count;
  }
};

const addOccurences = function (array) {
  return function (target) {
    return [target, array.reduce(counter(target), 0)];
  }
};

const removeDuplicates = function (numbers) {
  return numbers.reduce(pushIfNotPresent, []);
};

const repeatation = function (array) {
  const noDuplicates = removeDuplicates(array);
  const frequency = noDuplicates.map(addOccurences(array));// 1,2,3

  return frequency;
};

console.log(repeatation([1, 2, 3, 3]));