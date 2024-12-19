// [1, 2, 3, 4, 5, 6], 3 => [1, 2, 3, 6, 5, 4];
//is greater than 3 and is small then go right (1)
//is smaller than 3 and small then simply go to left (-1)

const seperateBySomething = function (value) {
  return function (a, b) {

  };
};

const seperate = function (array, value) {
  return array.sort(seperateBySomething(value));
};

console.log(seperate([1, 2, 7, 3, 8, 1, 6, 3], 3));