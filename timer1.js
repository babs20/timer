const args = process.argv.slice(2).sort((a, b) => a - b);
let time = 0;
for (const wait of args) {
  if (wait >= 0 && isNaN(wait) === false) {
    setTimeout(() => {
      process.stdout.write('.\n');
      process.stdout.write('\x07');
    }, (wait * 1000) + time);
    time += (wait * 1000);
  }
}