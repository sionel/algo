process.stdin.resume();
process.stdin.setEncoding('utf8');

let data = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  data.push(line);
  reader.close();
});
reader.on('close', () => {
  console.log(solution(...data));
  
  process.exit();
});

const solution = (num) => {
  return num.split('').sort((a,b)=>b-a).join('')
}