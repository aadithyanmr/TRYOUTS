let path = '';
let pathEnd = '';
let command = 'adhithyans-MacBook-Pro😅';
let promptMessage = command;
const files = [];

const cd = function (args) {
  path += args;
  pathEnd = path.split('/').at(-1);

  promptMessage = command + ' ' + pathEnd + '%';
};

const createFile = function (fileName) {
  files.push(fileName);
};

const runCommand = function (command, args) {
  switch (command) {
    case 'echo': return args.join(' ');
    case 'cd': return cd(args);
    case 'pwd': return path;
    case 'touch': return createFile(args.join(''));
    case 'ls': return files.join('          ');
    default: return 'zsh: command not found:' + args;
  }
};

while (true) {
  const input = prompt(promptMessage);
  const [command, ...args] = input.split(' ');
  const result = runCommand(command, args);

  if (result !== undefined) {
    console.log(result);
  }
}