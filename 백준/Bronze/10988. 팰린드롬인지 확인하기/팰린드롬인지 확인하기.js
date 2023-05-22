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

const solution = (str) => {
  const length = str.length
  
  for(let i = 0 ; i < str.length/2 ; i++){
    if(str[i] !== str[length-1-i]) return 0
  }
  
  return 1
}
