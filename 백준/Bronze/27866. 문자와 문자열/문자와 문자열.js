let line1 = ''
let num = ''
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  if(!line1){
    line1 = line
  }
  else {
    num = +line
    reader.close()
  }
});
reader.on('close', () => {
  solution(line1 ,num)
  process.exit();
});

const solution = (line1 , num) => {
  console.log(line1[num-1])
}