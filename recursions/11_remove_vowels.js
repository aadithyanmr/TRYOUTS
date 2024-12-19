//start
function removeVowels(string) {
  if 
}

//testing starts here
function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(string, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = string + ' when vowels are removed';
  const segment2 = '" is "' +  expectedResult;
  const segment3 = '" and got "' + result + '"'

  return (mark + segment1 + segment2 + segment3);
}

function testUnderline(string, expectedResult) {
  const result = removeVowels(string);

  return getMessage(string, expectedResult, result);
}

function testAll() {
  console.log(testUnderline('aaa', ''));
  // console.log(testUnderline('adhithyan', 'dhthyn'));
}

testAll();