const squarePatterns = function (number) {
  const size = (number * 2) - 1;
  const pattern = [];

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < number; k++) {
        const first = size - k - 1;
        const second = k;

        if (first === i || first === j || second === i || second === j) {
          pattern.push(number - k);
        }
      }
    }
  }

  
};