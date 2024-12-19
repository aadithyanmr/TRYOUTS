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
  };
};

const addOccurences = function (array) {
  return function (target) {
    const occurence = array.reduce(counter(target), 0);

    return [target, occurence];
  };
};

const removeDuplicates = function (numbers) {
  return numbers.reduce(pushIfNotPresent, []);
};

const repeatation = function (array) {
  const uniqueElements = removeDuplicates(array);
  const frequency = uniqueElements.map(addOccurences(array));// 1,2,3

  return frequency;
};

const sortNumberOnStart = function (a, b) {
  if (a[0] < b[0]) {
    return -1
   }

   if (a[0] === b[0]) {
    return 0;
   }
};


const charFrequency = function (string) {
  const stringInArray = string.split('');

  return repeatation(stringInArray).sort(sortNumberOnStart);
}

const something = charFrequency('So, the boy gathered the berries in a sack and kept walking. As he was turning back home, he saw a snake dropping from a tree.Look, my family is falling down just to meet me. So, he picked up the snake and put it in a satchel. The young man almost made it home when he stumbled across a wild piglet sniffing around a patch of trees.My family will not even allow me to walk by them without making sure that I notice them and take them with me.So he tied up the piglet to a tree next to his home and went inside for bed.')

console.log(something);