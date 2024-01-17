let count = 0
let nums = []
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  nums.push(Number(line))
  if(++count === 3)  reader.close()

});
reader.on('close', () => {
  solution(nums)
  process.exit();
});

const solution = (nums) => {
  const mul = nums.reduce((mul,cur)=>mul*cur,1) + ""
  const obj = {
    0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0
  }
  for(let i = 0 ; i < mul.length; i++){
    obj[mul[i]]++
  }
  Object.values(obj).forEach(e=>console.log(e))
}