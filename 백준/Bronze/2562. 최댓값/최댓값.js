let count = 0
let nums = []
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  nums.push(Number(line))
  if(++count === 9)  reader.close()

});
reader.on('close', () => {
  solution(nums)
  process.exit();
});

const solution = (nums) => {
  const max = Math.max(...nums)
  console.log(max);
  console.log(nums.indexOf(max)+1 );
}