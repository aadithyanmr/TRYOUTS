//start
function __nthFibonacciTerm(nthTerm, currentTerm, nextTerm) {
  if (nthTerm === 1) {
    return currentTerm;
  }

  return __nthFibonacciTerm(nthTerm - 1, nextTerm, currentTerm + nextTerm);
}

function nthFibonacciTerm(nthTerm) {
  return __nthFibonacciTerm(nthTerm, 0, 1);
}

//main function starts here
function getFibonacciTermsUpto(num) {
  if (num === 0) {
    return '';
  }

  const nthTerm = nthFibonacciTerm(num);
  
  return getFibonacciTermsUpto(num - 1) + nthTerm + ' ';
}
//end

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(nterms, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'fibonacci terms upto ' + nterms ;
  const segment2 = ' is ' + expectedResult;
  const segment3 = ' and got ' + result
  
  return (mark + segment1 + segment2 + segment3);
}

function testGetFibonacciUpto(nterms, expectedResult) {
  const result = getFibonacciTermsUpto(nterms);

  return getMessage(nterms, expectedResult, result);
}

function testAll() {
  console.log(testGetFibonacciUpto(1, '0 '));
  console.log(testGetFibonacciUpto(2, '0 1 '));
  console.log(testGetFibonacciUpto(3, '0 1 1 '));
  console.log(testGetFibonacciUpto(4, '0 1 1 2 '));
  console.log(testGetFibonacciUpto(5, '0 1 1 2 3 '));
  console.log(testGetFibonacciUpto(6, '0 1 1 2 3 5 '));
  console.log(testGetFibonacciUpto(7, '0 1 1 2 3 5 8 '));
}

testAll();
