let clock = []
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  clock = line.split(' ').map(e => Number(e))
  reader.close()

});
reader.on('close', () => {
  solution(clock)
  process.exit();
});

const solution = (clock) => {
  let [hour, minute] = clock
  if (minute >= 45) {
    minute -= 45
  } else if (hour === 0) {
    minute += 15
    hour = 23
  } else {
    hour--
    minute += 15
  }
  console.log(hour, minute);
}