const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer = function (time) {
  setTimeout(() => {
    process.stdout.write('.\n');
    process.stdout.write('\x07');
  }, (time * 1000));
};

stdin.on('data', (key) => {
  const validNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (key === 'b') {
    process.stdout.write('.');
  }

  if (validNum.includes(key)) {
    console.log(`Setting timer for ${key} seconds...`);
    timer(Number(key));
  }

  if (key === `\u0003`) {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }
});
