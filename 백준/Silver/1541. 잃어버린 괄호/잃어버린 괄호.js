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
  const minus = str.split('-')
  let calc = 0
  minus.forEach((plus,i) => {
    let plusArr = plus.split('+')
    let sum = plusArr.reduce((sum,cur)=>sum+Number(cur),0)
    calc = i === 0 ? sum : calc-sum
  });
  return calc
}
