const multiply = function (x) {
  return function (y) {
    return x * y;
  }
};

const incrementBy = function (step) {
  return function (value) {
    return value + step;
  }
};

const counter = function (start) {
  let count = start || 0;

  return function (increment) {
    return count += increment;
  }
};

const addThree = function (num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
};

const repeat = function (char) {
  return function (times) {
    return char.repeat(times);
  }
}

const cycle = function (itemsList) {
  let index = -1;
  return function () {
    index = (index + 1) % itemsList.length;

    return itemsList[index];
  }
}

const isElementPresent = function (string) {
  return function (element) {
    return string.includes(element);
  }
}

const isElementPresents = function (element) {
  return function (string) {
    return string.includes(element);
  }
}

const numbers = [1,2,3,4,5,6,7,8,9];

const chars = ['!', '@', '#', '%', '^', '&', '*'];

const something = numbers.map(function (num) { return chars.map(repeat).map(function (f) { return f(num)})});