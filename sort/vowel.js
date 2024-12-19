const vowelSort = function (a, b) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];

  if (vowel.includes(a) && vowel.includes(b)) {
    return 0;
  }

  if (vowel.includes(a)) {
    return -1;
  }

  return 1;
};

const vowelsToLeft = function (string) {
  const stringArray = string.split('');

  return stringArray.sort(vowelSort);
};

const sorted = vowelsToLeft('abcdefghijklmnopqrstuvwxyz');

console.log(sorted);