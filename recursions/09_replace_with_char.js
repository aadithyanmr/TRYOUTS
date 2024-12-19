// start
const EMPTY = '';

function trimString(string, from, to) {
  if (from > to) {
    return EMPTY;
  }

  return string[from] + trimString(string, from + 1, to);
}

function replaceWithChar(string, char) {
  if(string.length === 1) {
    return char;
  }
  const remainingString = trimString(string, 1, string.length -1);

  return char + replaceWithChar(remainingString, char)
}

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(string, char, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'all characters of "' + string + '" replaced by "' + char;
  const segment2 = '" is "' + expectedResult;
  const segment3 = '" and got "' + result + '"'

  return (mark + segment1 + segment2 + segment3);
}

function testReplaceWithChar(string, char, expectedResult) {
  const result = replaceWithChar(string, char);

  return getMessage(string, char, expectedResult, result);
}

function testAll() {
  console.log(testReplaceWithChar('aaa', 'b', 'bbb'));
  console.log(testReplaceWithChar('aaa', '-', '---'));
  console.log(testReplaceWithChar('aaa', '*', '***'));
}

testAll();