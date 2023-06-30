const fs = require("fs");
//"./input.txt , /dev/stdin"
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
solution(input)
function solution(arr) {
  const count = arr.shift()
  const stack = []
  let answer = ''
  let number = 1
  for(let i = 0 ; i < count ; i++){
    
    while(number <= Number(arr[i])){
      stack.push(number++)
      answer+="+\n"
    }
    const temp = stack.pop()
    if(Number(arr[i]) !== temp) {
      console.log("NO");
      return 
    }
    answer+="-\n"
  }
  console.log(answer);
  return 
}

