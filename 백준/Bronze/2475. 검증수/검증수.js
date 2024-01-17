
let nums = []
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  nums = line.split(' ').map(e=>Number(e))
  reader.close()

});
reader.on('close', () => {
  solution(nums)
  process.exit();
});

const solution = (nums) => {
  console.log(nums.reduce((sum,cur)=>(sum+cur**2)%10, 0) );
}