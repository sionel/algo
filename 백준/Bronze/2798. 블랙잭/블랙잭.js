let count = 0
let target = 0
let nums = []
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  if (!count) [count, target] = line.split(' ').map(e => Number(e))
  else {
    nums = line.split(' ').map(e => Number(e))
    reader.close()
  }
});
reader.on('close', () => {
  solution(target, nums)
  process.exit();
});

const solution = (target, nums) => {
  let max = 0
  let temp = 0
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        temp = nums[i] + nums[j] + nums[k]
        if (temp <= target) max = Math.max(max, temp)
        if (max === target) break
      }
    }
  }
  console.log(max);
}
