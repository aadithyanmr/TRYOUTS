const stringArray = ['favas', 'sujoy', 'aadi', 'aboo', 'akshay', 'krishna'];
const numbers = [12, 3, 5, 45, 100, 89, 67, 49, 34, 99];
// stringArray.sort();

const person = 'aadithyan';
const splitted = person.split('');

const random = function () {
  return Math.random() - 0.5;
};

// splitted.sort(random).join('');

const sortNumber = function (a, b) {
  return a - b;
};

const something = function (a, b) {
  if (a < b) {
    return -1;
  }

  if (a === b) {
    return 0;
  }

  return 1;
};

const sortStrings = function (array) {
  return array.sort(something);
};

// sortStrings(stringArray);

const seperateOddToLeft = function (a, b) {
  if ((a & 1) === (b & 1)) {
    return a - b;
  }

  return (a & 1) === 1 ? -1 : 1;
};

const oddsToOneSide = function (numberArray) {
  return numberArray.sort(seperateOddToLeft);
};

// oddsToOneSide(numbers);

const sortNumberOnStart = function (a, b) {
  return a[0] - b[0];
};

const sortArray = function (array) {
  return array.sort(sortNumber);
};

const sortArrays = function (array) {
  return array.map(sortArray);
};

// sortArrays([[1], [2, 5], [6, 3, 5, 1]]);
// sortArrays([[1], [2, 5], [6, 3, 5, 1]]).sort(sortNumberOnStart);

const asciiChar = function (asciiIndex) {
  return String.fromCharCode(asciiIndex);
};

const charsFromAsciiValues = function (from, size) {
  return Array.from({ length: size }, function (_, i) { return i + from; }).map(asciiChar);
};

// charsFromAsciiValues(67, 10);