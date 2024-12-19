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

function underline(string) {
  return string + '\n' + replaceWithChar(string, '-')
}

function getMark(isEqual) {
  return isEqual ? "✅" : "❌";
}

function getMessage(string, expectedResult, result) {
  const isEqual = result === expectedResult;
  const mark = getMark(isEqual);

  const segment1 = 'underlined "' + string;
  const segment2 = '"\n is \n"' +  expectedResult;
  const segment3 = '"\n and got \n"' + result + '"'

  return (mark + segment1 + segment2 + segment3);
}

function testUnderline(string, expectedResult) {
  const result = underline(string);

  return getMessage(string, expectedResult, result);
}

function testAll() {
  console.log(testUnderline('aaa', 'aaa\n---'));
  console.log(testUnderline('adhithyan', 'adhithyan\n---------'));
}

testAll();