let count = null
let lines = []
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  if(count === null) count = Number(line)
  else {
    lines.push(line.split(' ').map(e=>Number(e)))
    if(--count === 0) reader.close()
  }
});
reader.on('close', () => {
  solution(lines)
  process.exit();
});

const solution = (numArr) => {
  while(numArr.length){
    const [h , w , n] = numArr.shift()
    const [floor ,room ] = [n%h || h , Math.ceil(n/h)]
    console.log(`${floor}${String(room).padStart(2,'0')}`);
  }
}