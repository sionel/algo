const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs
    .readFileSync(filePath)
    .toString()
    .replaceAll("\r", "")
    .split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();
const n = Number(input())

let set = new Set([n])
let result = 0
while(true){
  const temp = new Set()
  set.forEach(v=>{
    v-3 >= 0 && temp.add(v-3)
    v-5 >= 0 && temp.add(v-5)
  })
  result++
  if(temp.has(0)) break
  else if(temp.size === 0){
    result = -1
    break
  }
  set = temp
}
console.log(result);
