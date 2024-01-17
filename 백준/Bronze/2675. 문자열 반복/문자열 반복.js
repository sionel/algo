const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
let n = Number(input())
let result = []

while(n--){
  const [count , P] = input().split(' ')
  let str = ""
  for(let i = 0 ; i < P.length ; i++){
    str += P[i].repeat(Number(count))
  }
  result.push(str)
}

console.log(result.join("\n"));