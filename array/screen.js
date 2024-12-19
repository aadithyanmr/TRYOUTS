const LENGTH = 10;
const WIDTH = 1;

function getScreen(LENGTH, WIDTH) {
  const screen = [];

  for (let i = 0; i < WIDTH; i++) {
    const row = [];

    for (let j = 0; j < LENGTH; j++) {
      row.push(' ');
    }

    screen.push(row);
  }

  return screen;
}

const screen = getScreen(LENGTH, WIDTH);

function put(char, screen, x, y) {dd
  const actualX = Math.floor(x);
  const actualY = Math.floor(y);

  screen[actualY][actualX] = char;
}

function printScreen(frame) {
  console.log(frame);
}

function getFrame(screen) {
  const frame = [];

  for (let index = 0; index < screen.length; index++) {
    frame.push(screen[index].join(''));
  }

  return frame.join();
}

function clearScreen(screen) {
  for (let i = 0; i < screen.length; i++) {
    for (let j = 0; j < screen[i].length; j++) {
      screen[i][j] = ' ';
    }
  }
}

let frames = '';

for (let index = 0; index < LENGTH; index += .5) {
  put('*', screen, index, 0);
  const frame = getFrame(screen);
  frames += frame;
  // printScreen(frame);
  clearScreen(screen);
}

console.log(frames);