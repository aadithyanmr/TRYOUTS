const people = ['aadi', 'favas', 'aboo', 'akshay', 'sujoy', 'shrutika'];
const fruits = ['banana', 'apple', 'orange', 'lemon'];
const numbers = [1,2,3,4,5,6];
const cycle = function (array) {
  let index = -1;
  
  return function (element) {
    index = (index + 1) % array.length;
    
    return element + ' ' + array[index];
  }
}

const distribute = numbers.map(cycle(people)).map(cycle(fruits));