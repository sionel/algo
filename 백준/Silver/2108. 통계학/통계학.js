const fs = require("fs");
//"./input.txt , /dev/stdin"
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
solution(input)
function solution(arr) {
  const count = arr.shift()
  const nums = arr.map(e => Number(e))
  nums.sort((a, b) => a - b)
  const sum = nums.reduce((sum, cur) => sum + cur, 0)
  let avg = Math.round(sum / count)
  avg = avg ? avg : 0
  const range = nums[nums.length - 1] - nums[0]
  const center = nums[count >> 1]
  const mf = nums.reduce((obj, current) => {
    obj[current] = obj[current] ? obj[current] + 1 : 1
    return obj
  }, {})
  const newArr = Object.entries(mf).sort((a,b)=> a[0]-b[0]).sort((a,b)=> b[1]-a[1])
  let mfv = (newArr.length >=2 && newArr[1][1] === newArr[0][1]) ? newArr[1][0] : newArr[0][0]

  console.log(avg);
  console.log(center);
  console.log(mfv);
  console.log(range);
}


