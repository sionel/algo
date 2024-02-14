const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
.readFileSync(filePath)
.toString()
.replaceAll("\r", "")
.split("\n");

let n = Number(input[0])
let max = Math.floor((n+1)/2)
const arr = Array.from({length: max}, (_,i) => (i+1)*(i+1))
const set = new Set(arr)
const result = []
for(let i = max-1; i >= 0; i--){
  if(set.has(arr[i] - n )){
    result.push(i+1)
  }
}

console.log(result.length ? result.reverse().join("\n")  : -1);